import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard/ProfileCard'
import './Hero.css'
import StarBorder from './StarBorder/StarBorder'
import { TextAnimate } from './magicui/text-animate'
export default function Hero() {
  return (
    <div className="hero-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-links">
          <motion.a 
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.9}
              duration={0.5}
            >
              HOME
            </TextAnimate>
          </motion.a>
          <motion.a 
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={1.2}
              duration={0.5}
            >
              ABOUT
            </TextAnimate>
          </motion.a>
          <motion.a 
            href="#experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={1.5}
              duration={0.5}
            >
              EXPERIENCE
            </TextAnimate>
          </motion.a>
          <motion.a 
            href="#project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={1.8}
              duration={0.5}
            >
              PROJECT
            </TextAnimate>
          </motion.a>
          <motion.a 
            href="#certificate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={2.1}
              duration={0.5}
            >
              CERTIFICATE
            </TextAnimate>
          </motion.a>
        </div>
        <motion.button 
          className="connect-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <TextAnimate
            animation="fadeIn"
            by="character"
            delay={2.4}
            duration={0.8}
          >
            LET'S CONNECT
          </TextAnimate>
        </motion.button>
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
  className="custom-class"
  color="cyan"
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
            <StarBorder as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button resume-btn"
                style={{ marginLeft: '1.5rem' }}
              >
                Explore my project!
              </motion.button>
            </StarBorder>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="scene-container" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ProfileCard 
              avatarUrl="/abuzaid.png" 
              name="Abuzaid Inamdar"
              title="Full Stack Developer"
              handle="abuzaid"
              status="Available"
              contactText="Contact"
              showUserInfo={true}
              innerGradient="linear-gradient(135deg, #1a253f, #3f4c77)"
            />
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
