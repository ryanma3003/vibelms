/**
 * Procedural 3D cat ("Mochi"). Loaded lazily; uses WebGPU when available and
 * three's built-in WebGL2 fallback otherwise. No external model assets.
 */
import {
  CatmullRomCurve3,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Group,
  HemisphereLight,
  InstancedMesh,
  MathUtils,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Quaternion,
  Scene,
  SphereGeometry,
  TorusGeometry,
  TubeGeometry,
  Vector3,
  WebGPURenderer,
} from 'three/webgpu'

export type CatMode = 'hero' | 'celebrate'

export interface CatController {
  backend: 'webgpu' | 'webgl'
  /** Pointer in normalized viewport coords, -1..1 (y up). */
  setPointer(x: number, y: number): void
  /** Scroll progress through the hero, 0..1. */
  setScroll(p: number): void
  setPaused(paused: boolean): void
  dispose(): void
}

const PALETTE = {
  fur: '#f2a066',
  furDark: '#d9783f',
  cream: '#fff1e2',
  pink: '#f29a9a',
  eye: '#1c1d29',
  white: '#ffffff',
}

function mat(color: string, roughness = 0.65) {
  return new MeshStandardMaterial({ color, roughness, metalness: 0 })
}

function buildCat() {
  const cat = new Group()
  const fur = mat(PALETTE.fur)
  const furDark = mat(PALETTE.furDark)
  const cream = mat(PALETTE.cream, 0.8)
  const pink = mat(PALETTE.pink, 0.5)
  const eyeMat = mat(PALETTE.eye, 0.15)
  const shine = new MeshBasicMaterial({ color: PALETTE.white })
  const sphere = new SphereGeometry(1, 40, 28)

  // Body
  const body = new Group()
  const torso = new Mesh(sphere, fur)
  torso.scale.set(0.82, 0.78, 0.72)
  body.add(torso)
  const belly = new Mesh(sphere, cream)
  belly.scale.set(0.5, 0.56, 0.3)
  belly.position.set(0, -0.08, 0.5)
  body.add(belly)
  // Front paws
  for (const side of [-1, 1]) {
    const paw = new Mesh(sphere, cream)
    paw.scale.set(0.2, 0.15, 0.24)
    paw.position.set(side * 0.3, -0.7, 0.42)
    body.add(paw)
  }
  body.position.y = -0.55
  cat.add(body)

  // Tail
  const tail = new Group()
  const tailCurve = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(0.35, 0.1, -0.15),
    new Vector3(0.55, 0.5, -0.2),
    new Vector3(0.45, 0.95, -0.1),
    new Vector3(0.28, 1.1, 0),
  ])
  const tailMesh = new Mesh(new TubeGeometry(tailCurve, 40, 0.09, 12, false), fur)
  tail.add(tailMesh)
  const tailTip = new Mesh(sphere, furDark)
  tailTip.scale.setScalar(0.1)
  tailTip.position.copy(tailCurve.getPoint(1))
  tail.add(tailTip)
  tail.position.set(0.45, -1.05, -0.45)
  cat.add(tail)

  // Head
  const head = new Group()
  head.position.y = 0.45
  const skull = new Mesh(sphere, fur)
  skull.scale.set(0.82, 0.7, 0.7)
  head.add(skull)
  const muzzle = new Mesh(sphere, cream)
  muzzle.scale.set(0.34, 0.22, 0.2)
  muzzle.position.set(0, -0.2, 0.55)
  head.add(muzzle)
  // Tabby forehead stripes: flattened ellipsoids hugging the skull.
  for (const [x, rz] of [[-0.12, 0.25], [0, 0], [0.12, -0.25]] as const) {
    const stripe = new Mesh(sphere, furDark)
    stripe.scale.set(0.035, 0.12, 0.03)
    stripe.position.set(x, 0.42, 0.55)
    stripe.rotation.set(-0.75, 0, rz)
    head.add(stripe)
  }

  const ears: Group[] = []
  for (const side of [-1, 1]) {
    const ear = new Group()
    const outer = new Mesh(new ConeGeometry(0.26, 0.5, 24), fur)
    const inner = new Mesh(new ConeGeometry(0.16, 0.34, 24), pink)
    inner.scale.z = 0.5
    inner.position.set(0, -0.05, 0.12)
    ear.add(outer, inner)
    ear.position.set(side * 0.44, 0.62, -0.02)
    ear.rotation.z = -side * 0.35
    head.add(ear)
    ears.push(ear)
  }

  const eyes = new Group()
  const lids: Mesh[] = []
  for (const side of [-1, 1]) {
    const eye = new Mesh(sphere, eyeMat)
    eye.scale.set(0.12, 0.15, 0.08)
    eye.position.set(side * 0.27, 0.03, 0.6)
    const glint = new Mesh(sphere, shine)
    glint.scale.set(0.038, 0.045, 0.02)
    glint.position.set(side * 0.27 + 0.04, 0.09, 0.67)
    eyes.add(eye, glint)
    lids.push(eye, glint)
    const blush = new Mesh(new CircleGeometry(0.1, 24), new MeshBasicMaterial({ color: PALETTE.pink, transparent: true, opacity: 0.55 }))
    blush.position.set(side * 0.44, -0.16, 0.56)
    blush.rotation.y = side * 0.55
    head.add(blush)
  }
  head.add(eyes)

  const nose = new Mesh(sphere, pink)
  nose.scale.set(0.06, 0.04, 0.04)
  nose.position.set(0, -0.1, 0.74)
  head.add(nose)
  for (const side of [-1, 1]) {
    const mouth = new Mesh(new TorusGeometry(0.055, 0.012, 6, 16, Math.PI), mat(PALETTE.eye, 0.4))
    mouth.position.set(side * 0.055, -0.19, 0.735)
    mouth.rotation.z = Math.PI
    head.add(mouth)
    for (const tilt of [-0.12, 0.08]) {
      const whisker = new Mesh(new CylinderGeometry(0.006, 0.006, 0.42, 4), mat('#6b4a3a', 0.6))
      whisker.rotation.z = Math.PI / 2 + tilt * side
      whisker.position.set(side * 0.52, -0.16 + tilt * 0.4, 0.55)
      head.add(whisker)
    }
  }
  cat.add(head)

  // Soft contact shadow
  const shadow = new Mesh(
    new CircleGeometry(0.8, 40),
    new MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.12, depthWrite: false }),
  )
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = -1.32
  shadow.scale.set(1, 0.6, 1)

  return { cat, head, eyes, lids, ears, tail, body, shadow }
}

function buildConfetti(count: number) {
  const geo = new PlaneGeometry(0.08, 0.14)
  const mesh = new InstancedMesh(geo, new MeshBasicMaterial({ side: DoubleSide }), count)
  const colors = ['#e9875f', '#8b865c', '#f2c14e', '#6aa6d9', '#f29a9a', '#7cc49a']
  const parts = Array.from({ length: count }, (_, i) => {
    mesh.setColorAt(i, new Color(colors[i % colors.length]))
    return {
      pos: new Vector3((Math.random() - 0.5) * 6, Math.random() * 6 - 1, (Math.random() - 0.5) * 2 - 0.5),
      speed: 0.6 + Math.random() * 0.9,
      spin: new Vector3(Math.random(), Math.random(), Math.random()).normalize(),
      angle: Math.random() * Math.PI * 2,
      sway: Math.random() * Math.PI * 2,
    }
  })
  return { mesh, parts }
}

export async function createCatScene(
  canvas: HTMLCanvasElement,
  opts: { mode: CatMode; reducedMotion: boolean },
): Promise<CatController> {
  const renderer = new WebGPURenderer({ canvas, antialias: true, alpha: true })
  await renderer.init()
  const small = Math.min(innerWidth, innerHeight) < 700
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))

  const scene = new Scene()
  const camera = new PerspectiveCamera(32, 1, 0.1, 50)
  camera.position.set(0, 0.1, 7)

  scene.add(new HemisphereLight('#fff6ea', '#8a7a6a', 1.6))
  const key = new DirectionalLight('#ffffff', 2.2)
  key.position.set(3, 4, 5)
  scene.add(key)
  const rim = new DirectionalLight('#ffd2b0', 1.2)
  rim.position.set(-4, 2, -3)
  scene.add(rim)

  const parts = buildCat()
  const root = new Group()
  root.add(parts.cat, parts.shadow)
  scene.add(root)

  const confetti = opts.mode === 'celebrate' ? buildConfetti(small ? 70 : 140) : null
  if (confetti) scene.add(confetti.mesh)

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)
  resize()

  const pointer = { x: 0, y: 0 }
  const look = { x: 0, y: 0 }
  let scroll = 0
  let scrollSmooth = 0
  let paused = false
  let frame = 0
  let nextBlink = 2
  let blinkStart = -1
  const tmpM = new Matrix4()
  const tmpQ = new Quaternion()
  const tmpV = new Vector3()
  const one = new Vector3(1, 1, 1)
  const start = performance.now()
  let last = start

  const tick = (now: number) => {
    frame = requestAnimationFrame(tick)
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const t = (now - start) / 1000
    const motion = !opts.reducedMotion
    const k = 1 - Math.exp(-dt * 6) // frame-rate independent smoothing

    look.x += (pointer.x - look.x) * k
    look.y += (pointer.y - look.y) * k
    scrollSmooth += (scroll - scrollSmooth) * (motion ? k : 1)

    // Head & eye tracking
    parts.head.rotation.y = look.x * 0.55
    parts.head.rotation.x = -look.y * 0.3 + scrollSmooth * 0.35
    parts.head.rotation.z = -look.x * 0.08
    parts.eyes.position.set(look.x * 0.04, look.y * 0.03, 0)
    parts.cat.rotation.y = look.x * 0.18 + scrollSmooth * 0.9

    // Blink
    if (t > nextBlink && blinkStart < 0) blinkStart = t
    if (blinkStart >= 0) {
      const p = (t - blinkStart) / 0.16
      const s = p < 1 ? Math.max(0.08, Math.abs(1 - 2 * p)) : 1
      parts.lids.forEach((m, i) => (m.scale.y = (i % 2 ? 0.045 : 0.15) * s))
      if (p >= 1) {
        blinkStart = -1
        nextBlink = t + 2.5 + Math.random() * 3
      }
    }

    if (motion) {
      const celebrate = opts.mode === 'celebrate'
      const hop = celebrate ? Math.abs(Math.sin(t * 3.2)) * 0.45 : 0
      parts.cat.position.y = Math.sin(t * 1.4) * 0.08 + hop
      parts.body.scale.y = 1 + Math.sin(t * 2.2) * 0.015
      parts.tail.rotation.z = Math.sin(t * (celebrate ? 6 : 2.1)) * 0.25
      parts.tail.rotation.y = Math.sin(t * 1.3) * 0.2
      parts.ears.forEach((ear, i) => {
        const twitch = Math.max(0, Math.sin(t * 0.9 + i * 2.4) - 0.96) * 6
        ear.rotation.x = -twitch * 0.5
      })
      parts.shadow.scale.setScalar(1 - (hop + parts.cat.position.y) * 0.25)
      parts.shadow.scale.y *= 0.6
      if (celebrate) parts.cat.rotation.z = Math.sin(t * 3.2) * 0.08
    }

    // Scroll transition: drift aside, shrink and turn toward the content below.
    root.position.set(scrollSmooth * 1.4, -scrollSmooth * 0.8, 0)
    root.scale.setScalar(1 - scrollSmooth * 0.35)

    if (confetti) {
      confetti.parts.forEach((c, i) => {
        if (motion) {
          c.pos.y -= c.speed * dt
          c.angle += dt * 4
          if (c.pos.y < -3) c.pos.y = 3.2
        }
        const x = c.pos.x + Math.sin(t * 1.5 + c.sway) * 0.15
        tmpQ.setFromAxisAngle(c.spin, c.angle)
        tmpM.compose(tmpV.set(x, c.pos.y, c.pos.z), tmpQ, one)
        confetti.mesh.setMatrixAt(i, tmpM)
      })
      confetti.mesh.instanceMatrix.needsUpdate = true
    }

    renderer.render(scene, camera)
  }

  const resume = () => {
    if (!frame && !paused && !document.hidden) {
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }
  const stop = () => {
    cancelAnimationFrame(frame)
    frame = 0
  }
  const onVisibility = () => (document.hidden ? stop() : resume())
  document.addEventListener('visibilitychange', onVisibility)
  resume()

  return {
    backend: 'isWebGPUBackend' in renderer.backend && renderer.backend.isWebGPUBackend ? 'webgpu' : 'webgl',
    setPointer(x, y) {
      pointer.x = MathUtils.clamp(x, -1, 1)
      pointer.y = MathUtils.clamp(y, -1, 1)
    },
    setScroll(p) {
      scroll = MathUtils.clamp(p, 0, 1)
    },
    setPaused(p) {
      paused = p
      if (p) stop()
      else resume()
    },
    dispose() {
      stop()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      scene.traverse((o) => {
        const m = o as Mesh
        m.geometry?.dispose()
        const material = m.material
        if (Array.isArray(material)) material.forEach((x) => x.dispose())
        else material?.dispose()
      })
      renderer.dispose()
    },
  }
}
