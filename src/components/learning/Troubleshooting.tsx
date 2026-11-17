import { useI18n } from '../../i18n/useI18n'
import type { Trouble } from '../../types/content'
import { Blocks } from './Blocks'

/** Native <details> accordion: keyboard and screen-reader accessible without extra JS. */
export function Troubleshooting({ items }: { items: Trouble[] }) {
  const { ui, t } = useI18n()
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <details key={i} className="accordion__item">
          <summary>
            <span className="accordion__mark" aria-hidden="true" />
            {t(item.problem)}
          </summary>
          <div className="accordion__body">
            {item.error && (
              <pre className="error-text" aria-label={ui.errorText} tabIndex={0}>
                {item.error}
              </pre>
            )}
            <Blocks blocks={item.solution} />
          </div>
        </details>
      ))}
    </div>
  )
}
