"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({ text, defaultVelocity = 5, className, maxSkew = 30 }) {
  function ParallaxText({ children, baseVelocity = 100, className, maxSkew = 30 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 300,
    });

    const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-5, 0, 5], {
      clamp: false,
    });

    const skew = useTransform(velocityFactor, [-5, 0, 5], [-maxSkew, 0, maxSkew]);

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 1;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, []);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x, skew }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}
              {""}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={defaultVelocity} className={className} maxSkew={maxSkew}>
        {text}
      </ParallaxText>
    </section>
  );
}
