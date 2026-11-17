import { useEffect, useRef, useState } from 'react'

async function writeClipboard(text: string): Promise<void> {
  if (navigator.clipboard && isSecureContext) {
    try {
      return await navigator.clipboard.writeText(text)
    } catch {
      // Permission denied or document not focused: use the legacy path below.
    }
  }
  // Fallback for non-secure contexts (e.g. LAN preview over http) and denied permissions.
  // Restore focus afterwards so keyboard users stay on the copy button.
  const active = document.activeElement as HTMLElement | null
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  const ok = document.execCommand('copy')
  ta.remove()
  active?.focus({ preventScroll: true })
  if (!ok) throw new Error('copy failed')
}

/** Copy with a transient status for confirmation UI. */
export function useCopy() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  const copy = async (text: string) => {
    try {
      await writeClipboard(text)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 2000)
  }
  return { status, copy }
}
