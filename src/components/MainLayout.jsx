import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Loader from './Loader'
import WhatsappButton from './WhatsappButton'

const MainLayout = () => {
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
        <div dir="rtl" className='w-full overflow-hidden'>
            {loading && <Loader onComplete={() => setLoading(false)} />}

            <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
                <NavBar />
                <WhatsappButton />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
