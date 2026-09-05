import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/module/:moduleId" element={<Lesson />} />
            <Route path="/module/:moduleId/:lessonId" element={<Lesson />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}