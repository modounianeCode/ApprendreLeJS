import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/module/:moduleId" element={<Lesson />} />
            <Route path="/module/:moduleId/:lessonId" element={<Lesson />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}