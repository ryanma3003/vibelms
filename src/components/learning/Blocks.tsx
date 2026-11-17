import { useI18n } from '../../i18n/useI18n'
import type { Block } from '../../types/content'
import { Illustration } from '../illustrations/Illustration'
import { CodeBlock } from './CodeBlock'
import { Inline } from './Inline'
import { OsTabs } from './OsTabs'
import { PromptBlock } from './PromptBlock'

const CALLOUT_ICON = { info: 'i', tip: '★', warning: '!', danger: '⚠' } as const

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  )
}

function BlockView({ block: b }: { block: Block }) {
  const { ui, t } = useI18n()
  switch (b.type) {
    case 'p':
      return (
        <p>
          <Inline text={t(b.text)} />
        </p>
      )
    case 'heading':
      return <h4 className="block-heading">{t(b.text)}</h4>
    case 'list': {
      const Tag = b.ordered === false ? 'ul' : 'ol'
      return (
        <Tag className={Tag === 'ol' ? 'steps' : 'bullets'}>
          {b.items.map((item, i) => (
            <li key={i}>
              <Inline text={t(item)} />
            </li>
          ))}
        </Tag>
      )
    }
    case 'callout':
      return (
        <aside className={`callout callout--${b.tone}`}>
          <span className="callout__icon" aria-hidden="true">
            {CALLOUT_ICON[b.tone]}
          </span>
          <div>
            {b.title && <p className="callout__title">{t(b.title)}</p>}
            <p>
              <Inline text={t(b.text)} />
            </p>
          </div>
        </aside>
      )
    case 'code':
      return <CodeBlock lang={b.lang} code={b.code} caption={b.caption} output={b.output} />
    case 'prompt':
      return <PromptBlock id={b.id} title={b.title} description={b.description} prompt={b.prompt} note={b.note} />
    case 'compare':
      return (
        <div className="compare">
          {(['bad', 'good'] as const).map((kind) => {
            const side = b[kind]
            return (
              <div key={kind} className={`compare__side compare__side--${kind}`}>
                <p className="compare__label">
                  <span aria-hidden="true">{kind === 'bad' ? '✕' : '✓'}</span> {kind === 'bad' ? ui.vague : ui.specific}
                  {' · '}
                  {t(side.label)}
                </p>
                <pre className="compare__text" tabIndex={0}>
                  {t(side.text)}
                </pre>
                <p className="compare__why">
                  <Inline text={t(side.why)} />
                </p>
              </div>
            )
          })}
        </div>
      )
    case 'resources':
      return (
        <ul className="resources">
          {b.items.map((r) => (
            <li key={r.url}>
              <a className="resource" href={r.url} target="_blank" rel="noopener noreferrer">
                <span className="resource__name">
                  {r.name} <span aria-hidden="true">↗</span>
                </span>
                <span className="resource__url">{r.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                <span className="resource__desc">{t(r.description)}</span>
                <span className="sr-only">{ui.externalLink}</span>
              </a>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="table-wrap" tabIndex={0}>
          <table>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} scope="col">
                    {t(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>
                      <Inline text={t(cell)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'os':
      return <OsTabs tabs={b.tabs} />
    case 'flow':
      return (
        <ol className="flow">
          {b.steps.map((s, i) => (
            <li key={i}>
              <Inline text={t(s)} />
            </li>
          ))}
        </ol>
      )
    case 'illustration':
      return <Illustration name={b.name} caption={b.caption} />
  }
}
