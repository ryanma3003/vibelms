import { useId, useRef, useState, type KeyboardEvent } from 'react'
import type { Block, Os } from '../../types/content'
import { Blocks } from './Blocks'

const NAMES: Record<Os, string> = { windows: 'Windows', macos: 'macOS', linux: 'Linux' }

function detectOs(): Os {
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'windows'
  if (/Mac OS X|Macintosh/i.test(ua)) return 'macos'
  return 'linux'
}

export function OsTabs({ tabs }: { tabs: { os: Os; blocks: Block[] }[] }) {
  const base = useId()
  const preferred = detectOs()
  const [active, setActive] = useState(Math.max(0, tabs.findIndex((t) => t.os === preferred)))
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    const target = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (active + delta + tabs.length) % tabs.length
    if (!delta && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    setActive(target)
    refs.current[target]?.focus()
  }

  return (
    <div className="os-tabs">
      <div role="tablist" aria-label="Operating system" className="os-tabs__list" onKeyDown={onKey}>
        {tabs.map((tab, i) => (
          <button
            key={tab.os}
            ref={(el) => {
              refs.current[i] = el
            }}
            role="tab"
            type="button"
            id={`${base}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className="os-tabs__tab"
            onClick={() => setActive(i)}
          >
            {NAMES[tab.os]}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.os}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          className="os-tabs__panel"
        >
          <Blocks blocks={tab.blocks} />
        </div>
      ))}
    </div>
  )
}
