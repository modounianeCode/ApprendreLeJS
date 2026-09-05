import { Link } from 'react-router-dom'
import { modules, totalLessons } from '../data/lessons'
import { useProgress } from '../context/ProgressContext'

export default function Home() {
  const { isLessonComplete, completedCount, quizCount } = useProgress()
  const percent = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <header className="relative mb-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />

        <div className="relative">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-300 shadow-sm shadow-emerald-500/10">
            🎓 {modules.length} modules · interactif et progressif
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Apprenez{' '}
            <span className="text-gradient-amber">JavaScript</span>
            <br className="hidden sm:block" /> en pratiquant
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Un parcours structuré construit selon les normes pédagogiques : leçons courtes, exemples exécutables, exercices corrigés et quiz. Votre progression est enregistrée automatiquement.
          </p>

          {completedCount > 0 && (
            <div className="card-glow mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>
                  Vous avez terminé{' '}
                  <strong className="text-white">{completedCount}</strong> leçons
                  et <strong className="text-white">{quizCount}</strong> quiz.
                </span>
                <span className="text-lg font-black text-emerald-300">
                  {percent}%
                </span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800 ring-1 ring-inset ring-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-400 shadow-[0_0_14px_rgba(52,211,153,0.5)] transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-xl font-bold text-white">Les modules</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
        <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">
          {totalLessons} leçons
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {modules.map((mod, i) => {
          const done = mod.lessons.every((l) => isLessonComplete(l.id))
          const firstLesson = mod.lessons[0]
          const doneCount = mod.lessons.filter((l) => isLessonComplete(l.id)).length
          return (
            <Link
              key={mod.id}
              to={`/module/${mod.id}/${firstLesson.id}`}
              className={`group card-glow relative overflow-hidden rounded-2xl border p-5 transition-all duration-200 ${
                done
                  ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-emerald-900/5 hover:border-emerald-400/50 hover:shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-900/70 hover:border-primary-500/50 hover:bg-slate-900 hover:shadow-primary-500/10'
              } hover:-translate-y-0.5 hover:shadow-2xl`}
            >
              <div className="absolute -right-6 -top-6 text-7xl opacity-[0.07] transition group-hover:scale-110 group-hover:opacity-[0.12]">
                {mod.emoji}
              </div>
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-2xl ring-1 ring-white/5 transition group-hover:scale-105">
                    {mod.emoji}
                  </span>
                  {done ? (
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                      ✓ Terminé
                    </span>
                  ) : doneCount > 0 ? (
                    <span className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-semibold text-primary-300 ring-1 ring-primary-500/20">
                      {doneCount}/{mod.lessons.length} leçons
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-700">
                      {mod.lessons.length} leçon{mod.lessons.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-primary-400/80">
                  Module {i + 1}
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-white">{mod.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {mod.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-300 transition group-hover:gap-3">
                  <span className="inline-block rounded-lg bg-primary-500/10 px-3 py-1.5 transition group-hover:bg-primary-500/20">
                    {done ? 'Revoir →' : 'Commencer →'}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}