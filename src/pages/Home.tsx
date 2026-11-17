import { useCallback, useEffect, useRef } from 'react'
import { Mascot3D } from '../components/mascot/Mascot3D'
import { lessonPath, lessons, modules } from '../content/course'
import { useI18n } from '../i18n/useI18n'
import { onLinkClick } from '../lib/router'
import { useStore } from '../lib/store'

export function Home() {
  const { ui, t } = useI18n()
  const current = useStore((s) => s.current)
  const completed = useStore((s) => s.completed)
  const hero = useRef<HTMLElement>(null)

  const getScroll = useCallback(() => {
    const h = hero.current?.offsetHeight ?? innerHeight
    return Math.min(1, Math.max(0, scrollY / (h * 0.8)))
  }, [])

  // Drive the CSS side of the hero → content transition with the same progress value.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      hero.current?.style.setProperty('--hero-p', getScroll().toFixed(3))
    }
    const onScroll = () => (raf ||= requestAnimationFrame(update))
    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [getScroll])

  const startId = current ?? lessons[0].lesson.id

  return (
    <div className="home">
      <section className="hero" ref={hero} aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{ui.heroEyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {ui.heroTitle}
          </h1>
          <p className="hero__lead">{ui.heroLead}</p>
          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href={lessonPath(startId)} onClick={onLinkClick}>
              {current ? ui.continue : ui.start} <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#roadmap">
              {ui.viewRoadmap}
            </a>
          </div>
        </div>
        <div className="hero__stage">
          <Mascot3D mode="hero" getScroll={getScroll} />
        </div>
        <p className="hero__scroll" aria-hidden="true">
          {ui.scrollHint} ↓
        </p>
      </section>

      <section className="how" aria-labelledby="how-title">
        <h2 id="how-title" className="section-title">
          {ui.howTitle}
        </h2>
        <ul className="how__grid">
          {ui.how.map(([title, body], i) => (
            <li key={title} className="how__card">
              <span className="how__num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="roadmap" className="modules" aria-labelledby="modules-title">
        <h2 id="modules-title" className="section-title">
          {ui.modulesTitle}
        </h2>
        <ol className="modules__grid">
          {modules.map((m) => {
            const done = m.lessons.filter((l) => completed.includes(l.id)).length
            return (
              <li key={m.id}>
                <a className="module-card" href={lessonPath(m.lessons[0].id)} onClick={onLinkClick}>
                  <span className="module-card__num">{m.number}</span>
                  <span className="module-card__title">{t(m.title)}</span>
                  <span className="module-card__obj">{t(m.objective)}</span>
                  <span className="module-card__foot">
                    <span>{ui.lessonsCount(m.lessons.length)}</span>
                    <span className="module-card__bar" aria-hidden="true">
                      <span style={{ width: `${(done / m.lessons.length) * 100}%` }} />
                    </span>
                    <span>
                      {done}/{m.lessons.length}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
