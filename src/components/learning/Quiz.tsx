import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { actions, useStore } from '../../lib/store'
import type { QuizQuestion } from '../../types/content'
import { Inline } from './Inline'

/**
 * Authored content tends to put the right answer in the same slot. Display options in a
 * deterministic per-question order (stable across renders, reloads and languages).
 */
function optionOrder(seedText: string, length: number): number[] {
  let seed = [...seedText].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619), 2166136261)
  const order = Array.from({ length }, (_, i) => i)
  for (let i = length - 1; i > 0; i--) {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822507) ^ i
    const j = (seed >>> 0) % (i + 1)
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}

export function Quiz({ moduleId, questions }: { moduleId: string; questions: QuizQuestion[] }) {
  const { ui, t } = useI18n()
  const best = useStore((s) => s.quiz[moduleId])
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [checked, setChecked] = useState(false)
  const [warn, setWarn] = useState(false)
  const score = answers.filter((a, i) => a === questions[i].answer).length

  const submit = () => {
    if (answers.some((a) => a === null)) return setWarn(true)
    setWarn(false)
    setChecked(true)
    actions.saveQuiz(moduleId, { score, total: questions.length })
  }
  const retry = () => {
    setAnswers(questions.map(() => null))
    setChecked(false)
  }

  return (
    <form className="quiz" onSubmit={(e) => (e.preventDefault(), submit())}>
      <p className="quiz__intro">
        {ui.quizIntro}
        {best && <span className="badge">{ui.best(best.score, best.total)}</span>}
      </p>
      {questions.map((q, qi) => {
        const chosen = answers[qi]
        const right = chosen === q.answer
        return (
          <fieldset key={qi} className="quiz__q" disabled={checked}>
            <legend>
              <span className="quiz__num">{qi + 1}</span>
              <Inline text={t(q.question)} />
            </legend>
            {optionOrder(`${moduleId}:${qi}`, q.options.length).map((oi) => {
              const opt = q.options[oi]
              const state = checked ? (oi === q.answer ? 'right' : oi === chosen ? 'wrong' : '') : ''
              return (
                <label key={oi} className={`quiz__opt ${state && `quiz__opt--${state}`}`}>
                  <input
                    type="radio"
                    name={`${moduleId}-q${qi}`}
                    checked={chosen === oi}
                    onChange={() => setAnswers(answers.map((a, i) => (i === qi ? oi : a)))}
                  />
                  <span>
                    <Inline text={t(opt)} />
                  </span>
                </label>
              )
            })}
            {checked && (
              <p className={right ? 'quiz__fb quiz__fb--right' : 'quiz__fb quiz__fb--wrong'}>
                <strong>{right ? ui.correct : ui.incorrect}.</strong> <Inline text={t(q.explanation)} />
              </p>
            )}
          </fieldset>
        )
      })}
      <div className="quiz__actions" aria-live="polite">
        {checked ? (
          <>
            <p className="quiz__score">{ui.score(score, questions.length)}</p>
            <button type="button" className="btn btn--ghost" onClick={retry}>
              {ui.retry}
            </button>
          </>
        ) : (
          <>
            <button type="submit" className="btn btn--primary">
              {ui.check}
            </button>
            {warn && <p className="quiz__warn">{ui.answerAll}</p>}
          </>
        )}
      </div>
    </form>
  )
}
