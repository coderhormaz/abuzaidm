import React from 'react';


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
    name: "Arbaaz Khan",
    designation: "Founder Of Optiflow",
    quote: "The website design for Optiflow Engineering is commendable, showcasing a clean, professional look with user-friendly navigation. Abuzaid and his team have done an excellent job with detailed product pages and a clear layout, which significantly enhances user experience by making information easily accessible. ",
    image: "/arbaaz.jpg" // Use your local image in public folder
  }
];

const AnimatedTestimonials: React.FC = () => {
  // Only one testimonial, so no need for index or animation state



  // No animation or rotation needed for a single testimonial

  return (
    <div className="testimonials-container">
      <style>{`
        .testimonials-container {
          width: 100%;
          min-height: 100vh;
          
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
          <div className="testimonial-image active">
            <img src={testimonials[0].image} alt={testimonials[0].name} />
          </div>
        </div>
        </div>

        <div className="content-section">
          <div className="testimonial-content active">
            <div className="author-info">
              <h3 className="author-name">{testimonials[0].name}</h3>
              <p className="author-designation">{testimonials[0].designation}</p>
            </div>
            <p className="quote">{testimonials[0].quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;