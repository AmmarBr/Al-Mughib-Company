import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'

// Lazy loaded components
const Home = lazy(() => import('./components/Home'));
const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));
const BurjDetails = lazy(() => import('./components/BurjDetails'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#1a1b20]" />}>
      <Routes>
        {/* Main Application Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/burj-al-mughib" element={<BurjDetails />} />
        </Route>

        {/* 404 Page (No Layout) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
