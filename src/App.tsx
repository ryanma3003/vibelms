import { useEffect, useRef, useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'
import { lessonById } from './content/course'
import { useI18n } from './i18n/useI18n'
import { usePath } from './lib/router'
import { Graduation } from './pages/Graduation'
import { Home } from './pages/Home'
import { LessonPage } from './pages/LessonPage'
import { NotFound } from './pages/NotFound'

export function App() {
  const { ui, t } = useI18n()
  const path = usePath()
  const [drawer, setDrawer] = useState(false)
  const drawerRef = useRef<HTMLElement>(null)

  const lessonId = path.startsWith('/learn/') ? decodeURIComponent(path.slice('/learn/'.length)) : null
  const entry = lessonId ? lessonById.get(lessonId) : undefined
  const isHome = path === '/'
  const isGrad = path === '/graduation'

  useEffect(() => setDrawer(false), [path])

  useEffect(() => {
    document.title = entry
      ? `${t(entry.lesson.title)} · Vibecoding`
      : isGrad
        ? `🎓 ${ui.finish} · Vibecoding`
        : 'Vibecoding — From Zero to Own Your Application'
  }, [entry, isGrad, t, ui])

  useEffect(() => {
    if (!drawer) return
    drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || document.querySelector('dialog[open]')) return
      setDrawer(false)
      document.querySelector<HTMLElement>('.topbar__menu')?.focus()
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [drawer])

  return (
    <div className="app" data-layout={isHome ? 'home' : 'course'} data-drawer={drawer}>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <TopBar menuOpen={drawer} onMenu={() => setDrawer(!drawer)} />
      <div className="app__body">
        <aside id="course-nav" ref={drawerRef} className="sidebar">
          <Sidebar activeId={entry?.lesson.id ?? null} onNavigate={() => setDrawer(false)} />
        </aside>
        <div className="scrim" hidden={!drawer} onClick={() => setDrawer(false)} />
        <main id="main" className="main" tabIndex={-1}>
          {isHome ? <Home /> : entry ? <LessonPage key={entry.lesson.id} entry={entry} /> : isGrad ? <Graduation /> : <NotFound />}
        </main>
      </div>
    </div>
  )
}
