import React, { useState, useEffect, useRef } from 'react'
import { Play, RotateCcw, CheckCircle2, AlertCircle, Loader2, Code2, Sparkles } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { getDataset } from '../data/datasets'
import { trackEvent } from '../utils/analytics'
import { analyzeCodeExecution } from '../services/aiService'
import './CodePlayground.css'

/* ──────────────────────────────────────────────────────────────
   CODE PLAYGROUND
   In-browser SQL execution via sql.js (WebAssembly).
   For Python and other languages, falls back to a "code preview"
   mode — full execution support comes in Phase 2.
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

export default function CodePlayground({ language = 'sql', starter = '', dataset = null }) {
  const [code, setCode] = useState(starter)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [running, setRunning] = useState(false)
  const [dbReady, setDbReady] = useState(false)
  const [aiFeedback, setAiFeedback] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const dbRef = useRef(null)
  const textareaRef = useRef(null)

  // Bootstrap the in-memory SQLite DB
  useEffect(() => {
    if (language !== 'sql' || !dataset) {
      setDbReady(true)
      return
    }
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
    if (language !== 'sql') {
      setError(`Live execution for ${language} is coming in Phase 2. For now, copy the code into a local ${language} environment.`)
      return
    }
    if (!dbRef.current) {
      setError('Database not ready yet — wait a moment and try again.')
      return
    }
    setRunning(true)
    
    let executionResultStr = ''
    let isError = false
    
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
