import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'

const TOKEN = /`([^`]+)`|\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g

/** Renders prose with inline `code`, **bold** and [text](https://url). */
export function Inline({ text }: { text: string }) {
  const { ui } = useI18n()
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const key = m.index
    if (m[1] !== undefined) out.push(<code key={key}>{m[1]}</code>)
    else if (m[2] !== undefined) out.push(<strong key={key}>{m[2]}</strong>)
    else
      out.push(
        <a key={key} href={m[4]} target="_blank" rel="noopener noreferrer">
          {m[3]}
          <span className="sr-only"> {ui.externalLink}</span>
        </a>,
      )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}
