import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Circle, RotateCcw } from 'lucide-react'
import { findCourse } from '../data/courses'
import { getCourseQuiz } from '../data/courseQuizzes'
import CodePlayground from '../components/CodePlayground'
import { trackEvent } from '../utils/analytics'
import './CourseQuizPage.css'

export default function CourseQuizPage() {
  const { courseSlug, track } = useParams()
  const course = findCourse(courseSlug)
  const quiz = getCourseQuiz(courseSlug, track)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  React.useEffect(() => {
    if (quiz) {
      trackEvent('quiz_opened', { course_slug: courseSlug, track: track, quiz_title: quiz.title })
    }
  }, [quiz, courseSlug, track])

  const evaluateQuestion = (question, answer) => {
    if (answer === undefined || answer === null || answer === '') return false

    if (question.type === 'mcq') {
      return answer === question.answerIndex
    }
    
    if (question.type === 'fill-blank') {
      const normalizedAns = String(answer).trim().toLowerCase()
      return question.correctAnswers.map(a => a.toLowerCase()).includes(normalizedAns)
    }
    
    if (question.type === 'code') {
      const codeStr = String(answer).toLowerCase().replace(/[;,()]/g, ' ')
      const words = codeStr.split(/\s+/)
      return question.expectedKeywords.every(kw => words.includes(kw.toLowerCase()))
    }
    
    return false
  }

  const score = useMemo(() => {
    if (!quiz) return { correct: 0, total: 0 }
    const correct = quiz.questions.reduce((count, question) => {
      return count + (evaluateQuestion(question, answers[question.id]) ? 1 : 0)
    }, 0)
    return { correct, total: quiz.questions.length }
  }, [answers, quiz])

  if (!course || !quiz) {
    return (
      <div className="container page-container text-center">
        <h2>Quiz not found</h2>
        <Link to="/quizzes" className="btn btn-secondary mt-4">Back to Quizzes</Link>
      </div>
    )
  }

  const handleSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    trackEvent('quiz_completed', {
      course_slug: courseSlug,
      track: track,
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
    <div className="container page-container quiz-page">
      <Link to="/quizzes" className="back-link">
        <ArrowLeft size={16} /> Back to Quizzes
      </Link>
      
      <header className="quiz-header">
        <div className="quiz-header-info">
          <p className="quiz-kicker">{course.title} - {track}</p>
          <h1 className="h2">{quiz.title}</h1>
          <p className="body-md">{quiz.intro}</p>
        </div>
        {submitted && (
          <div className="quiz-final-score">
            <div className="score-circle">
              <span>{Math.round((score.correct / score.total) * 100)}%</span>
            </div>
            <p>{score.correct} out of {score.total} correct</p>
          </div>
        )}
      </header>

      <div className="quiz-content">
        {quiz.questions.map((question, index) => {
          if (!submitted && index !== currentIndex) return null

          const answer = answers[question.id]
          const isCorrect = evaluateQuestion(question, answer)
          const isAnswered = answer !== undefined && answer !== ''

          return (
            <article key={question.id} className={`quiz-card ${submitted ? 'is-checked' : ''}`}>
              <div className="quiz-card-head">
                <span className="quiz-q-num">{index + 1} / {quiz.questions.length}</span>
                <h3 className="quiz-q-prompt">{question.prompt}</h3>
              </div>

              <div className="quiz-input-area">
                {question.type === 'mcq' && (
                  <div className="quiz-options">
                    {question.options.map((option, optionIndex) => {
                      const checked = answer === optionIndex
                      let optionState = ''
                      if (submitted) {
                        if (optionIndex === question.answerIndex) optionState = 'is-correct'
                        else if (checked) optionState = 'is-wrong'
                      } else if (checked) {
                        optionState = 'is-selected'
                      }

                      return (
                        <label key={option} className={`quiz-option ${optionState}`}>
                          <input
                            type="radio"
                            name={question.id}
                            checked={checked}
                            onChange={() => handleSelect(question.id, optionIndex)}
                            disabled={submitted}
                          />
                          <span className="quiz-radio">
                            {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                          </span>
                          <span className="quiz-option-text">{option}</span>
                        </label>
                      )
                    })}
                  </div>
                )}

                {question.type === 'fill-blank' && (
                  <div className="quiz-fill-blank">
                    <input
                      type="text"
                      className={`form-input ${submitted ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}
                      placeholder="Type your answer here..."
                      value={answer || ''}
                      onChange={e => handleSelect(question.id, e.target.value)}
                      disabled={submitted}
                    />
                  </div>
                )}

                {question.type === 'code' && (
                  <div className="quiz-code-area">
                    <p className="body-sm mb-2 text-muted">Test your query in the playground below:</p>
                    <CodePlayground language="sql" dataset={question.dataset} />
                    <div className="mt-4">
                      <p className="body-sm mb-2 text-muted"><strong>Final Answer:</strong> Paste your final working query here:</p>
                      <textarea
                        className={`form-input code-input ${submitted ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}
                        rows={4}
                        placeholder="SELECT * FROM..."
                        value={answer || ''}
                        onChange={e => handleSelect(question.id, e.target.value)}
                        disabled={submitted}
                        spellCheck="false"
                      />
                    </div>
                  </div>
                )}
              </div>

              {submitted && isAnswered && (
                <div className={`quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                  <strong>{isCorrect ? 'Correct!' : 'Not quite.'}</strong>
                  <p>{question.explanation}</p>
                </div>
              )}
            </article>
          )
        })}
      </div>

      <div className="quiz-actions">
        {submitted ? (
          <button className="btn btn-primary btn-lg" onClick={handleReset}>
            <RotateCcw size={16} /> Try Again
          </button>
        ) : (
          <div className="quiz-nav-btns">
            {currentIndex > 0 && (
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => setCurrentIndex(c => c - 1)}
              >
                Previous
              </button>
            )}
            
            {currentIndex < quiz.questions.length - 1 ? (
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => setCurrentIndex(c => c + 1)}
                disabled={answers[quiz.questions[currentIndex].id] === undefined || answers[quiz.questions[currentIndex].id] === ''}
              >
                Next Question
              </button>
            ) : (
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < quiz.questions.length}
              >
                Submit Assessment
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
