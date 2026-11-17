import { lessons } from '../../content/course'
import { useI18n } from '../../i18n/useI18n'
import { useStore } from '../../lib/store'

export function useProgress() {
  const completed = useStore((s) => s.completed)
  const done = lessons.filter((e) => completed.includes(e.lesson.id)).length
  const total = lessons.length
  return { done, total, pct: Math.round((done / total) * 100) }
}

/** Compact (top bar) or detailed (sidebar) progress indicator. */
export function ProgressMeter({ detailed = false }: { detailed?: boolean }) {
  const { ui } = useI18n()
  const { done, total, pct } = useProgress()
  const bar = (
    <div
      className="meter"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-valuetext={ui.progressLabel(done, total, pct)}
      aria-label={ui.progressTitle}
    >
      <span className="meter__fill" style={{ width: `${pct}%` }} />
    </div>
  )
  if (!detailed)
    return (
      <div className="progress-mini" title={ui.progressLabel(done, total, pct)}>
        {bar}
        <span className="progress-mini__pct" aria-hidden="true">
          {pct}%
        </span>
      </div>
    )
  return (
    <div className="progress-card">
      <p className="progress-card__title">{ui.progressTitle}</p>
      <p className="progress-card__nums" aria-hidden="true">
        <span>
          {ui.progressCompleted}: <strong>{done}</strong> / {total} {ui.progressLessons}
        </span>
        <strong>{pct}%</strong>
      </p>
      {bar}
    </div>
  )
}
