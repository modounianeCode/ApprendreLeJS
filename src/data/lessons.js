import { modules as part1 } from './modules/part1.js'
import { modules as part2 } from './modules/part2.js'
import { modules as part3 } from './modules/part3.js'

export const modules = [...part1, ...part2, ...part3]

export const getModule = (id) => modules.find((m) => m.id === id)

export const getLesson = (moduleId, lessonId) => {
  const m = getModule(moduleId)
  if (!m) return undefined
  return m.lessons.find((l) => l.id === lessonId)
}

export const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)

export const getLessonIndex = (moduleId, lessonId) => {
  const m = getModule(moduleId)
  const idx = m ? m.lessons.findIndex((l) => l.id === lessonId) : -1
  if (idx < 0) return null
  let position = 0
  for (const mod of modules) {
    if (mod.id === moduleId) {
      return position + idx
    }
    position += mod.lessons.length
  }
  return null
}

export const getLessonByGlobalIndex = (index) => {
  if (index < 0) return null
  let cursor = 0
  for (const mod of modules) {
    if (index < cursor + mod.lessons.length) {
      return {
        module: mod,
        lesson: mod.lessons[index - cursor],
        lessonIndex: index - cursor,
      }
    }
    cursor += mod.lessons.length
  }
  return null
}