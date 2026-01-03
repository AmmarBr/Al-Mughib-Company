import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import WhatsappButton from './components/WhatsappButton'
import Loader from './components/Loader'
import NavBar from './components/NavBar'

// Lazy loaded components
const Home = lazy(() => import('./components/Home'));
const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className='w-full overflow-hidden'>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <NavBar />
        <WhatsappButton />
        <Suspense fallback={<div className="h-screen bg-[#1a1b20]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
