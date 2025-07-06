import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import "./Footer.css";

const linkedin = import.meta.env.VITE_LINKEDIN_URL;
const instagram = import.meta.env.VITE_INSTAGRAM_URL;
const github = import.meta.env.VITE_GITHUB_URL;
const email = import.meta.env.VITE_EMAIL;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo">Abuzaid</span>
          <p className="footer-tagline">
            Creating exceptional digital experiences with<br />modern technology and innovative design.
          </p>
        </div>
        <div className="footer-links">
          <span className="footer-title">Quick Links</span>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <span className="footer-title">Connect</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="footer-icon" /> LinkedIn
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="footer-icon" /> Instagram
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="footer-icon" /> GitHub
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <Mail className="footer-icon" /> Email
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>
          © 2025 Abuzaid. 
        </span>
      </div>
    </footer>
  );
// ...existing code...
}