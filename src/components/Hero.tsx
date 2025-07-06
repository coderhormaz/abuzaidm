import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import './Hero.css'
import StarBorder from './StarBorder/StarBorder'
import { TextAnimate } from './magicui/text-animate'
export default function Hero() {
  return (
    <div className="hero-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#project">PROJECT</a>
          <a href="#certificate">CERTIFICATE</a>
        </div>
        <button className="connect-btn">LET'S CONNECT</button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
          
            <TextAnimate
              animation="blurInUp"
              by="character"
              delay={0.1}
              duration={1.5}
              className="typewriter hero-title"
            >
              Hi, I'm Abuzaid!
            </TextAnimate>
           
            <TextAnimate
              animation="blurInUp"
              by="character"
              delay={2.0}
              duration={1.5}
              className="typewriter hero-subtitle"
            >
              A Developer.
            </TextAnimate>
            
            <TextAnimate
              animation="typewriter"
              by="character"
              delay={3.2}
              duration={2}
              className="hero-description"
            >
              I build high-performance websites that leave an impact.
            </TextAnimate>
            
            <div className="button-group">
                <StarBorder as="button"
                  className="cta-button resume-btn"
                  color="cyan"
                  speed="0s"
                  style={{ border: '2px solid cyan' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-button resume-btn"
                    
                  >
                    Explore my projects!
                  </motion.button>
                </StarBorder>
              <StarBorder as="button"
  className="custom-class"
  color="magenta"
  speed="5s"
>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button resume-btn"
              >
                Download Resume
              </motion.button>
            </StarBorder>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          {/* Circle 2 - 3D Model */}
          <div className="circle-annotation circle-2">
            <div className="circle-outline"></div>
            <div className="scene-container">
              <Scene3D />
            </div>
          </div>
        </div>
      </div>

      {/* Lamp Effect */}
      <div className="lamp-container">
        <div className="lamp-beam"></div>
        <div className="lamp-glow"></div>
      </div>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="grid-overlay"></div>
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>
    </div>
  )
}
