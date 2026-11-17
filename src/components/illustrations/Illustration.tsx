import { useI18n } from '../../i18n/useI18n'
import type { IllustrationName, L, Lang } from '../../types/content'
import { Inline } from '../learning/Inline'

type Txt = (en: string, id: string) => string

/** Lightweight vector illustrations used instead of raster screenshots: crisp, themeable, bilingual. */
export function Illustration({ name, caption }: { name: IllustrationName; caption?: L }) {
  const { lang, t } = useI18n()
  const Art = ART[name]
  return (
    <figure className="illustration">
      <Art lang={lang} tx={(en, id) => (lang === 'id' ? id : en)} />
      {caption && (
        <figcaption>
          <Inline text={t(caption)} />
        </figcaption>
      )}
    </figure>
  )
}

interface ArtProps {
  lang: Lang
  tx: Txt
}

function Node({ x, y, w = 150, h = 64, title, sub, accent }: { x: number; y: number; w?: number; h?: number; title: string; sub?: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={14} className={accent ? 'ill-node ill-node--accent' : 'ill-node'} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 5)} textAnchor="middle" className="ill-title">
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 16} textAnchor="middle" className="ill-sub">
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) {
  return (
    <g>
      <path d={d} className="ill-arrow" markerEnd="url(#ill-head)" />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" className="ill-label">
          {label}
        </text>
      )}
    </g>
  )
}

const Defs = () => (
  <defs>
    <marker id="ill-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 10 5 0 10z" className="ill-head" />
    </marker>
  </defs>
)

function DevWorkflow({ tx }: ArtProps) {
  const top = [
    { title: tx('1 · Idea', '1 · Ide'), sub: tx('what to build', 'mau bikin apa') },
    { title: tx('2 · Prompt', '2 · Prompt'), sub: tx('talk to the AI', 'arahkan AI') },
    { title: tx('3 · Review', '3 · Review'), sub: tx('test & refine', 'uji & perbaiki') },
  ]
  const bottom = [
    { title: tx('6 · Vercel', '6 · Vercel'), sub: tx('live on the web', 'online di web'), accent: true },
    { title: tx('5 · GitHub', '5 · GitHub'), sub: tx('saved online', 'tersimpan online') },
    { title: tx('4 · VS Code', '4 · VS Code'), sub: tx('run locally', 'jalan di laptop') },
  ]
  return (
    <svg viewBox="0 0 600 250" role="img" aria-label={tx('Workflow: idea, prompt, review, run locally in VS Code, save to GitHub, deploy on Vercel', 'Alur kerja: ide, prompt, review, jalankan lokal di VS Code, simpan ke GitHub, deploy di Vercel')}>
      <Defs />
      {top.map((n, i) => (
        <Node key={i} x={20 + i * 205} y={20} {...n} />
      ))}
      {bottom.map((n, i) => (
        <Node key={i} x={20 + i * 205} y={166} {...n} />
      ))}
      <Arrow d="M172 52h40" />
      <Arrow d="M377 52h40" />
      <Arrow d="M505 86v76" label={tx('download', 'unduh')} lx={548} ly={128} />
      <Arrow d="M418 198h-40" label="push" lx={398} ly={188} />
      <Arrow d="M213 198h-40" label="deploy" lx={193} ly={188} />
      <path d="M95 162V128q0-14 14-14h184" className="ill-arrow ill-arrow--dash" markerEnd="url(#ill-head)" />
      <text x={200} y={132} textAnchor="middle" className="ill-label">
        {tx('iterate', 'ulangi & tingkatkan')}
      </text>
    </svg>
  )
}

function VscodeLayout({ tx }: ArtProps) {
  return (
    <svg viewBox="0 0 640 380" role="img" aria-label={tx('VS Code window with Activity Bar, Explorer, Editor, Terminal and Extensions', 'Jendela VS Code dengan Activity Bar, Explorer, Editor, Terminal, dan Extensions')}>
      <rect x="10" y="10" width="620" height="360" rx="14" className="ill-window" />
      <rect x="10" y="10" width="620" height="30" rx="14" className="ill-bar" />
      <circle cx="32" cy="25" r="5" className="ill-dot" />
      <circle cx="50" cy="25" r="5" className="ill-dot" />
      <circle cx="68" cy="25" r="5" className="ill-dot" />
      <text x="320" y="30" textAnchor="middle" className="ill-sub">my-first-project — Visual Studio Code</text>
      {/* Activity bar */}
      <rect x="10" y="40" width="44" height="330" className="ill-panel" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="22" y={56 + i * 40} width="20" height="20" rx="5" className={i === 3 ? 'ill-icon ill-icon--accent' : i === 0 ? 'ill-icon ill-icon--on' : 'ill-icon'} />
      ))}
      {/* Explorer */}
      <rect x="54" y="40" width="150" height="330" className="ill-panel ill-panel--soft" />
      <text x="66" y="62" className="ill-mini">EXPLORER</text>
      {['▾ src', '   App.tsx', '   main.tsx', '▸ public', '  index.html', '  package.json', '  README.md'].map((f, i) => (
        <text key={f} x="66" y={88 + i * 20} className="ill-mono" xmlSpace="preserve">
          {f}
        </text>
      ))}
      {/* Editor */}
      <rect x="204" y="40" width="426" height="26" className="ill-tab" />
      <text x="222" y="58" className="ill-mono">App.tsx</text>
      {[150, 260, 210, 300, 180, 240, 120].map((w, i) => (
        <rect key={i} x={226 + (i % 3 === 1 ? 20 : 0)} y={84 + i * 18} width={w} height="7" rx="3.5" className={i % 2 ? 'ill-line ill-line--alt' : 'ill-line'} />
      ))}
      {/* Terminal */}
      <rect x="204" y="236" width="426" height="134" className="ill-panel ill-panel--term" />
      <text x="220" y="258" className="ill-mini">TERMINAL</text>
      <text x="220" y="284" className="ill-mono ill-mono--term">$ npm run dev</text>
      <text x="220" y="304" className="ill-mono ill-mono--muted">  ➜  Local:   http://localhost:5173/</text>
      {/* Callouts */}
      {[
        { n: 1, x: 32, y: 66, label: 'Explorer', lx: 129, ly: 230 },
        { n: 2, x: 32, y: 186, label: 'Extensions', lx: 129, ly: 330 },
        { n: 3, x: 520, y: 120, label: 'Editor', lx: 520, ly: 120 },
        { n: 4, x: 520, y: 300, label: 'Terminal', lx: 520, ly: 300 },
      ].map((c) => (
        <g key={c.n}>
          <circle cx={c.n <= 2 ? c.lx : c.x} cy={c.n <= 2 ? c.ly : c.y} r="11" className="ill-badge" />
          <text x={c.n <= 2 ? c.lx : c.x} y={(c.n <= 2 ? c.ly : c.y) + 4} textAnchor="middle" className="ill-badge-text">
            {c.n}
          </text>
          <text x={(c.n <= 2 ? c.lx : c.x) + 16} y={(c.n <= 2 ? c.ly : c.y) + 4} className="ill-label ill-label--left">
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function GitAreas({ tx }: ArtProps) {
  const nodes = [
    { title: tx('Working folder', 'Folder kerja'), sub: tx('your files', 'file-filemu') },
    { title: 'Staging', sub: tx('ready to save', 'siap disimpan') },
    { title: tx('Local repo', 'Repo lokal'), sub: tx('commits (history)', 'commit (riwayat)') },
    { title: 'GitHub', sub: tx('online copy', 'salinan online'), accent: true },
  ]
  return (
    <svg viewBox="0 0 640 150" role="img" aria-label={tx('git add moves files to staging, git commit saves a checkpoint, git push uploads to GitHub', 'git add memindahkan file ke staging, git commit menyimpan checkpoint, git push mengunggah ke GitHub')}>
      <Defs />
      {nodes.map((n, i) => (
        <Node key={i} x={10 + i * 160} y={56} w={130} h={68} {...n} />
      ))}
      <Arrow d="M142 90h26" label="git add" lx={155} ly={40} />
      <Arrow d="M302 90h26" label="git commit" lx={315} ly={40} />
      <Arrow d="M462 90h26" label="git push" lx={475} ly={40} />
      <rect x="10" y="4" width="460" height="138" rx="18" className="ill-zone" />
      <text x="24" y="22" className="ill-mini">{tx('YOUR COMPUTER', 'KOMPUTERMU')}</text>
    </svg>
  )
}

function PromptAnatomy({ tx }: ArtProps) {
  const parts = [
    ['Role', tx('who the AI should act as', 'AI berperan sebagai siapa')],
    ['Context', tx('what you are building and why', 'apa yang dibangun dan kenapa')],
    ['Objective', tx('what the app must accomplish', 'apa yang harus dicapai aplikasi')],
    ['Design', tx('look, feel, colors, type', 'tampilan, nuansa, warna, font')],
    ['Requirements', tx('features that must exist', 'fitur yang wajib ada')],
    ['Constraints', tx('what to avoid or respect', 'yang harus dihindari/dipatuhi')],
    ['Technology', tx('stack and package manager', 'stack dan package manager')],
    ['Expected output', tx('what the AI should deliver', 'apa yang harus diserahkan AI')],
  ]
  return (
    <svg viewBox="0 0 600 330" role="img" aria-label={tx('The eight parts of a good prompt', 'Delapan bagian prompt yang baik')}>
      <rect x="10" y="10" width="580" height="310" rx="16" className="ill-window" />
      {parts.map(([k, v], i) => (
        <g key={k}>
          <rect x="30" y={28 + i * 36} width="8" height="26" rx="4" className={`ill-seg ill-seg--${i % 6}`} />
          <text x="52" y={46 + i * 36} className="ill-title ill-title--left">
            {i + 1}. {k}
          </text>
          <text x="230" y={46 + i * 36} className="ill-sub ill-sub--left">
            {v}
          </text>
        </g>
      ))}
    </svg>
  )
}

function DeployPipeline({ tx }: ArtProps) {
  const steps = [
    { title: 'git push', sub: 'GitHub' },
    { title: 'Install', sub: tx('dependencies', 'dependency') },
    { title: 'Build', sub: tx('production files', 'file produksi') },
    { title: 'Deploy', sub: tx('global network', 'jaringan global') },
  ]
  return (
    <svg viewBox="0 0 640 210" role="img" aria-label={tx('Vercel pipeline: push, install, build, deploy, public URL', 'Pipeline Vercel: push, install, build, deploy, URL publik')}>
      <Defs />
      {steps.map((s, i) => (
        <Node key={i} x={10 + i * 160} y={20} w={130} h={64} {...s} />
      ))}
      {[0, 1, 2].map((i) => (
        <Arrow key={i} d={`M${142 + i * 160} 52h26`} />
      ))}
      <Arrow d="M555 86v30q0 14-14 14H350" />
      <rect x="120" y="116" width="230" height="60" rx="30" className="ill-node ill-node--accent" />
      <text x="235" y="152" textAnchor="middle" className="ill-mono ill-mono--strong">
        https://your-app.vercel.app
      </text>
      <text x="235" y="200" textAnchor="middle" className="ill-sub">
        {tx('Your website is live 🎉', 'Website-mu sudah online 🎉')}
      </text>
    </svg>
  )
}

const ART: Record<IllustrationName, (p: ArtProps) => React.JSX.Element> = {
  'dev-workflow': DevWorkflow,
  'vscode-layout': VscodeLayout,
  'git-areas': GitAreas,
  'prompt-anatomy': PromptAnatomy,
  'deploy-pipeline': DeployPipeline,
}
