import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import OngoingProjects from './components/ProjectsInProgres'
import CustomerServices from './components/services'
import Testimonials from './components/Testimonials'
import WhatsappButton from './components/WhatsappButton'

export default function App() {
  return (
    <div className='w-full overflow-hidden'>
      <WhatsappButton/>
      <Header/>
      <About/>
      <Projects/>
      <OngoingProjects/>
      <CustomerServices/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}
