"use client";
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
          About Me
        </h1>
      </div>
      <div className="about-content">
        <div className="about-left">
         
            I’m a developer skilled in multiple programming languages. I was a finalist in the Smart India Hackathon 2024 with my team Code Snipers, and I also have real-world experience — I collaborated with my team to build a static website for a client.
    
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
