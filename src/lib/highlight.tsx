import type { ReactNode } from 'react'

/**
 * Minimal, dependency-free highlighter for shell-like snippets shown in lessons.
 * Recognizes comments, strings, flags, variables and the leading command word.
 */
const SHELL = /(#.*$)|("(?:[^"\\]|\\.)*"|'[^']*')|(\s--?[\w-]+)|(\$[\w:]+)|(https?:\/\/\S+)/gm

export function highlight(code: string, lang: string): ReactNode {
  if (lang === 'text') return code
  if (lang === 'json') return highlightJson(code)
  return code.split('\n').map((line, i, all) => (
    <span key={i}>
      {highlightShellLine(line, lang)}
      {i < all.length - 1 ? '\n' : null}
    </span>
  ))
}

function highlightShellLine(line: string, lang: string): ReactNode[] {
  const out: ReactNode[] = []
  const trimmed = line.trimStart()
  if (lang === 'gitignore') {
    if (trimmed.startsWith('#')) return [<span key="c" className="tok-comment">{line}</span>]
    if (trimmed.startsWith('!')) return [<span key="n" className="tok-flag">{line}</span>]
    return [line]
  }
  // Leading command word (git, npm, bun, Set-ExecutionPolicy …)
  const cmd = /^(\s*)([A-Za-z][\w.-]*)/.exec(line)
  let rest = line
  if (cmd && !trimmed.startsWith('#')) {
    out.push(cmd[1], <span key="cmd" className="tok-cmd">{cmd[2]}</span>)
    rest = line.slice(cmd[0].length)
  }
  let last = 0
  for (const m of rest.matchAll(SHELL)) {
    if (m.index > last) out.push(rest.slice(last, m.index))
    const cls = m[1] ? 'tok-comment' : m[2] ? 'tok-string' : m[3] ? 'tok-flag' : m[4] ? 'tok-var' : 'tok-url'
    out.push(<span key={m.index} className={cls}>{m[0]}</span>)
    last = m.index + m[0].length
  }
  if (last < rest.length) out.push(rest.slice(last))
  return out
}

const JSON_TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g

function highlightJson(code: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of code.matchAll(JSON_TOKEN)) {
    if (m.index > last) out.push(code.slice(last, m.index))
    if (m[1]) {
      out.push(<span key={m.index} className={m[2] ? 'tok-cmd' : 'tok-string'}>{m[1]}</span>)
      if (m[2]) out.push(m[2])
    } else out.push(<span key={m.index} className="tok-flag">{m[0]}</span>)
    last = m.index + m[0].length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}
