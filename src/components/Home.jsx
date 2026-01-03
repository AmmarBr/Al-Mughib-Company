import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import OngoingProjects from './ProjectsInProgress'
import CustomerServices from './Services'
import Testimonials from './Testimonials'
import Header from './Header'
import Footer from './Footer'
const Home = () => {
    return (
        <div id="Home">
            <Header />
            <About />
            <Projects />
            <OngoingProjects />
            <CustomerServices />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
