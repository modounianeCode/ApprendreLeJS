import { useCallback, useEffect, useMemo, useState } from 'react'
import { ProgressContext } from './progress-context'

const STORAGE_KEY = 'apprendre-js-progress'

const defaultState = {
  completed: {},
  quizScores: {},
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw)
    return {
      completed: parsed.completed || {},
      quizScores: parsed.quizScores || {},
    }
  } catch {
    return defaultState
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // stockage indisponible : on ignore
    }
  }, [state])

  const isLessonComplete = useCallback(
    (lessonId) => Boolean(state.completed[lessonId]),
    [state.completed],
  )

  const toggleLesson = useCallback((lessonId) => {
    setState((prev) => {
      const completed = { ...prev.completed }
      if (completed[lessonId]) delete completed[lessonId]
      else completed[lessonId] = true
      return { ...prev, completed }
    })
  }, [])

  const getQuizScore = useCallback(
    (lessonId) => state.quizScores[lessonId],
    [state.quizScores],
  )

  const setQuizScore = useCallback((lessonId, score) => {
    setState((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [lessonId]: score },
    }))
  }, [])

  const value = useMemo(
    () => ({
      isLessonComplete,
      toggleLesson,
      getQuizScore,
      setQuizScore,
      completedCount: Object.keys(state.completed).length,
      quizCount: Object.keys(state.quizScores).length,
    }),
    [isLessonComplete, toggleLesson, getQuizScore, setQuizScore, state],
  )

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}