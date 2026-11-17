import { useSyncExternalStore } from 'react'
import type { Lang } from '../types/content'

export type Theme = 'light' | 'dark'

export interface QuizResult {
  score: number
  total: number
}

export interface AppState {
  lang: Lang
  theme: Theme
  readMode: boolean
  /** Last opened lesson id. */
  current: string | null
  completed: string[]
  /** Checklist item state keyed by `${lessonId}:${index}`. */
  checks: Record<string, boolean>
  /** Best quiz result per module id. */
  quiz: Record<string, QuizResult>
  /** Student edits to prompt blocks keyed by prompt id. */
  prompts: Record<string, string>
}

const KEY = 'vibecoding:v1'

const defaults = (): AppState => ({
  lang: 'id',
  theme: typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  readMode: false,
  current: null,
  completed: [],
  checks: {},
  quiz: {},
  prompts: {},
})

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...defaults(), ...(JSON.parse(raw) as Partial<AppState>) }
  } catch {
    // Corrupt or unavailable storage: start fresh.
  }
  return defaults()
}

let state: AppState = load()
const listeners = new Set<() => void>()

function applyDocument(s: AppState) {
  const root = document.documentElement
  root.dataset.theme = s.theme
  root.lang = s.lang
  if (s.readMode) root.dataset.read = 'true'
  else delete root.dataset.read
}
applyDocument(state)

export function getState(): AppState {
  return state
}

export function setState(patch: Partial<AppState> | ((s: AppState) => Partial<AppState>)) {
  const next = typeof patch === 'function' ? patch(state) : patch
  state = { ...state, ...next }
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Storage full or blocked (private mode): keep in-memory state.
  }
  applyDocument(state)
  listeners.forEach((l) => l())
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

/** Subscribe to a slice. Selector must return a stable reference (a state field or primitive). */
export function useStore<T>(selector: (s: AppState) => T): T {
  return useSyncExternalStore(subscribe, () => selector(state))
}

export const actions = {
  setLang: (lang: Lang) => setState({ lang }),
  setTheme: (theme: Theme) => setState({ theme }),
  toggleRead: () => setState((s) => ({ readMode: !s.readMode })),
  visit: (id: string) => {
    if (state.current !== id) setState({ current: id })
  },
  toggleComplete: (id: string) =>
    setState((s) => ({
      completed: s.completed.includes(id) ? s.completed.filter((c) => c !== id) : [...s.completed, id],
    })),
  toggleCheck: (key: string) => setState((s) => ({ checks: { ...s.checks, [key]: !s.checks[key] } })),
  saveQuiz: (moduleId: string, result: QuizResult) =>
    setState((s) => {
      const prev = s.quiz[moduleId]
      return prev && prev.score >= result.score ? {} : { quiz: { ...s.quiz, [moduleId]: result } }
    }),
  savePrompt: (id: string, text: string | null) =>
    setState((s) => {
      const prompts = { ...s.prompts }
      if (text === null) delete prompts[id]
      else prompts[id] = text
      return { prompts }
    }),
  resetProgress: () =>
    setState({ current: null, completed: [], checks: {}, quiz: {}, prompts: {} }),
}
