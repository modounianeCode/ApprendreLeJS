import { useRef, useState } from 'react'
import { runJavaScript } from '../utils/sandbox'
import CodeEditor from './CodeEditor'
import OutputPanel from './OutputPanel'

export default function Playground({ title, initialCode }) {
  const [code, setCode] = useState(initialCode)
  const [lines, setLines] = useState([])
  const [running, setRunning] = useState(false)
  const cleanupRef = useRef(null)

  const handleRun = () => {
    cleanupRef.current?.()
    setLines([])
    setRunning(true)

    const cleanup = runJavaScript(code, {
      onConsole: (value) => {
        const text = value.args.join(' ')
        setLines((prev) => [...prev, { level: value.level, text }])
      },
      onError: (message) => {
        setLines((prev) => [...prev, { level: 'error', text: message }])
      },
      onDone: () => setRunning(false),
    })
    cleanupRef.current = cleanup
  }

  const handleReset = () => {
    cleanupRef.current?.()
    setCode(initialCode)
    setLines([])
    setRunning(false)
  }

  return (
    <section className="card-glow overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/5 via-slate-900/60 to-slate-950 p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-amber-200">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/10 text-sm ring-1 ring-amber-400/20">
              🧪
            </span>
            {title || 'Terrain de jeu'}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Modifiez le code puis exécutez-le pour voir le résultat.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-700"
          >
            Réinitialiser
          </button>
          <button
            onClick={handleRun}
            disabled={running}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/40 hover:brightness-110 disabled:opacity-50"
          >
            {running ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                Exécution…
              </span>
            ) : (
              '▶ Exécuter'
            )}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <CodeEditor value={code} onChange={setCode} height={220} />
        <OutputPanel lines={lines} />
      </div>
    </section>
  )
}