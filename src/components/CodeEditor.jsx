import Editor from '@monaco-editor/react'

export default function CodeEditor({ value, onChange, height = 160 }) {
  return (
    <div className="card-glow overflow-hidden rounded-xl border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            JavaScript
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-600">main.js</span>
      </div>
      <Editor
        height={height}
        language="javascript"
        theme="vs-dark"
        value={value}
        onChange={(next) => onChange?.(next || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          lineNumbersMinChars: 3,
          padding: { top: 8, bottom: 8 },
          cursorSmoothCaretAnimation: 'on',
        }}
      />
    </div>
  )
}