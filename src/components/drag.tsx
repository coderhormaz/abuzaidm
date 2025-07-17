import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { useState } from "react";

export function DraggableCardDemo() {
  const [isDragging, setIsDragging] = useState(false);
  const githubUrl = "https://github.com/your-username"; // Replace with your GitHub URL

  const items = [
    {
      title: "Login",
      image: "/src/assets/images/img1 (1).png",
      url: "https://login-secure.netlify.app/",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Alex Assistance",
      image: "/src/assets/images/img1 (2).png",
      url: "https://alex-assistance.netlify.app/",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Crypt",
      image: "/src/assets/images/img1 (3).png",
      url: "https://share-crypto.netlify.app/",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "CSS Gallery",
      image: "/src/assets/images/img1 (4).png",
      url: "https://css-toolcard.netlify.app/",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Headphone",
      image: "/src/assets/images/img1 (5).png",
      url: "https://marshall-headphone2.netlify.app/",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Optiflow",
      image: "/src/assets/images/img1 (6).png",
      url: "http://www.optiflow.in/",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Urbania Welfare",
      image: "/src/assets/images/img1 (7).png",
      url: "https://hackathon-donation.netlify.app",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleClick = (url: string) => {
    if (!isDragging) {
      window.open(url, "_blank");
    }
  };

  const openGithub = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      {/* Enhanced GitHub Button */}
      <div className="absolute top-1/2 -translate-y-1/2">
        <button
          onClick={openGithub}
          className="relative px-8 py-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold text-xl shadow-xl group overflow-hidden"
        >
          {/* Glowing border */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-[2px]"></span>
          
          {/* Button content container */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            <span>View My GitHub</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
          
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_linear_infinite]"></span>
        </button>
      </div>

      {/* Draggable Project Cards */}
      {items.map((item, idx) => (
        <DraggableCardBody key={item.title + idx} className={item.className}>
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(item.url)}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-20 w-20 object-cover"
            />
            <h3 className="mt-1 text-center text-xs font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

export default DraggableCardDemo;