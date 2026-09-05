import { useRef, useState } from 'react'
import { runJavaScript } from '../utils/sandbox'
import CodeEditor from './CodeEditor'
import OutputPanel from './OutputPanel'
import RichText from './RichText'

export default function Exercise({
  title,
  instructions,
  starter,
  expected,
  solution,
  niveau,
}) {
  const [code, setCode] = useState(starter)
  const [status, setStatus] = useState(null)
  const [lines, setLines] = useState([])
  const [showSolution, setShowSolution] = useState(false)
  const [checking, setChecking] = useState(false)
  const cleanupRef = useRef(null)

  const handleCheck = () => {
    cleanupRef.current?.()
    setStatus(null)
    setLines([])
    setChecking(true)

    const actual = []
    const errors = []

    const cleanup = runJavaScript(code, {
      onConsole: (value) => {
        if (value.level === 'log') {
          const text = value.args.join(' ')
          actual.push(text)
          setLines((prev) => [...prev, { level: value.level, text }])
        }
      },
      onError: (message) => {
        errors.push(message)
        setLines((prev) => [...prev, { level: 'error', text: message }])
        setStatus({
          ok: false,
          message: 'Une erreur est survenue dans votre code.',
        })
      },
      onDone: () => {
        setChecking(false)
        if (errors.length > 0) return

        const cleanExpected = expected.map((e) => e.trim())
        const cleanActual = actual.map((a) => a.trim())

        const sameLength = cleanActual.length === cleanExpected.length
        const sameValues = cleanActual.every((v, i) => v === cleanExpected[i])

        if (sameLength && sameValues) {
          setStatus({ ok: true, message: 'Bravo ! Votre code est correct.' })
        } else {
          setStatus({
            ok: false,
            message:
              'Résultat incorrect. Comparez la sortie obtenue avec le résultat attendu.',
          })
        }
      },
    })
    cleanupRef.current = cleanup
  }

  const handleReset = () => {
    cleanupRef.current?.()
    setCode(starter)
    setStatus(null)
    setLines([])
    setShowSolution(false)
  }

  return (
    <section className="card-glow overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/5 via-slate-900/60 to-slate-950 p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10 text-sm ring-1 ring-emerald-400/20">
              ✏️
            </span>
            {title || 'Exercice'}
            {niveau && (
              <span
                className={`ml-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ring-1 ${
                  niveau === 'Avancé'
                    ? 'bg-rose-400/10 text-rose-300 ring-rose-400/30'
                    : niveau === 'Moyen'
                      ? 'bg-amber-400/10 text-amber-300 ring-amber-400/30'
                      : 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30'
                }`}
              >
                {niveau}
              </span>
            )}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
            <RichText text={instructions} />
          </p>
        </div>
        {showSolution && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300">
            💡 Solution affichée
          </span>
        )}
      </div>

      <div className="space-y-4">
        <CodeEditor value={code} onChange={setCode} height={160} />

        {expected.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
            <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Résultat attendu
            </div>
            <div className="space-y-0.5 px-4 py-3 font-mono text-sm">
              {expected.map((e, i) => (
                <div key={i} className="text-emerald-300">
                  <span className="mr-2 text-slate-600">›</span>
                  {e}
                </div>
              ))}
            </div>
          </div>
        )}

        {status && (
          <div
            className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
              status.ok
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                : 'border-rose-400/40 bg-rose-400/10 text-rose-200'
            }`}
          >
            <span>{status.ok ? '✅' : '❌'}</span>
            <span>{status.message}</span>
          </div>
        )}

        {showSolution && (
          <div className="card-glow overflow-hidden rounded-xl border border-violet-400/25">
            <div className="border-b border-violet-400/20 bg-violet-400/5 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-violet-300">
              Une solution possible
            </div>
            <pre className="overflow-x-auto bg-slate-950/80 p-4 font-mono text-sm leading-relaxed text-violet-200">
              <code>{solution}</code>
            </pre>
          </div>
        )}

        <OutputPanel lines={lines} />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCheck}
            disabled={checking}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40 hover:brightness-110 disabled:opacity-50"
          >
            {checking ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                Vérification…
              </span>
            ) : (
              '✓ Vérifier'
            )}
          </button>
          <button
            onClick={() => setShowSolution((s) => !s)}
            className="rounded-xl border border-violet-400/40 bg-violet-400/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:bg-violet-400/20"
          >
            {showSolution ? 'Masquer la solution' : 'Voir la solution'}
          </button>
          <button
            onClick={handleReset}
            className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-700"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </section>
  )
}