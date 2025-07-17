
import "./AboutMe.css";
import { useEffect, useRef } from "react";

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about-section visible" ref={sectionRef}>
      <div className="about-header">
        <h1 id="about" >About Me</h1>
      </div>
      <div className="about-center-content">
        <div className="about-paragraph">
        <p><span>  I’m a developer skilled in multiple programming languages. I was a finalist in the Smart India Hackathon 2024 with my team Code Snipers, and I also have real-world experience — I collaborated with my team to build a static website for a client.</span></p>
        </div>
       
      </div>
    </section>
  );
}
