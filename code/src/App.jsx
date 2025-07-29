import './App.css'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './index.css'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='no-scrollbar '>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default App
