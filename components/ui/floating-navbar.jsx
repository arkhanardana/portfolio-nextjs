"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";

export const FloatingNav = ({ navItems, className }) => {
  useEffect(() => {
    window.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
    });

    function raf(time) {
      window.lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.lenis.scrollTo(target, { duration: 1.2 });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full backdrop-blur-xl bg-white/10 shadow-2xl shadow-black/10 z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => scrollToSection(e, navItem.link)}
            className="relative text-white/90 items-center flex space-x-1 hover:text-white transition-colors duration-200"
          >
            <span className="block text-sm md:text-lg font-medium">{navItem.name}</span>
          </a>
        ))}
        <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
          <button
            className="border border-white/30 text-sm font-medium relative text-white/90 hover:text-white px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <span>Hire Me</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent h-px" />
          </button>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
