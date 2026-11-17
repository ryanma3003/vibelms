import { useId, useState, type ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { useCopy } from '../../lib/clipboard'
import { actions, useStore } from '../../lib/store'
import type { L } from '../../types/content'
import { Inline } from './Inline'

const PLACEHOLDER = /\[[^\]\n]+\]/g

interface Props {
  id: string
  title: L
  description: L
  prompt: string | L
  note?: L
}

function withMarks(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(PLACEHOLDER)) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(<mark key={m.index}>{m[0]}</mark>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export function PromptBlock({ id, title, description, prompt, note }: Props) {
  const { ui, t } = useI18n()
  const original = t(prompt)
  const saved = useStore((s) => s.prompts[id])
  const text = saved ?? original
  const [editing, setEditing] = useState(false)
  const { status, copy } = useCopy()
  const textareaId = useId()
  const placeholders = [...new Set(text.match(PLACEHOLDER) ?? [])]

  return (
    <section className="prompt" aria-label={`${ui.promptLabel}: ${t(title)}`}>
      <header className="prompt__head">
        <span className="prompt__label">{ui.promptLabel}</span>
        <h4 className="prompt__title">{t(title)}</h4>
        {saved !== undefined && <span className="badge">{ui.edited}</span>}
      </header>
      <p className="prompt__desc">
        <Inline text={t(description)} />
      </p>

      {editing ? (
        <>
          <label className="sr-only" htmlFor={textareaId}>
            {ui.edit}: {t(title)}
          </label>
          <textarea
            id={textareaId}
            className="prompt__editor"
            value={text}
            rows={Math.min(30, text.split('\n').length + 1)}
            spellCheck={false}
            onChange={(e) => actions.savePrompt(id, e.target.value === original ? null : e.target.value)}
          />
        </>
      ) : (
        <pre className="prompt__body" tabIndex={0}>
          {withMarks(text)}
        </pre>
      )}

      <div className="prompt__actions">
        <button type="button" className="btn btn--primary" onClick={() => copy(text)}>
          {status === 'copied' ? ui.copied : status === 'failed' ? ui.copyFailed : ui.copyPrompt}
        </button>
        <button type="button" className="btn btn--ghost" onClick={() => setEditing(!editing)} aria-pressed={editing}>
          {editing ? ui.doneEditing : ui.edit}
        </button>
        {saved !== undefined && (
          <button type="button" className="btn btn--ghost" onClick={() => actions.savePrompt(id, null)}>
            {ui.resetPrompt}
          </button>
        )}
        <span className="sr-only" role="status">
          {status === 'copied' ? ui.copied : status === 'failed' ? ui.copyFailed : ''}
        </span>
      </div>

      {(placeholders.length > 0 || note) && (
        <aside className="prompt__note">
          {placeholders.length > 0 && (
            <>
              <p>{ui.customize}</p>
              <ul className="prompt__chips">
                {placeholders.map((p) => (
                  <li key={p}>
                    <mark>{p}</mark>
                  </li>
                ))}
              </ul>
            </>
          )}
          {note && (
            <p>
              <Inline text={t(note)} />
            </p>
          )}
        </aside>
      )}
    </section>
  )
}
