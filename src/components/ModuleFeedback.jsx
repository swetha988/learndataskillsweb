import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown, Check } from 'lucide-react'
import './ModuleFeedback.css'

const KEY = 'lds_module_feedback_v1'

const saveFeedback = (entry) => {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '[]')
    all.push({ ...entry, at: new Date().toISOString() })
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch {}
}

export default function ModuleFeedback({ courseSlug, moduleId }) {
  const [rating, setRating] = useState(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleRate = (val) => {
    setRating(val)
  }

  const handleSubmit = () => {
    saveFeedback({ courseSlug, moduleId, rating, comment: comment.trim() })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mod-fb mod-fb-done">
        <Check size={14} />
        <span>Thanks — your feedback helps us improve this module.</span>
      </div>
    )
  }

  return (
    <div className="mod-fb">
      <div className="mod-fb-head">
        <span>Was this module clear?</span>
        <div className="mod-fb-btns">
          <button
            className={`mod-fb-btn ${rating === 'up' ? 'is-up' : ''}`}
            onClick={() => handleRate('up')}
            aria-label="Yes, clear"
          >
            <ThumbsUp size={15} /> Yes
          </button>
          <button
            className={`mod-fb-btn ${rating === 'down' ? 'is-down' : ''}`}
            onClick={() => handleRate('down')}
            aria-label="No, confusing"
          >
            <ThumbsDown size={15} /> Not really
          </button>
        </div>
      </div>

      {rating && (
        <div className="mod-fb-comment">
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder={rating === 'up'
              ? "What worked? (optional)"
              : "What was confusing? Be specific so we can fix it."
            }
            rows="2"
          />
          <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
            Send feedback
          </button>
        </div>
      )}
    </div>
  )
}
