import React, { useMemo, useState, useEffect } from 'react'
import { CheckCircle2, Circle, RotateCcw } from 'lucide-react'
import { getModuleQuiz } from '../data/moduleQuizzes'
import { findCourse } from '../data/courses'
import { trackEvent } from '../utils/analytics'
import './ModuleQuiz.css'

export default function ModuleQuiz({ courseSlug, module }) {
  const quiz = getModuleQuiz(courseSlug, module?.id)
  const course = findCourse(courseSlug)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (quiz) {
      trackEvent('quiz_opened', { course_slug: courseSlug, module_id: module?.id, quiz_title: quiz.title })
    }
  }, [quiz, courseSlug, module])

  const score = useMemo(() => {
    if (!quiz) return { correct: 0, total: 0 }

    const correct = quiz.questions.reduce((count, question) => {
      return count + (answers[question.id] === question.answerIndex ? 1 : 0)
    }, 0)

    return { correct, total: quiz.questions.length }
  }, [answers, quiz])

  if (!quiz) return null

  const handleSelect = (questionId, optionIndex) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    trackEvent('quiz_completed', { 
      course_slug: courseSlug, 
      module_id: module?.id, 
      score_correct: score.correct, 
      score_total: score.total 
    })
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setCurrentIndex(0)
  }

  return (
    <section className="mp-quiz">
      <div className="mp-quiz-head">
        <div>
          <p className="mp-quiz-kicker">{course ? course.title : 'Practice'} - Quiz</p>
          <h2 className="h2">{quiz.title}</h2>
          <p className="body-md" style={{ marginTop: 8 }}>{quiz.intro}</p>
        </div>
        {submitted && (
          <div className="mp-quiz-score">
            <CheckCircle2 size={14} />
            <span>{score.correct} / {score.total} correct</span>
          </div>
        )}
      </div>

      <div className="mp-quiz-list">
        {quiz.questions.map((question, index) => {
          if (!submitted && index !== currentIndex) return null

          const selected = answers[question.id]
          const isCorrect = selected === question.answerIndex
          const isAnswered = selected !== undefined

          return (
            <article key={question.id} className={`mp-quiz-card ${submitted ? 'is-checked' : ''}`}>
              <div className="mp-quiz-q-head">
                <span className="mp-quiz-index">{index + 1} / {quiz.questions.length}</span>
                <h3>{question.prompt}</h3>
              </div>

              <div className="mp-quiz-options">
                {question.options.map((option, optionIndex) => {
                  const checked = selected === optionIndex
                  const optionState = submitted
                    ? optionIndex === question.answerIndex
                      ? 'is-correct'
                      : checked
                        ? 'is-wrong'
                        : ''
                    : checked
                      ? 'is-selected'
                      : ''

                  return (
                    <label key={option} className={`mp-quiz-option ${optionState}`}>
                      <input
                        type="radio"
                        name={question.id}
                        checked={checked}
                        onChange={() => handleSelect(question.id, optionIndex)}
                      />
                      <span className="mp-quiz-radio">
                        {checked ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                      </span>
                      <span className="mp-quiz-option-text">{option}</span>
                    </label>
                  )
                })}
              </div>

              {submitted && isAnswered && (
                <div className={`mp-quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                  <strong>{isCorrect ? 'Correct' : 'Not quite'}</strong>
                  <span>{question.explanation}</span>
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="mp-quiz-actions">
        {submitted ? (
          <button type="button" className="btn btn-secondary btn-md" onClick={handleReset}>
            <RotateCcw size={14} /> Try again
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '8px' }}>
            {currentIndex > 0 && (
              <button 
                type="button" 
                className="btn btn-secondary btn-md" 
                onClick={() => setCurrentIndex(c => c - 1)}
              >
                Previous
              </button>
            )}
            
            {currentIndex < quiz.questions.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary btn-md"
                onClick={() => setCurrentIndex(c => c + 1)}
                disabled={answers[quiz.questions[currentIndex].id] === undefined}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-md"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < quiz.questions.length}
              >
                Check answers
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
