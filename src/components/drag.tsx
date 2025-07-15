
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Login",
      image: "/src/assets/images/img1 (1).png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Alex Assistance",
      image: "/src/assets/images/img1 (2).png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Crypt",
  image: "/src/assets/images/img1 (3).png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "CSS Gallery",
       image: "/src/assets/images/img1 (4).png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Headphone",
     image: "/src/assets/images/img1 (5).png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Optiflow",
     image: "/src/assets/images/img1 (6).png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Urbania Welfare",
     image: "/src/assets/images/img1 (7).png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
       MY PROJECTS!
      </p>
      {items.map((item, idx) => (
        <DraggableCardBody key={item.title + idx} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-20 w-20 object-cover"
          />
          <h3 className="mt-1 text-center text-xs font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
export default DraggableCardDemo;