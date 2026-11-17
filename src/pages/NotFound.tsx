import { CatSvg } from '../components/mascot/CatSvg'
import { useI18n } from '../i18n/useI18n'
import { onLinkClick } from '../lib/router'

export function NotFound() {
  const { ui } = useI18n()
  return (
    <section className="not-found">
      <CatSvg className="not-found__cat" />
      <h1>404</h1>
      <p>{ui.notFound}</p>
      <a className="btn btn--primary" href="/" onClick={onLinkClick}>
        {ui.goHome}
      </a>
    </section>
  )
}
