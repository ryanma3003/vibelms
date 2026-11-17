import { useSyncExternalStore } from 'react'

function subscribe(l: () => void) {
  addEventListener('popstate', l)
  return () => removeEventListener('popstate', l)
}

export function usePath(): string {
  return useSyncExternalStore(subscribe, () => location.pathname)
}

export function navigate(path: string) {
  if (path === location.pathname) return
  history.pushState({ spa: true }, '', path)
  dispatchEvent(new PopStateEvent('popstate'))
  scrollTo({ top: 0 })
}

/** Click handler for internal <a href> links: keeps native semantics, avoids reloads. */
export function onLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  navigate(e.currentTarget.getAttribute('href')!)
}
