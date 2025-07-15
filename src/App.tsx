import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Footer from './components/footer';
import SplashCursor from './components/SplashCursor/SplashCursor';
import './App.css'
import DraggableCardDemo from './components/drag';
import AnimatedTestimonials from './components/review';
import AnimatedTabs from './components/mcertificate';
function App() {
  return (
    <>
      <SplashCursor />
      <Hero />
      <AboutMe />
      <div className="about-header">
        <h1>Project Showcase</h1>
      </div>
      <DraggableCardDemo />
      <div className="about-header">
        <h1>Certificate Showcase</h1>
      </div>
   
      <AnimatedTabs />
      <div className="about-header">
        <h1>Testimonials</h1>
      </div>
      <AnimatedTestimonials />
      <Footer />
    </>
  )
}

export default App
