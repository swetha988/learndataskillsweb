import React, { useState, useEffect, useRef } from 'react'
import { Play, RotateCcw, CheckCircle2, AlertCircle, Loader2, Code2, Sparkles } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { getDataset } from '../data/datasets'
import { trackEvent } from '../utils/analytics'
import { analyzeCodeExecution } from '../services/aiService'
import './CodePlayground.css'

/* ──────────────────────────────────────────────────────────────
   CODE PLAYGROUND
   In-browser SQL execution via sql.js (WebAssembly) and in-browser
   Python execution via Pyodide (WebAssembly CPython). Both engines
   load lazily from a CDN, only when a playground of that language
   actually mounts, and are cached for the rest of the session.
   ────────────────────────────────────────────────────────────── */

let sqlPromise = null
const loadSqlJs = () => {
  if (sqlPromise) return sqlPromise
  sqlPromise = new Promise((resolve, reject) => {
    if (window.initSqlJs) {
      window.initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${f}` })
        .then(resolve).catch(reject)
      return
    }
    const s = document.createElement('script')
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js'
    s.onload = () => {
      window.initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${f}` })
        .then(resolve).catch(reject)
    }
    s.onerror = reject
    document.head.appendChild(s)
  })
  return sqlPromise
}

const PYODIDE_VERSION = '0.26.4'
let pyodidePromise = null
const loadPyodideEngine = () => {
  if (pyodidePromise) return pyodidePromise
  pyodidePromise = new Promise((resolve, reject) => {
    if (window.loadPyodide) {
      window.loadPyodide({ indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/` })
        .then(resolve).catch(reject)
      return
    }
    const s = document.createElement('script')
    s.src = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`
    s.onload = () => {
      window.loadPyodide({ indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/` })
        .then(resolve).catch(reject)
    }
    s.onerror = reject
    document.head.appendChild(s)
  })
  return pyodidePromise
}

/* Runs user code with stdout captured, so print() output shows up
   in the results panel instead of disappearing into the console. */
const runPythonCaptured = (pyodide, code) => {
  pyodide.globals.set('_user_code', code)
  pyodide.runPython(`
import sys, io
_stdout = sys.stdout
sys.stdout = io.StringIO()
_error = None
try:
    exec(_user_code, {})
except Exception as e:
    _error = f"{type(e).__name__}: {e}"
_output = sys.stdout.getvalue()
sys.stdout = _stdout
`)
  const output = pyodide.globals.get('_output')
  const error = pyodide.globals.get('_error')
  return { output, error }
}

export default function CodePlayground({ language = 'sql', starter = '', dataset = null }) {
  const [code, setCode] = useState(starter)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [running, setRunning] = useState(false)
  const [dbReady, setDbReady] = useState(false)
  const [aiFeedback, setAiFeedback] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const dbRef = useRef(null)
  const pyodideRef = useRef(null)
  const textareaRef = useRef(null)

  // Bootstrap the in-memory SQLite DB
  useEffect(() => {
    if (language === 'sql' && dataset) {
      let cancelled = false
      loadSqlJs()
        .then(SQL => {
          if (cancelled) return
          const db = new SQL.Database()
          const ds = getDataset(dataset)
          if (ds) {
            try { db.exec(ds.schema) } catch (e) { console.error('Schema error', e) }
          }
          dbRef.current = db
          setDbReady(true)
        })
        .catch(e => {
          console.error(e)
          setError('Failed to load the SQL engine. Check your internet connection.')
        })
      return () => { cancelled = true }
    }

    if (language === 'python') {
      let cancelled = false
      loadPyodideEngine()
        .then(pyodide => {
          if (cancelled) return
          pyodideRef.current = pyodide
          setDbReady(true)
        })
        .catch(e => {
          console.error(e)
          setError('Failed to load the Python engine. Check your internet connection.')
        })
      return () => { cancelled = true }
    }

    setDbReady(true)
  }, [language, dataset])

  const handleRun = () => {
    setError('')
    setResults(null)
    setAiFeedback('')
    
    trackEvent('quiz_attempted', {
      exercise_type: 'code_playground',
      language,
      dataset: dataset || null,
    })
    if (language !== 'sql' && language !== 'python') {
      setError(`Live execution for ${language} is coming soon. For now, copy the code into a local ${language} environment.`)
      return
    }
    if (language === 'sql' && !dbRef.current) {
      setError('Database not ready yet — wait a moment and try again.')
      return
    }
    if (language === 'python' && !pyodideRef.current) {
      setError('Python engine not ready yet — wait a moment and try again.')
      return
    }
    setRunning(true)

    let executionResultStr = ''
    let isError = false

    if (language === 'sql') {
      try {
        const rows = dbRef.current.exec(code)
        if (!rows || rows.length === 0) {
          setResults({ columns: [], values: [], message: 'Query ran successfully. No rows returned.' })
          executionResultStr = 'Query ran successfully. No rows returned.'
          trackEvent('quiz_completed', {
            exercise_type: 'code_playground',
            language,
            dataset: dataset || null,
            result: 'no_rows_returned',
          })
        } else {
          const first = rows[0]
          setResults({ columns: first.columns, values: first.values, message: `${first.values.length} row${first.values.length === 1 ? '' : 's'} returned.` })
          executionResultStr = `${first.values.length} row(s) returned. Columns: ${first.columns.join(', ')}. First row: ${JSON.stringify(first.values[0])}`
          trackEvent('quiz_completed', {
            exercise_type: 'code_playground',
            language,
            dataset: dataset || null,
            result: 'success',
            rows_returned: first.values.length,
          })
        }
      } catch (e) {
        isError = true
        executionResultStr = e.message || 'Query failed.'
        setError(executionResultStr)
      } finally {
        setRunning(false)
      }
    } else if (language === 'python') {
      try {
        const { output, error: pyError } = runPythonCaptured(pyodideRef.current, code)
        if (pyError) {
          isError = true
          executionResultStr = pyError
          setError(pyError)
        } else {
          setResults({ text: output, columns: [], values: [], message: output ? 'Ran successfully.' : 'Ran successfully. No output printed.' })
          executionResultStr = output ? `Output:\n${output}` : 'Ran successfully. No output printed (did you forget a print() statement?).'
          trackEvent('quiz_completed', {
            exercise_type: 'code_playground',
            language,
            dataset: dataset || null,
            result: 'success',
          })
        }
      } catch (e) {
        isError = true
        executionResultStr = e.message || 'Code failed to run.'
        setError(executionResultStr)
      } finally {
        setRunning(false)
      }
    }

    // Trigger AI analysis asynchronously
    setAiLoading(true)
    const schema = ds ? ds.schema : ''
    analyzeCodeExecution(language, code, schema, executionResultStr, isError)
      .then(feedback => setAiFeedback(feedback))
      .catch(e => setAiFeedback("Failed to generate AI feedback."))
      .finally(() => setAiLoading(false))
  }

  const handleReset = () => {
    setCode(starter)
    setResults(null)
    setError('')
    setAiFeedback('')
  }

  // Tab key inserts spaces instead of jumping focus
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const ta = textareaRef.current
      const start = ta.selectionStart
      const end = ta.selectionEnd
      const newCode = code.substring(0, start) + '  ' + code.substring(end)
      setCode(newCode)
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2
      })
    }
    // Ctrl/Cmd + Enter to run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRun()
    }
  }

  const ds = dataset ? getDataset(dataset) : null

  return (
    <div className="playground">
      <div className="pg-head">
        <div className="pg-head-left">
          <Code2 size={14} />
          <span className="pg-lang">{language.toUpperCase()}</span>
          {ds && <span className="pg-dataset">on {ds.label}</span>}
        </div>
        <div className="pg-actions">
          <button className="pg-btn pg-btn-ghost" onClick={handleReset} title="Reset">
            <RotateCcw size={13} /> Reset
          </button>
          <button className="pg-btn pg-btn-primary" onClick={handleRun} disabled={running || !dbReady}>
            {running ? <Loader2 size={13} className="spin" /> : <Play size={13} fill="currentColor" />}
            Run
            <kbd>Ctrl+↵</kbd>
          </button>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        className="pg-editor"
        value={code}
        onChange={e => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck="false"
        rows={Math.max(5, code.split('\n').length)}
      />

      {!dbReady && language === 'sql' && (
        <div className="pg-output pg-output-loading">
          <Loader2 size={14} className="spin" />
          <span>Loading SQL engine…</span>
        </div>
      )}

      {!dbReady && language === 'python' && (
        <div className="pg-output pg-output-loading">
          <Loader2 size={14} className="spin" />
          <span>Loading Python engine… (first run can take a few seconds, then it's instant)</span>
        </div>
      )}

      {error && (
        <div className="pg-output pg-output-error">
          <AlertCircle size={14} />
          <div>
            <strong>Error</strong>
            <code>{error}</code>
          </div>
        </div>
      )}

      {results && (
        <div className="pg-output pg-output-success">
          <div className="pg-output-head">
            <CheckCircle2 size={14} />
            <span>{results.message}</span>
          </div>
          {results.text !== undefined && (
            <pre className="pg-text-output">{results.text || '(no output — try adding a print() statement)'}</pre>
          )}
          {results.columns.length > 0 && (
            <div className="pg-table-wrap">
              <table className="pg-table">
                <thead>
                  <tr>
                    {results.columns.map(c => <th key={c}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {results.values.slice(0, 50).map((row, i) => (
                    <tr key={i}>
                      {row.map((v, j) => <td key={j}>{v === null ? <em className="pg-null">NULL</em> : String(v)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
              {results.values.length > 50 && (
                <div className="pg-table-foot">Showing first 50 of {results.values.length} rows</div>
              )}
            </div>
          )}
        </div>
      )}

      {(aiLoading || aiFeedback) && (
        <div className="pg-ai-panel">
          <div className="pg-ai-head">
            <Sparkles size={16} className="pg-ai-icon" />
            <span>AI Mentor Feedback</span>
          </div>
          <div className="pg-ai-body">
            {aiLoading ? (
              <div className="pg-ai-loading">
                <Loader2 size={16} className="spin" /> Analyzing your code...
              </div>
            ) : (
              <div className="pg-ai-content chatbot-message-bubble">
                <ReactMarkdown>{aiFeedback}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
