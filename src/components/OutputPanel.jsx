const levelStyles = {
  log: 'text-slate-200',
  info: 'text-sky-300',
  warn: 'text-amber-300',
  debug: 'text-slate-400',
  error: 'text-rose-400',
}

const levelIcon = {
  log: '›',
  info: 'ℹ',
  warn: '⚠',
  debug: '·',
  error: '✖',
}

export default function OutputPanel({ lines, hint }) {
  return (
    <div className="overflow-hidden rounded-xl border border-emerald-700/30 bg-gradient-to-b from-[#060e1a] to-[#0a1320] font-mono text-sm">
      <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-900/80 px-4 py-2.5 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60 shadow-sm shadow-emerald-500/50" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Sortie
          </span>
        </div>
        {hint && (
          <span className="text-[11px] text-slate-500">{hint}</span>
        )}
      </div>
      <div className="min-h-[80px] max-h-48 space-y-1 overflow-y-auto px-4 py-3">
        {lines.length === 0 && (
          <p className="italic text-slate-600">
            Cliquez sur « Exécuter » pour voir le résultat.
          </p>
        )}
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex items-start gap-2 rounded-md px-2 py-0.5"
          >
            <span
              className={
                line.level === 'error'
                  ? 'mt-0.5 text-rose-400'
                  : 'mt-0.5 text-slate-600'
              }
            >
              {levelIcon[line.level] || '›'}
            </span>
            <span
              className={`whitespace-pre-wrap break-words leading-relaxed ${
                levelStyles[line.level] || levelStyles.log
              }`}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}