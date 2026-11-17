import { useI18n } from '../../i18n/useI18n'
import { onLinkClick } from '../../lib/router'
import { actions, useStore } from '../../lib/store'
import type { Lang } from '../../types/content'
import { ProgressMeter } from './ProgressMeter'

interface Props {
  menuOpen: boolean
  onMenu: () => void
}

export function TopBar({ menuOpen, onMenu }: Props) {
  const { ui, lang } = useI18n()
  const theme = useStore((s) => s.theme)
  const readMode = useStore((s) => s.readMode)

  return (
    <header className="topbar">
      <button
        type="button"
        className="icon-btn topbar__menu"
        aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
        aria-expanded={menuOpen}
        aria-controls="course-nav"
        onClick={onMenu}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
        </svg>
      </button>
      <a href="/" className="brand" onClick={onLinkClick}>
        <span className="brand__mark" aria-hidden="true">
          V
        </span>
        <span className="brand__text">
          <strong>{ui.brand}</strong>
          <span className="brand__sub">{ui.courseTitle}</span>
        </span>
      </a>

      <div className="topbar__tools">
        <ProgressMeter />

        <div className="segmented" role="group" aria-label={ui.language}>
          {(['id', 'en'] as Lang[]).map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => actions.setLang(l)} lang={l}>
              <span aria-hidden="true">{l.toUpperCase()}</span>
              <span className="sr-only">{l === 'id' ? 'Bahasa Indonesia' : 'English'}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="icon-btn"
          aria-label={`${ui.theme}: ${theme === 'dark' ? ui.dark : ui.light}`}
          title={`${ui.theme}: ${theme === 'dark' ? ui.dark : ui.light}`}
          onClick={() => actions.setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {theme === 'dark' ? (
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </>
            )}
          </svg>
        </button>

        <button
          type="button"
          className="icon-btn"
          aria-pressed={readMode}
          aria-label={ui.readMode}
          title={readMode ? ui.readModeOn : ui.readMode}
          onClick={actions.toggleRead}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1V19c-2.5-1-6-1-9 1-3-2-6.5-2-9-1z" />
            <path d="M12 6.5V20" />
          </svg>
        </button>
      </div>
    </header>
  )
}
