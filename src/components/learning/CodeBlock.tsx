import { useI18n } from '../../i18n/useI18n'
import { useCopy } from '../../lib/clipboard'
import { highlight } from '../../lib/highlight'
import type { L } from '../../types/content'
import { Inline } from './Inline'

const LABELS: Record<string, string> = {
  bash: 'Terminal',
  powershell: 'PowerShell',
  cmd: 'Command Prompt',
  text: 'Text',
  gitignore: '.gitignore',
  json: 'JSON',
}

interface Props {
  lang: string
  code: string
  caption?: L
  output?: string
}

export function CodeBlock({ lang, code, caption, output }: Props) {
  const { ui, t } = useI18n()
  const { status, copy } = useCopy()
  const isShell = lang === 'bash' || lang === 'powershell' || lang === 'cmd'
  return (
    <figure className="code">
      <figcaption className="code__head">
        <span className="code__lang">{LABELS[lang] ?? lang}</span>
        {caption && (
          <span className="code__caption">
            <Inline text={t(caption)} />
          </span>
        )}
        <button
          type="button"
          className="btn btn--ghost btn--sm code__copy"
          onClick={() => copy(code)}
          data-status={status}
        >
          {status === 'copied' ? ui.copied : status === 'failed' ? ui.copyFailed : ui.copy}
        </button>
        <span className="sr-only" role="status">
          {status === 'copied' ? ui.copied : status === 'failed' ? ui.copyFailed : ''}
        </span>
      </figcaption>
      <pre className={isShell ? 'code__body code__body--shell' : 'code__body'} tabIndex={0}>
        <code>{highlight(code, lang)}</code>
      </pre>
      {output && (
        <div className="code__output">
          <span className="code__output-label">{ui.output}</span>
          <pre tabIndex={0}>
            <samp>{output}</samp>
          </pre>
        </div>
      )}
    </figure>
  )
}
