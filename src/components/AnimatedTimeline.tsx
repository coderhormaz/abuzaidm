import React, { useEffect, useRef, useState } from 'react';
import './AnimatedTimeline.css';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon?: string;
  side: 'left' | 'right';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'Started Journey',
    description: 'Began my journey in the world of programming and web development from the inter college hackathon.',
    side: 'left',
  },
  {
    id: 2,
    year: '2024',
    title: 'First Client ',
    description: 'Worked with my first client to design and develop a professional static website, turning their vision into a fully functional digital presence.',
    side: 'right',
  },
  {
    id: 3,
    year: '2024',
    title: 'Smart India Hackathon',
    description: 'I was a finalist in the Smart India Hackathon 2024, where I collaborated with my team to develop an innovative solution.',
    side: 'left',
  },
  {
    id: 4,
    year: '2024',
    title: 'Industry Hackathon',
    description: 'Gained hands-on industrial experience by collaborating on real-world projects, enhancing my skills in development, teamwork, and meeting professional standards.',
    side: 'right',
  },
  {
    id: 5,
    year: '2025',
    title: 'Internship',
    description: 'Currently pursuing a 3-month internship at Cloud Counselage, gaining practical experience in cloud technologies, project development, and industry workflows.',
    side: 'left',
  },
  {
    id: 6,
    year: '2025',
    title: 'Project',
    description: 'Developed over 10 diverse projects ranging from web applications to interactive tools, demonstrating strong problem-solving skills and adaptability across various technologies.',
    side: 'right',
  },
];

const AnimatedTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const centerLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start']
  });

  // Animate height from 0% to 100% as timeline scrolls into view
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // Animate box-shadow (glow) from none to strong as timeline scrolls into view
  const lineGlow = useTransform(scrollYProgress, [0, 0.2, 1], [
    '0 0 0 rgba(0,255,255,0)',
    '0 0 15px rgba(0,255,255,0.5)',
    '0 0 25px rgba(0,255,255,0.8)'
  ]);
  // Animate color as before
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
            
            // Update center line color based on the active item
            if (centerLineRef.current) {
              const progress = index / (timelineData.length - 1);
              const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
              const colorIndex = Math.floor(progress * (colors.length - 1));
              const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
              const colorProgress = (progress * (colors.length - 1)) - colorIndex;
              
              // Interpolate between colors
              const startColor = hexToRgb(colors[colorIndex]);
              const endColor = hexToRgb(colors[nextColorIndex]);
              if (startColor && endColor) {
                const r = Math.floor(startColor.r + (endColor.r - startColor.r) * colorProgress);
                const g = Math.floor(startColor.g + (endColor.g - startColor.g) * colorProgress);
                const b = Math.floor(startColor.b + (endColor.b - startColor.b) * colorProgress);
                centerLineRef.current.style.background = `linear-gradient(to bottom, #00ffff, rgb(${r}, ${g}, ${b}))`;
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Helper function to convert hex to rgb
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  return (
    <div className="timeline-container" ref={timelineRef}>
      <h2 className="timeline-title" id='experience'>My Journey</h2>
      
      <div className="timeline">
        <motion.div 
          className="center-line" 
          ref={centerLineRef}
          style={{ 
            background: lineColor,
            height: lineHeight,
            boxShadow: lineGlow
          }}
        >
          <div className="center-line-dot top"></div>
          <div className="center-line-dot bottom"></div>
        </motion.div>
        
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-item ${item.side} ${activeIndex === index ? 'active' : ''}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            data-index={index}
            initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0]
              } 
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="timeline-content">
              <motion.div 
                className="timeline-year"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 + index * 0.1 } 
                }}
                viewport={{ once: false }}
              >
                {item.year}
              </motion.div>
              <motion.div 
                className="timeline-card"
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { 
                    duration: 0.7, 
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut" 
                  } 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 30px rgba(0, 255, 255, 0.2)",
                  transition: { duration: 0.3 } 
                }}
                viewport={{ once: false }}
              >
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
              <div className="timeline-dot"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;