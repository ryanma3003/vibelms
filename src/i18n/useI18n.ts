import { useStore } from '../lib/store'
import type { L } from '../types/content'
import { dictionaries } from './ui'

/** Current language, its UI dictionary, and a resolver for bilingual content. */
export function useI18n() {
  const lang = useStore((s) => s.lang)
  return {
    lang,
    ui: dictionaries[lang],
    t: (value: string | L) => (typeof value === 'string' ? value : value[lang]),
  }
}
