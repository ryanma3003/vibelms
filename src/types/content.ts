/**
 * Course content contract.
 *
 * All learner-facing prose is bilingual via `L`. Commands, URLs and code stay
 * single-language strings. Prose strings support a tiny inline syntax:
 *   `code`   **bold**   [link text](https://example.com)
 */
export type Lang = 'id' | 'en'

export interface L {
  id: string
  en: string
}

export type Os = 'windows' | 'macos' | 'linux'

/** Named built-in SVG illustrations (see src/components/illustrations). */
export type IllustrationName =
  | 'dev-workflow' //  idea → AI prompt → review → local (VS Code) → GitHub → Vercel
  | 'vscode-layout' // VS Code window: Explorer, Editor, Terminal, Extensions
  | 'git-areas' //     working folder → staging (git add) → commit → GitHub (push)
  | 'prompt-anatomy' // the 8 prompt parts: role, context, objective, design, requirements, constraints, technology, output
  | 'deploy-pipeline' // GitHub push → install → build → deploy → public URL

export type Block =
  | { type: 'p'; text: L }
  /** Ordered (default) or bulleted list. */
  | { type: 'list'; ordered?: boolean; items: L[] }
  | { type: 'callout'; tone: 'info' | 'tip' | 'warning' | 'danger'; title?: L; text: L }
  /**
   * `code` is copied verbatim. `output` is shown separately as terminal output
   * (never copied). lang drives highlighting + label.
   */
  | {
      type: 'code'
      lang: 'bash' | 'powershell' | 'cmd' | 'text' | 'gitignore' | 'json'
      code: string
      caption?: L
      output?: string
    }
  /**
   * AI prompt. `id` must be globally unique (edits are persisted by id).
   * Customizable parts are written as [PLACEHOLDER] in square brackets.
   * `prompt` may be one string (usually English) or bilingual.
   */
  | { type: 'prompt'; id: string; title: L; description: L; prompt: string | L; note?: L }
  /** "Vague vs specific" comparison. */
  | { type: 'compare'; bad: { label: L; text: string | L; why: L }; good: { label: L; text: string | L; why: L } }
  | { type: 'resources'; items: { name: string; url: string; description: L }[] }
  | { type: 'table'; head: (string | L)[]; rows: (string | L)[][] }
  /** Per-OS instructions rendered as tabs. */
  | { type: 'os'; tabs: { os: Os; blocks: Block[] }[] }
  /** Vertical/horizontal flow of short labels, e.g. CI/CD workflow. */
  | { type: 'flow'; steps: (string | L)[] }
  | { type: 'illustration'; name: IllustrationName; caption?: L }
  | { type: 'heading'; text: L }

export interface Trouble {
  problem: L
  /** Raw error text a student would see, optional. */
  error?: string
  solution: Block[]
}

export interface Lesson {
  /** Globally unique slug, used in URL: /learn/<id>. Prefix with module, e.g. "m02-install-git". */
  id: string
  title: L
  objective: L
  minutes: number
  /** Short mascot (cat) hint shown beside the lesson. */
  mascot: L
  /** Beginner-friendly explanation. */
  explanation: Block[]
  /** Step-by-step instructions. */
  instructions: Block[]
  /** Expected result once done. */
  result: L
  troubleshooting: Trouble[]
  /** Completion checklist items. */
  checklist: L[]
}

export interface QuizQuestion {
  question: L
  options: L[]
  /** Index into options. */
  answer: number
  explanation: L
}

export interface Module {
  /** e.g. "m01" */
  id: string
  /** e.g. "01" */
  number: string
  title: L
  objective: L
  lessons: Lesson[]
  /** Optional knowledge check, shown at the end of the module's last lesson. */
  quiz?: QuizQuestion[]
}
