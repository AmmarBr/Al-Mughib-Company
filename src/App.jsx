import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import WhatsappButton from './components/WhatsappButton'
import Loader from './components/Loader'
import NavBar from './components/NavBar'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </div>
  )
}
