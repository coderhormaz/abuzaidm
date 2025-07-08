import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    designation: "Lead Designer at CreativeStudio",
    quote: "The user experience is phenomenal. It's intuitive, powerful, and has streamlined our entire design process from concept to delivery.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Founder at StartupX",
    quote: "This solution has become indispensable to our operations. The performance improvements and feature set are simply outstanding.",
    image: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const AnimatedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const getImageClass = (index: number) => {
    if (index === currentIndex) return 'active';
    if (index === (currentIndex + 1) % testimonials.length) return 'next';
    if (index === (currentIndex + 2) % testimonials.length) return 'next-2';
    return 'hidden';
  };

  return (
    <div className="testimonials-container">
      <style>{`
        .testimonials-container {
          width: 100%;
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .testimonials-wrapper {
          display: flex;
          align-items: center;
          gap: 120px;
          max-width: 1400px;
          width: 100%;
        }

        .image-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-stack {
          position: relative;
          width: 450px;
          height: 550px;
        }

        .testimonial-image {
          position: absolute;
          width: 400px;
          height: 500px;
          border-radius: 32px;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .testimonial-image.active {
          transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          z-index: 3;
          opacity: 1;
        }

        .testimonial-image.next {
          transform: translateX(25px) translateY(-15px) rotate(2deg) scale(0.95);
          z-index: 2;
          opacity: 0.7;
        }

        .testimonial-image.next-2 {
          transform: translateX(35px) translateY(-25px) rotate(4deg) scale(0.9);
          z-index: 1;
          opacity: 0.4;
        }

        .testimonial-image.hidden {
          transform: translateX(50px) translateY(-35px) rotate(6deg) scale(0.85);
          z-index: 0;
          opacity: 0;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-section {
          flex: 1;
          max-width: 600px;
        }

        .testimonial-content {
          position: relative;
          opacity: 0;
          transform: none;
          transition: none;
        }

        .testimonial-content.active {
          opacity: 1;
          transform: none;
        }

        .author-info {
          margin-bottom: 40px;
        }

        .author-name {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .author-designation {
          font-size: 1.25rem;
          color: #6b7280;
          font-weight: 500;
          line-height: 1.4;
        }

        .quote {
          font-size: 1.625rem;
          line-height: 1.5;
          color: #e5e7eb;
          font-weight: 400;
          margin-bottom: 60px;
          letter-spacing: -0.01em;
        }

        .navigation {
          display: flex;
          gap: 16px;
        }

        .nav-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #1f2937;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .nav-button:hover {
          background: #374151;
          color: #ffffff;
          transform: scale(1.05);
        }

        .nav-button:active {
          transform: scale(0.95);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-button:disabled:hover {
          background: #1f2937;
          color: #9ca3af;
          transform: none;
        }

        .hidden-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
        }

        @media (max-width: 1200px) {
          .testimonials-wrapper {
            gap: 80px;
          }
          
          .image-stack {
            width: 350px;
            height: 450px;
          }
          
          .testimonial-image {
            width: 320px;
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-wrapper {
            flex-direction: column;
            gap: 60px;
          }

          .image-stack {
            width: 300px;
            height: 400px;
          }

          .testimonial-image {
            width: 280px;
            height: 350px;
          }

          .content-section {
            text-align: center;
            max-width: 100%;
          }

          .author-name {
            font-size: 2.5rem;
          }

          .quote {
            font-size: 1.375rem;
          }
        }

        @media (max-width: 480px) {
          .author-name {
            font-size: 2rem;
          }
          
          .quote {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className="testimonials-wrapper">
        <div className="image-section">
          <div className="image-stack">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-image ${getImageClass(index)}`}
              >
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-content ${index === currentIndex ? 'active' : 'hidden-content'}`}
            >
              <div className="author-info">
                <h3 className="author-name">{testimonial.name}</h3>
                <p className="author-designation">{testimonial.designation}</p>
              </div>
              <p className="quote">{testimonial.quote}</p>
              <div className="navigation">
                <button
                  className="nav-button"
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="nav-button"
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;