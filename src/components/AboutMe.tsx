"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs, 
  FaBootstrap, 
  FaGitAlt,
  FaGithub as FaGithubIcon,
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss
} from 'react-icons/si';
import "./AboutMe.css";export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>
        <TextAnimate animation="slideUp" by="word" className="font-bold" style={{fontSize: '35px'}}>
          About Me
        </TextAnimate>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <TextAnimate
            variants={{
              hidden: { opacity: 0, y: 30, rotate: 45, scale: 0.5 },
              show: (i) => ({
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  delay: i * 0.25,
                  duration: 2,
                  y: { type: "spring", damping: 12, stiffness: 200, mass: 0.8 },
                  rotate: { type: "spring", damping: 8, stiffness: 150 },
                  scale: { type: "spring", damping: 10, stiffness: 300 }
                }
              }),
              exit: (i) => ({ opacity: 0, y: 30, rotate: 45, scale: 0.5, transition: { delay: i * 0.05, duration: 0.4 }})
            }}
            by="character"
            className="about-text wavy"
          >
            I’m a developer skilled in multiple programming languages. I was a finalist in the Smart India Hackathon 2024 with my team Code Snipers, and I also have real-world experience — I collaborated with my team to build a static website for a client.
          </TextAnimate>
        </div>
        <div className="about-right">
        <OrbitingCircles iconSize={60} className="orbit-large" path={true} speed={1.5} radius={200}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <SiNextdotjs />
          <FaPython />
        </OrbitingCircles>
        <OrbitingCircles iconSize={90} radius={120} reverse speed={2} className="orbit-small">
          <SiTailwindcss />
          <FaNodeJs />
          <FaBootstrap />
          <FaGitAlt />
          <FaGithubIcon />
          
        </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
