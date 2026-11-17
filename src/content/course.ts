import type { Lesson, Module } from '../types/content'
import m01 from './modules/m01-welcome'
import m02 from './modules/m02-setup'
import m03 from './modules/m03-first-project'
import m04 from './modules/m04-github'
import m05 from './modules/m05-vercel'
import m06 from './modules/m06-advanced-prompting'
import m07 from './modules/m07-graduation'

export const modules: Module[] = [m01, m02, m03, m04, m05, m06, m07]

export interface LessonEntry {
  lesson: Lesson
  module: Module
  /** Position in the whole course, 0-based. */
  index: number
  /** Position inside its module, 1-based. */
  number: number
  isLastInModule: boolean
}

export const lessons: LessonEntry[] = modules.flatMap((module) =>
  module.lessons.map((lesson, i) => ({
    lesson,
    module,
    index: 0,
    number: i + 1,
    isLastInModule: i === module.lessons.length - 1,
  })),
)
lessons.forEach((entry, i) => (entry.index = i))

export const lessonById = new Map(lessons.map((e) => [e.lesson.id, e]))

export const lessonPath = (id: string) => `/learn/${id}`
