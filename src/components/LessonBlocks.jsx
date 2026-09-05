import RichText from './RichText'

const calloutStyles = {
  info: {
    border: 'border-sky-400/25',
    bg: 'bg-sky-400/[0.07]',
    icon: '💡',
    title: 'À savoir',
    text: 'text-sky-100',
    label: 'text-sky-300/80',
  },
  warning: {
    border: 'border-amber-400/25',
    bg: 'bg-amber-400/[0.07]',
    icon: '⚠️',
    title: 'Attention',
    text: 'text-amber-50',
    label: 'text-amber-300/80',
  },
  success: {
    border: 'border-emerald-400/25',
    bg: 'bg-emerald-400/[0.07]',
    icon: '✅',
    title: 'Parfait',
    text: 'text-emerald-50',
    label: 'text-emerald-300/80',
  },
  tip: {
    border: 'border-violet-400/25',
    bg: 'bg-violet-400/[0.07]',
    icon: '💎',
    title: 'Conseil',
    text: 'text-violet-50',
    label: 'text-violet-300/80',
  },
}

export default function LessonBlocks({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'text':
            return (
              <p
                key={i}
                className="leading-relaxed text-slate-300 [&>span]:text-slate-300"
              >
                <RichText text={block.text} />
              </p>
            )
          case 'list':
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                {block.title && (
                  <h4 className="mb-3 font-bold text-slate-100">
                    <RichText text={block.title} />
                  </h4>
                )}
                <ul className="space-y-2.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                      <span className="leading-relaxed">
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'callout': {
            const style = calloutStyles[block.variant] || calloutStyles.info
            return (
              <div
                key={i}
                className={`rounded-2xl border ${style.border} ${style.bg} p-5`}
              >
                <p className={`mb-1.5 text-xs font-bold uppercase tracking-widest ${style.label}`}>
                  {style.icon} {style.title}
                </p>
                <p className={`text-sm leading-relaxed ${style.text}`}>
                  <RichText text={block.text} />
                </p>
              </div>
            )
          }
          case 'code':
            return (
              <div key={i} className="card-glow overflow-hidden rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
                  <span className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </span>
                  {block.title && (
                    <span className="truncate pl-2 font-mono text-xs text-slate-400">
                      {block.title}
                    </span>
                  )}
                </div>
                <pre className="overflow-x-auto bg-[#050b18] p-4 font-mono text-sm leading-relaxed text-emerald-100">
                  <code>{block.code}</code>
                </pre>
              </div>
            )
          case 'playground':
            return block.text ? (
              <p key={i} className="leading-relaxed text-slate-300">
                <RichText text={block.text} />
              </p>
            ) : null
          default:
            return null
        }
      })}
    </div>
  )
}