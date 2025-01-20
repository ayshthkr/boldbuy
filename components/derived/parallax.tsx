"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
  containerRef,
}: {
  images: string[];
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
}) => {
  const gridRef = useRef<any>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different scroll speeds for each column
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -1100]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start w-full transition-opacity duration-500",
        isInView ? "opacity-100" : "opacity-0",
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateYFirst,
              }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-[300px] w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="800"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateYSecond,
              }}
              key={"grid-2" + idx}
            >
              <Image
                src={el}
                className="h-[300px] w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="800"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateYThird,
              }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-[300px] w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="800"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;