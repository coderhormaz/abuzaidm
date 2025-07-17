import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    { icon: 'devicon-html5-plain colored', name: 'HTML5' },
    { icon: 'devicon-css3-plain colored', name: 'CSS3' },
    { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { icon: 'devicon-react-original colored', name: 'React' },
    { icon: 'devicon-nextjs-plain nextjs-icon', name: 'Next.js' },
    { icon: 'devicon-github-original github-icon', name: 'GitHub' },
    { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    { icon: 'devicon-python-plain colored', name: 'Python' },
    { icon: 'devicon-tailwindcss-plain colored', name: 'Tailwind' },
    { icon: 'devicon-vscode-plain colored', name: 'VS Code' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            <span className="title-highlight">About Me</span>
          </h2>
          
          <div className="about-card">
            <p className="about-text">
              I'm a developer skilled in multiple programming languages. I was a finalist in the Smart India Hackathon 2024 
              with my team Code Snipers, and I also have real-world experience — I collaborated with my team to build a 
              static website for a client.
            </p>
          </div>
        </div>
        
        <div className="skills-marquee-container">
          <div className="skills-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;