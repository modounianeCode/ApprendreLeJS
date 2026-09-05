import { useEffect, useState } from 'react'
import { useProgress } from '../context/progress-context'

const RING_RADIUS = 42
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

function ScoreRing({ correct, total }) {
  const pct = total ? (correct / total) * 100 : 0
  const greenArc = (pct / 100) * RING_CIRCUMFERENCE

  return (
    <div className="relative mx-auto h-44 w-44">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#f43f5e"
          strokeWidth="11"
        />
        <circle
          cx="50"
          cy="50"
          r={RING_RADIUS}
          fill="none"
          stroke="#10b981"
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={`${greenArc} ${RING_CIRCUMFERENCE - greenArc}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black text-white">{Math.round(pct)}%</span>
        <span className="mt-0.5 text-xs text-slate-400">de réussite</span>
      </div>
    </div>
  )
}

export default function Quiz({ questions, lessonId }) {
  const { getQuizScore, setQuizScore } = useProgress()
  const savedScore = getQuizScore(lessonId)

  const [answers, setAnswers] = useState(() =>
    Array(questions.length).fill(null),
  )
  const [validated, setValidated] = useState(savedScore !== undefined)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (!showResult) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setShowResult(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showResult])

  const allAnswered = answers.every((a) => a !== null)

  const correctCount = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0),
    0,
  )

  const handleValidate = () => {
    setValidated(true)
    setQuizScore(lessonId, correctCount)
    setShowResult(true)
  }

  const handleRetake = () => {
    setAnswers(Array(questions.length).fill(null))
    setValidated(false)
    setShowResult(false)
    setQuizScore(lessonId, 0)
  }

  const score = validated ? correctCount : null
  const perfect = validated && score === questions.length

  return (
    <section className="card-glow overflow-hidden rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/5 via-slate-900/60 to-slate-950 p-5 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-lg font-bold text-primary-200">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-500/10 text-sm ring-1 ring-primary-500/20">
            📝
          </span>
          Quiz
        </h3>
        {validated && (
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-bold ring-1 ${
                perfect
                  ? 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30'
                  : 'bg-primary-500/15 text-primary-200 ring-primary-500/30'
              }`}
            >
              Score : {score}/{questions.length}
            </span>
            <button
              onClick={handleRetake}
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-700"
            >
              Refaire le quiz
            </button>
          </div>
        )}
      </div>

      <div className="space-y-7">
        {questions.map((question, qi) => {
          const selected = answers[qi]

          return (
            <div key={qi} className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 sm:p-5">
              <p className="mb-3 font-semibold leading-relaxed text-slate-100">
                <span
                  className={`mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    validated
                      ? selected === question.answer
                        ? 'bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-400/30'
                        : 'bg-rose-400/20 text-rose-300 ring-1 ring-rose-400/30'
                      : 'bg-slate-800 text-slate-400 ring-1 ring-slate-700'
                  }`}
                >
                  {qi + 1}
                </span>
                {question.question}
              </p>
              <div className="grid gap-2">
                {question.options.map((option, oi) => {
                  const isThisCorrect = validated && oi === question.answer
                  const isThisSelected = selected === oi
                  const isWrongPick =
                    validated && isThisSelected && !isThisCorrect

                  let classes =
                    'border-slate-700/70 bg-slate-800/30 text-slate-300 hover:border-primary-400/50 hover:bg-slate-800/70'
                  if (validated) {
                    if (isThisCorrect) {
                      classes =
                        'border-emerald-400/60 bg-emerald-400/10 text-emerald-100'
                    } else if (isWrongPick) {
                      classes =
                        'border-rose-400/60 bg-rose-400/10 text-rose-100'
                    } else {
                      classes =
                        'border-slate-800 bg-slate-800/10 text-slate-500'
                    }
                  }
                  return (
                    <label
                      key={oi}
                      className={`group flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition ${classes} ${
                        validated ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${lessonId}-${qi}`}
                        checked={selected === oi}
                        disabled={validated}
                        onChange={() =>
                          setAnswers((prev) => {
                            const next = [...prev]
                            next[qi] = oi
                            return next
                          })
                        }
                        className="mt-0.5 h-4 w-4 accent-emerald-500"
                      />
                      <span
                        className={`flex-1 leading-relaxed ${
                          isThisCorrect ? 'font-medium text-emerald-100' : ''
                        }`}
                      >
                        {option}
                        {isThisCorrect && (
                          <span className="ml-2 text-emerald-300">✓</span>
                        )}
                        {isWrongPick && (
                          <span className="ml-2 text-rose-300">✗</span>
                        )}
                      </span>
                    </label>
                  )
                })}
              </div>
              {validated && (
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    selected === question.answer
                      ? 'text-emerald-300'
                      : 'text-slate-400'
                  }`}
                >
                  {selected === question.answer ? '✅' : '❌'}{' '}
                  {selected === question.answer
                    ? question.explanation || 'Bonne réponse !'
                    : `Bonne réponse : ${question.options[question.answer]}. ${
                        question.explanation || ''
                      }`}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {!validated && (
        <div className="mt-6">
          <button
            onClick={handleValidate}
            disabled={!allAnswered}
            className="rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition hover:shadow-primary-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Valider mes réponses
          </button>
          {!allAnswered && (
            <p className="mt-2 text-xs text-slate-500">
              Répondez à toutes les questions pour valider.
            </p>
          )}
        </div>
      )}
    {showResult && score !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Résultat du quiz"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setShowResult(false)}
        >
          <div
            className="card-glow w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-900 p-7 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className="text-lg font-bold text-white">Résultat du quiz</h4>
            <div className="mt-5">
              <ScoreRing correct={score} total={questions.length} />
            </div>
            <div className="mt-5 flex items-center justify-center gap-5 text-sm">
              <span className="flex items-center gap-2 text-emerald-300">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                {score} correcte{score > 1 && 's'}
              </span>
              <span className="flex items-center gap-2 text-rose-300">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                {questions.length - score} incorrecte
                {questions.length - score > 1 && 's'}
              </span>
            </div>
            <button
              onClick={() => setShowResult(false)}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition hover:shadow-primary-500/40 hover:brightness-110"
            >
              Continuer
            </button>
          </div>
        </div>
      )}
    </section>
  )
}