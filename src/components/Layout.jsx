import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { modules, totalLessons } from '../data/lessons'
import { useProgress } from '../context/progress-context'

function SidebarContent({ onNavigate }) {
  const { isLessonComplete } = useProgress()
  const { pathname } = useLocation()

  const backToTopIfSameRoute = (to) => {
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="p-5">
        <NavLink
          to="/"
          onClick={onNavigate}
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 text-xl font-black text-slate-950 shadow-lg shadow-orange-500/20 ring-1 ring-white/10 transition group-hover:scale-105 group-hover:shadow-orange-500/40">
            JS
          </span>
          <div>
            <p className="text-sm font-bold leading-tight text-white">
              Apprendre JavaScript
            </p>
            <p className="text-xs text-slate-400">Cours interactif</p>
          </div>
        </NavLink>
      </div>

      <ProgressCard />

      <nav className="pb-6">
        {modules.map((mod) => {
          const modDone = mod.lessons.every((l) => isLessonComplete(l.id))
          return (
            <div key={mod.id} className="border-b border-slate-800/70">
              <Link
                to={`/module/${mod.id}/${mod.lessons[0].id}`}
                onClick={() => {
                  backToTopIfSameRoute(
                    `/module/${mod.id}/${mod.lessons[0].id}`,
                  )
                  onNavigate?.()
                }}
                className="group flex items-center gap-2.5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition hover:bg-slate-800/50 hover:text-slate-200"
              >
                <span className="text-sm">{mod.emoji}</span>
                <span className="flex-1">{mod.title}</span>
                {modDone ? (
                  <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    ✓
                  </span>
                ) : (
                  <span className="text-slate-600 transition group-hover:text-primary-400">
                    ›
                  </span>
                )}
              </Link>
              <ul>
                {mod.lessons.map((lesson, i) => {
                  const done = isLessonComplete(lesson.id)
                  return (
                    <li key={lesson.id}>
                      <NavLink
                        to={`/module/${mod.id}/${lesson.id}`}
                        onClick={() => {
                          backToTopIfSameRoute(
                            `/module/${mod.id}/${lesson.id}`,
                          )
                          onNavigate?.()
                        }}
                        className={({ isActive }) =>
                          `flex items-center gap-3 rounded-r-xl px-5 py-2 text-sm transition ${
                            isActive
                              ? 'border-l-[3px] border-amber-400 bg-amber-400/5 text-white shadow-[inset_4px_0_12px_-4px_rgba(251,191,36,0.15)]'
                              : 'border-l-[3px] border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/40 hover:text-slate-200'
                          }`
                        }
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition ${
                            done
                              ? 'bg-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/30'
                              : 'bg-slate-800 text-slate-500 ring-1 ring-slate-700'
                          }`}
                        >
                          {done ? '✓' : i + 1}
                        </span>
                        <span className="truncate">{lesson.title}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </nav>
    </>
  )
}

function ProgressCard() {
  const { completedCount, quizCount } = useProgress()
  const percent = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="card-glow mx-5 mb-2 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
      <div className="flex justify-between text-xs text-slate-400">
        <span className="font-medium">Progression</span>
        <span className="font-bold text-emerald-300">{percent}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800 ring-1 ring-inset ring-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {completedCount}/{totalLessons} leçons · {quizCount} quiz réussis
      </p>
    </div>
  )
}

export default function Layout() {
  const { completedCount } = useProgress()
  const percent = Math.round((completedCount / totalLessons) * 100)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="bg-mesh relative min-h-screen bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="flex flex-col lg:flex-row">
        <aside className="relative hidden border-b border-slate-800 bg-slate-900/70 backdrop-blur lg:sticky lg:top-0 lg:block lg:h-screen lg:w-80 lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <SidebarContent />
        </aside>

        <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur lg:hidden">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <NavLink to="/" className="flex flex-1 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 text-sm font-black text-slate-950 shadow-lg shadow-orange-500/20 ring-1 ring-white/10">
              JS
            </span>
            <span className="truncate text-sm font-bold text-white">
              Apprendre JavaScript
            </span>
          </NavLink>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-emerald-300">
            {percent}%
          </span>
        </header>

        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-slate-900 transition-transform duration-200 lg:hidden ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <SidebarContent onNavigate={() => setMenuOpen(false)} />
        </div>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}