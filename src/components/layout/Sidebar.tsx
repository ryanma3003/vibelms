import { useEffect, useRef, useState } from 'react'
import { lessonById, lessonPath, modules } from '../../content/course'
import { useI18n } from '../../i18n/useI18n'
import { onLinkClick } from '../../lib/router'
import { actions, useStore } from '../../lib/store'
import { ProgressMeter } from './ProgressMeter'

interface Props {
  activeId: string | null
  /** Called after a link is followed (closes the drawer on small screens). */
  onNavigate: () => void
}

export function Sidebar({ activeId, onNavigate }: Props) {
  const { ui, t } = useI18n()
  const completed = useStore((s) => s.completed)
  const activeModule = activeId ? lessonById.get(activeId)?.module.id : undefined
  const [open, setOpen] = useState<Set<string>>(() => new Set([activeModule ?? modules[0].id]))
  const dialog = useRef<HTMLDialogElement>(null)
  const activeLink = useRef<HTMLAnchorElement>(null)

  // Expand the module of the lesson being viewed and keep it in view.
  useEffect(() => {
    if (activeModule) setOpen((s) => (s.has(activeModule) ? s : new Set(s).add(activeModule)))
    activeLink.current?.scrollIntoView({ block: 'nearest' })
  }, [activeModule, activeId])

  const toggle = (id: string) =>
    setOpen((s) => {
      const next = new Set(s)
      if (!next.delete(id)) next.add(id)
      return next
    })

  const follow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onLinkClick(e)
    onNavigate()
  }

  return (
    <nav className="sidebar__inner" aria-label={ui.roadmap}>
      <ProgressMeter detailed />
      <h2 className="sidebar__title">{ui.roadmap}</h2>
      <ol className="roadmap">
        {modules.map((m) => {
          const isOpen = open.has(m.id)
          const doneCount = m.lessons.filter((l) => completed.includes(l.id)).length
          const panelId = `mod-${m.id}`
          return (
            <li key={m.id} className="roadmap__module" data-current={m.id === activeModule}>
              <button type="button" className="roadmap__toggle" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(m.id)}>
                <span className="roadmap__num">{m.number}</span>
                <span className="roadmap__mtitle">{t(m.title)}</span>
                <span className="roadmap__count" aria-label={`${doneCount}/${m.lessons.length} ${ui.statusDone}`}>
                  {doneCount}/{m.lessons.length}
                </span>
                <span className="roadmap__chev" aria-hidden="true" />
              </button>
              <ol id={panelId} className="roadmap__lessons" hidden={!isOpen}>
                {m.lessons.map((l, i) => {
                  const done = completed.includes(l.id)
                  const current = l.id === activeId
                  const status = done ? ui.statusDone : current ? ui.statusCurrent : ui.statusTodo
                  return (
                    <li key={l.id}>
                      <a
                        ref={current ? activeLink : undefined}
                        href={lessonPath(l.id)}
                        className="roadmap__lesson"
                        data-state={done ? 'done' : current ? 'current' : 'todo'}
                        aria-current={current ? 'page' : undefined}
                        onClick={follow}
                      >
                        <span className="roadmap__status" aria-hidden="true">
                          {done ? '✓' : i + 1}
                        </span>
                        <span className="roadmap__ltitle">{t(l.title)}</span>
                        <span className="roadmap__min">
                          {l.minutes} {ui.min}
                        </span>
                        <span className="sr-only">, {status}</span>
                      </a>
                    </li>
                  )
                })}
              </ol>
            </li>
          )
        })}
      </ol>
      <a href="/graduation" className="roadmap__grad" onClick={follow}>
        🎓 {ui.finish}
      </a>
      <button type="button" className="btn btn--ghost btn--sm sidebar__reset" onClick={() => dialog.current?.showModal()}>
        {ui.resetProgress}
      </button>
      <dialog ref={dialog} className="dialog" aria-labelledby="reset-title">
        <form method="dialog">
          <h2 id="reset-title">{ui.resetTitle}</h2>
          <p>{ui.resetBody}</p>
          <div className="dialog__actions">
            <button value="cancel" className="btn btn--ghost" autoFocus>
              {ui.cancel}
            </button>
            <button value="confirm" className="btn btn--danger" onClick={actions.resetProgress}>
              {ui.resetConfirm}
            </button>
          </div>
        </form>
      </dialog>
    </nav>
  )
}
