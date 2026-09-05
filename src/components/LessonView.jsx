import { useProgress } from '../context/progress-context'
import LessonBlocks from './LessonBlocks'
import Playground from './Playground'
import Exercise from './Exercise'
import Quiz from './Quiz'
import RichText from './RichText'

function ObjectifsCard({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="rounded-2xl border border-primary-500/25 bg-primary-500/[0.06] p-5">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-primary-300/90">
        🎯 Objectifs de la leçon
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
            <span className="leading-relaxed">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PiegesCard({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.06] p-5">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-rose-300/90">
        ⚠️ Pièges à éviter
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-slate-300">
            <span className="mt-1 text-rose-400/80">✗</span>
            <span className="leading-relaxed">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RecapCard({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-5">
      <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-emerald-300/90">
        ✅ À retenir
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span className="leading-relaxed">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function LessonView({ moduleData, lesson, globalIndex }) {
  const { isLessonComplete, toggleLesson } = useProgress()
  const completed = isLessonComplete(lesson.id)

  return (
    <article>
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="relative">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-300 ring-1 ring-primary-500/20">
            {moduleData.emoji} {moduleData.title}
          </p>
          <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            {globalIndex + 1}. {lesson.title}
          </h1>
        </div>
      </header>

      <div className="space-y-10">
        <ObjectifsCard items={lesson.objectifs} />

        <LessonBlocks blocks={lesson.blocks} />

        <PiegesCard items={lesson.pieges} />

        {lesson.playground && (
          <Playground
            title={lesson.playground.title}
            initialCode={lesson.playground.code}
          />
        )}

        {(lesson.exercises || (lesson.exercise ? [lesson.exercise] : []))
          .filter((e) => e)
          .map((exercise, i) => (
            <Exercise
              key={i}
              title={exercise.title}
              instructions={exercise.instructions}
              starter={exercise.starter}
              expected={exercise.expected}
              solution={exercise.solution}
              niveau={exercise.niveau}
            />
          ))}

        <RecapCard items={lesson.recap} />

        {lesson.quiz && lesson.quiz.length > 0 && (
          <Quiz questions={lesson.quiz} lessonId={lesson.id} />
        )}

        <div className="card-glow overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              {completed ? (
                <span className="text-emerald-300">
                  ✅ Leçon terminée, bravo !
                </span>
              ) : (
                'Une fois la leçon comprise, marquez-la comme terminée.'
              )}
            </p>
            <button
              onClick={() => toggleLesson(lesson.id)}
              className={`relative overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                completed
                  ? 'border border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-700'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:brightness-110'
              }`}
            >
              {completed ? 'Marquer non terminée' : '✅ Terminé'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}