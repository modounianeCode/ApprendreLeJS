import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
  getLessonByGlobalIndex,
  getLessonIndex,
  getModule,
} from '../data/lessons'
import LessonView from '../components/LessonView'

export default function Lesson() {
  const { moduleId, lessonId } = useParams()
  const navigate = useNavigate()

  const moduleData = getModule(moduleId)

  if (!moduleData) {
    return <Navigate to="/" replace />
  }

  const lesson = moduleData.lessons.find((l) => l.id === lessonId)
  if (!lesson) {
    return (
      <Navigate
        to={`/module/${moduleData.id}/${moduleData.lessons[0].id}`}
        replace
      />
    )
  }

  const globalIndex = getLessonIndex(moduleId, lesson.id)
  const prev =
    globalIndex > 0 ? getLessonByGlobalIndex(globalIndex - 1) : null
  const next = getLessonByGlobalIndex(globalIndex + 1)

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
      <LessonView
        moduleData={moduleData}
        lesson={lesson}
        globalIndex={globalIndex}
      />

      <nav className="mt-12 grid gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-2">
        {prev ? (
          <button
            onClick={() =>
              navigate(`/module/${prev.module.id}/${prev.lesson.id}`)
            }
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/5"
          >
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition group-hover:text-primary-300">
              <span className="transition group-hover:-translate-x-0.5">←</span>
              Précédent
            </span>
            <span className="mt-1.5 block truncate text-sm font-semibold text-slate-200">
              {prev.lesson.title}
            </span>
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button
            onClick={() =>
              navigate(`/module/${next.module.id}/${next.lesson.id}`)
            }
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-right transition hover:-translate-y-0.5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/5"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs font-medium text-slate-500 transition group-hover:text-primary-300">
              Suivant
              <span className="transition group-hover:translate-x-0.5">→</span>
            </span>
            <span className="mt-1.5 block truncate text-sm font-semibold text-slate-200">
              {next.lesson.title}
            </span>
          </button>
        )}
      </nav>

      <footer className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2">
          <span className="text-base">💪</span>
          Continuez sur votre lancée, chaque leçon compte !
        </span>
      </footer>
    </div>
  )
}