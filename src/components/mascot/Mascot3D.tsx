import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { CatSvg } from './CatSvg'
import type { CatController, CatMode } from './catScene'

interface Props {
  mode: CatMode
  /** Optional scroll progress source (0..1) read on scroll events. */
  getScroll?: () => number
  className?: string
}

/**
 * Lazy 3D mascot. Shows the static SVG until the Three.js chunk has loaded and the
 * renderer initialised (WebGPU → WebGL2). If both fail, the SVG simply stays.
 */
export function Mascot3D({ mode, getScroll, className }: Props) {
  const { ui } = useI18n()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)
  const [backend, setBackend] = useState<string>('')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let ctrl: CatController | undefined
    let cancelled = false
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

    const onPointer = (e: PointerEvent) =>
      ctrl?.setPointer((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1))
    const onScroll = () => getScroll && ctrl?.setScroll(getScroll())
    const io = new IntersectionObserver(([entry]) => ctrl?.setPaused(!entry.isIntersecting))

    import('./catScene')
      .then(({ createCatScene }) => createCatScene(canvas, { mode, reducedMotion }))
      .then((c) => {
        if (cancelled) return c.dispose()
        ctrl = c
        setBackend(c.backend)
        setReady(true)
        onScroll()
        io.observe(canvas)
        addEventListener('pointermove', onPointer, { passive: true })
        addEventListener('scroll', onScroll, { passive: true })
      })
      .catch((err) => console.info('3D mascot unavailable, using illustration.', err))

    return () => {
      cancelled = true
      io.disconnect()
      removeEventListener('pointermove', onPointer)
      removeEventListener('scroll', onScroll)
      ctrl?.dispose()
    }
  }, [mode, getScroll])

  return (
    <div className={`mascot3d ${className ?? ''}`} data-ready={ready} data-backend={backend}>
      <CatSvg className="mascot3d__fallback" />
      <canvas ref={canvasRef} className="mascot3d__canvas" role="img" aria-label={ui.mascotAlt} />
    </div>
  )
}
