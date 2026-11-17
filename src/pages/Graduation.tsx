import { useProgress } from '../components/layout/ProgressMeter'
import { Mascot3D } from '../components/mascot/Mascot3D'
import { lessonPath, lessons } from '../content/course'
import { useI18n } from '../i18n/useI18n'
import { onLinkClick } from '../lib/router'
import { useStore } from '../lib/store'

const LINKS = [
  { name: 'GitHub', url: 'https://github.com/' },
  { name: 'Vercel', url: 'https://vercel.com/' },
  { name: 'VS Code', url: 'https://code.visualstudio.com/' },
  { name: 'Bun', url: 'https://bun.com/' },
  { name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { name: 'Claude', url: 'https://claude.ai/' },
  { name: 'Gemini', url: 'https://gemini.google.com/' },
  { name: 'Z.ai', url: 'https://chat.z.ai/' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com/' },
]

export function Graduation() {
  const { ui } = useI18n()
  const { done, total } = useProgress()
  const current = useStore((s) => s.current)

  return (
    <section className="grad" aria-labelledby="grad-title">
      <div className="grad__stage">
        <Mascot3D mode="celebrate" />
      </div>
      <p className="eyebrow">🎓 Vibecoding</p>
      <h1 id="grad-title" className="grad__title">
        {ui.gradTitle}
      </h1>
      <p className="grad__lead">{ui.gradLead}</p>
      <p className="grad__stats">
        <strong>{ui.gradStats(done, total)}</strong>
        {done < total && <span> — {ui.gradNotDone}</span>}
      </p>

      <h2 className="grad__links-title">{ui.gradLinks}</h2>
      <ul className="grad__links">
        {LINKS.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.name} <span aria-hidden="true">↗</span>
              <span className="sr-only">{ui.externalLink}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="grad__keep">{ui.gradKeep}</p>
      <a className="btn btn--ghost" href={lessonPath(current ?? lessons[0].lesson.id)} onClick={onLinkClick}>
        ← {ui.backToCourse}
      </a>
    </section>
  )
}
