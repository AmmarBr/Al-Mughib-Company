import React, { lazy, Suspense } from 'react'
import Header from './Header'

// Lazy loaded sections
const About = lazy(() => import('./About'));
const BurjAlMughib = lazy(() => import('./BurjAlMughib'));
const Projects = lazy(() => import('./Projects'));
const CustomerServices = lazy(() => import('./Services'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
    return (
        <div id="Home">
            <Header />
            <Suspense fallback={<div className="h-96 bg-[#1a1b20]" />}>
                <About />
                <BurjAlMughib />
                <Projects />
                <CustomerServices />
                <Contact />
            </Suspense>
        </div>
    )
}

export default Home
