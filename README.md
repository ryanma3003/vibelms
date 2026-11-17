# Vibecoding: From Zero to Own Your Application

Interactive, bilingual (Bahasa Indonesia / English) course that takes absolute beginners from an empty laptop to a deployed web application: AI-assisted building, Git & GitHub, and Vercel deployment.

## Run locally

```bash
bun install
bun run dev        # http://localhost:5173
bun run build      # type-check + production build into dist/
bun run preview    # serve the production build
```

## Deploy to Vercel

Import the repository in Vercel. `vercel.json` sets `bun install`, `bun run build`, output `dist`, and rewrites every non-asset path to `index.html` so deep links such as `/learn/m04-push` work. No environment variables, backend, or database are needed.

## Architecture

| Path | Purpose |
|---|---|
| `src/types/content.ts` | Content schema: modules → lessons → typed blocks (`p`, `list`, `code`, `prompt`, `os` tabs, `compare`, `table`, `flow`, `illustration`, …). Prose is `{ id, en }`; commands and URLs are single strings. |
| `src/content/modules/*.ts` | The seven course modules (all lesson text, prompts, troubleshooting, checklists, quizzes). |
| `src/content/course.ts` | Module order, flattened lesson index, lookup by id. |
| `src/i18n/` | UI dictionaries (`ui.ts`) and `useI18n()` (`t()` resolves bilingual content). |
| `src/lib/store.ts` | Single localStorage-backed store (`vibecoding:v1`): language, theme, read mode, current lesson, completed lessons, checklist ticks, best quiz scores, edited prompts. |
| `src/lib/router.ts` | History-API router (`/`, `/learn/:id`, `/graduation`). |
| `src/components/learning/` | Lesson building blocks: code block with copy, editable AI prompt block, troubleshooting accordion, checklist, quiz, OS tabs. |
| `src/components/illustrations/` | Themeable SVG diagrams used instead of screenshots. |
| `src/components/mascot/` | Procedural Three.js cat. `catScene.ts` is lazy-loaded; `WebGPURenderer` uses WebGPU and falls back to WebGL2 automatically; `CatSvg` is shown while loading and if no GPU rendering is available. Rendering pauses when off-screen or the tab is hidden and respects `prefers-reduced-motion`. |

## Editing content

Add or edit lessons in `src/content/modules/`. Lesson ids appear in URLs and progress storage — renaming one resets its saved progress. Prompt block ids key the student's saved edits and must be unique. `bun run build` type-checks content against the schema.
