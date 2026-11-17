import { useI18n } from '../../i18n/useI18n'
import { actions, useStore } from '../../lib/store'
import type { L } from '../../types/content'
import { Inline } from './Inline'

export function Checklist({ lessonId, items }: { lessonId: string; items: L[] }) {
  const { ui, t } = useI18n()
  const checks = useStore((s) => s.checks)
  const done = items.filter((_, i) => checks[`${lessonId}:${i}`]).length
  return (
    <div className="checklist">
      <p className="checklist__hint">
        {ui.checklistHint}{' '}
        <span className="checklist__count">
          {done}/{items.length}
        </span>
      </p>
      <ul>
        {items.map((item, i) => {
          const key = `${lessonId}:${i}`
          return (
            <li key={key}>
              <label className="check">
                <input type="checkbox" checked={!!checks[key]} onChange={() => actions.toggleCheck(key)} />
                <span className="check__box" aria-hidden="true" />
                <span className="check__text">
                  <Inline text={t(item)} />
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
