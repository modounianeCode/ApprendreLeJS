import { createContext, useContext } from 'react'

export const ProgressContext = createContext(null)

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) {
    throw new Error('useProgress doit être utilisé dans <ProgressProvider>')
  }
  return ctx
}