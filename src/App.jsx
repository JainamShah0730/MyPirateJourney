import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Ocean from './components/Ocean'
import Particles from './components/Particles'
import CursorTrail from './components/CursorTrail'
import QuoteBanner from './components/QuoteBanner'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div>
      <Ocean />
      <Particles />
      <CursorTrail />
      <Navbar />
      <Hero />
      <QuoteBanner
        quote="As long as I live, there are infinite chances."
        chapter="Captain's Creed · Vol. 01"
      />
      <About />
      <QuoteBanner
        quote="I know I'm not at my best right now, but my time will come."
        chapter="Captain's Creed · Vol. 02"
      />
      <Skills />
      <QuoteBanner
        quote="It's not about whether I can or not. I'm gonna do it because I want to."
        chapter="Captain's Creed · Vol. 03"
      />
      <Projects />
      <Contact />
    </div>
  )
}

export default App