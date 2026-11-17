import { useEffect, useRef } from 'react'
import { Blocks } from '../components/learning/Blocks'
import { Checklist } from '../components/learning/Checklist'
import { Inline } from '../components/learning/Inline'
import { Quiz } from '../components/learning/Quiz'
import { Troubleshooting } from '../components/learning/Troubleshooting'
import { CatSvg } from '../components/mascot/CatSvg'
import { lessonPath, lessons, type LessonEntry } from '../content/course'
import { useI18n } from '../i18n/useI18n'
import { onLinkClick } from '../lib/router'
import { actions, useStore } from '../lib/store'

export function LessonPage({ entry }: { entry: LessonEntry }) {
  const { ui, t } = useI18n()
  const { lesson, module, number, index, isLastInModule } = entry
  const done = useStore((s) => s.completed.includes(lesson.id))
  const heading = useRef<HTMLHeadingElement>(null)
  const prev = lessons[index - 1]
  const next = lessons[index + 1]

  useEffect(() => {
    actions.visit(lesson.id)
    // Client-side navigation: move focus to the new heading for keyboard & screen-reader users.
    // Skipped on the initial document load so the page starts at its natural focus.
    if (history.state?.spa) heading.current?.focus({ preventScroll: true })
  }, [lesson.id])

  return (
    <article className="lesson">
      <header className="lesson__head">
        <p className="eyebrow">
          {ui.module} {module.number} · {t(module.title)} — {ui.lesson} {number}/{module.lessons.length}
        </p>
        <h1 ref={heading} tabIndex={-1}>
          {t(lesson.title)}
        </h1>
        <dl className="lesson__meta">
          <div>
            <dt>{ui.objective}</dt>
            <dd>
              <Inline text={t(lesson.objective)} />
            </dd>
          </div>
          <div>
            <dt>{ui.estimated}</dt>
            <dd>
              ±{lesson.minutes} {ui.minutes}
            </dd>
          </div>
        </dl>
      </header>

      <aside className="cat-hint" aria-label={ui.catSays}>
        <CatSvg className="cat-hint__avatar" />
        <p className="cat-hint__bubble">
          <Inline text={t(lesson.mascot)} />
        </p>
      </aside>

      <section className="lesson__section" aria-labelledby="sec-explain">
        <h2 id="sec-explain">{ui.explanation}</h2>
        <Blocks blocks={lesson.explanation} />
      </section>

      <section className="lesson__section" aria-labelledby="sec-steps">
        <h2 id="sec-steps">{ui.instructions}</h2>
        <Blocks blocks={lesson.instructions} />
      </section>

      <section className="lesson__section result" aria-labelledby="sec-result">
        <h2 id="sec-result">{ui.result}</h2>
        <p>
          <Inline text={t(lesson.result)} />
        </p>
      </section>

      {lesson.troubleshooting.length > 0 && (
        <section className="lesson__section" aria-labelledby="sec-trouble">
          <h2 id="sec-trouble">{ui.troubleshooting}</h2>
          <Troubleshooting items={lesson.troubleshooting} />
        </section>
      )}

      <section className="lesson__section" aria-labelledby="sec-check">
        <h2 id="sec-check">{ui.checklist}</h2>
        <Checklist lessonId={lesson.id} items={lesson.checklist} />
      </section>

      {isLastInModule && module.quiz && (
        <section className="lesson__section" aria-labelledby="sec-quiz">
          <h2 id="sec-quiz">
            {ui.quizTitle} · {ui.module} {module.number}
          </h2>
          <Quiz moduleId={module.id} questions={module.quiz} />
        </section>
      )}

      <nav className="lesson__nav" aria-label={`${ui.prev} / ${ui.next}`}>
        {prev ? (
          <a className="btn btn--ghost lesson__prev" href={lessonPath(prev.lesson.id)} onClick={onLinkClick}>
            <span aria-hidden="true">←</span>
            <span>
              <small>{ui.prev}</small>
              {t(prev.lesson.title)}
            </span>
          </a>
        ) : (
          <span />
        )}
        <button
          type="button"
          className={done ? 'btn btn--success lesson__done' : 'btn btn--primary lesson__done'}
          aria-pressed={done}
          onClick={() => actions.toggleComplete(lesson.id)}
        >
          {done ? `✓ ${ui.markUndone}` : ui.markDone}
        </button>
        <a
          className="btn btn--ghost lesson__next"
          href={next ? lessonPath(next.lesson.id) : '/graduation'}
          onClick={onLinkClick}
        >
          <span>
            <small>{ui.next}</small>
            {next ? t(next.lesson.title) : ui.finish}
          </span>
          <span aria-hidden="true">→</span>
        </a>
      </nav>
    </article>
  )
}
