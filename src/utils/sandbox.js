let runCounter = 0

export function runJavaScript(code, { onConsole, onError, onDone } = {}) {
  const token = `jsbox-${Date.now()}-${++runCounter}`
  const iframe = document.createElement('iframe')
  iframe.setAttribute('sandbox', 'allow-scripts')
  iframe.style.cssText =
    'position:fixed;width:0;height:0;border:0;visibility:hidden'
  document.body.appendChild(iframe)

  const handler = (event) => {
    if (event.source !== iframe.contentWindow) return
    const data = event.data
    if (!data || data.token !== token) return
    if (data.type === 'console') {
      if (onConsole) onConsole(data.value)
    } else if (data.type === 'error') {
      if (onError) onError(data.message)
    } else if (data.type === 'done') {
      if (onDone) onDone()
    }
  }
  window.addEventListener('message', handler)

  const escaped = code.replace(/<\/script/gi, '<\\/script')

  const blob = new Blob(
    [
      '<!doctype html><html><body><script>',
      'var token=' + JSON.stringify(token) + ';',
      'function send(type, value) { try { parent.postMessage({ token: token, type: type, value: value }, "*"); } catch (_) {} }',
      'function fmt(v) {',
      '  if (typeof v === "string") return v;',
      '  if (v instanceof Error) return v.name + ": " + v.message;',
      '  if (v === undefined) return "undefined";',
      '  if (v === null) return "null";',
      '  if (typeof v === "object") { try { return JSON.stringify(v); } catch (_) { return String(v); } }',
      '  return String(v);',
      '}',
      'var _c = window.console;',
      '["log","info","warn","error","debug"].forEach(function (m) {',
      '  window.console[m] = function () {',
      '    var args = Array.prototype.slice.call(arguments).map(fmt);',
      '    send("console", { level: m === "log" ? "log" : m, args: args });',
      '  };',
      '});',
      'window.addEventListener("error", function (e) {',
      '  var msg = e.message || "Une erreur est survenue";',
      '  if (e.error && e.error.stack) {',
      '    var lines = String(e.error.stack).split("\\n").slice(0, 4);',
      '    msg = msg + "\\n" + lines.join("\\n");',
      '  }',
      '  send("error", msg);',
      '  send("done", true);',
      '});',
      'window.addEventListener("unhandledrejection", function (e) {',
      '  var why = e.reason && e.reason.message ? e.reason.message : String(e.reason);',
      '  send("error", "Promise rejetée : " + why);',
      '  send("done", true);',
      '});',
      'try {',
      escaped,
      '} catch (err) {',
      '  var mes = err && err.message ? err.name + ": " + err.message : String(err);',
      '  send("error", mes);',
      '}',
      'setTimeout(function () { send("done", true); }, 0);',
      '</script></body></html>',
    ],
    { type: 'text/html' },
  )

  const url = URL.createObjectURL(blob)
  iframe.src = url
  iframe.addEventListener('load', () => URL.revokeObjectURL(url))

  return () => {
    window.removeEventListener('message', handler)
    if (iframe.parentNode) iframe.parentNode.removeChild(iframe)
  }
}