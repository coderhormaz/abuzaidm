import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import AnimatedTimeline from './components/AnimatedTimeline'
import Footer from './components/footer';
import SplashCursor from './components/SplashCursor/SplashCursor';
import './App.css'
import DraggableCardDemo from './components/drag';
import AnimatedTestimonials from './components/review';
import AnimatedTabs from './components/mcertificate';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <SplashCursor />
      <Hero />
      <AboutMe />
      <AnimatedTimeline />
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
      <div className="about-header">
        <h2 className='headd'>“Let’s Build Something Great Together”</h2>
        <p>Ready to transform your vision into reality? Let’s collaborate and make it happen.</p>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
