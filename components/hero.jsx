"use client";

import { Download, Terminal } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { FloatingNav } from "./ui/floating-navbar";
import { VelocityScroll } from "./ui/scroll-based-velocity";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Threads from "./ui/threads";

export default function Hero() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="home">
      <div className="absolute top-0 left-0 w-full h-full">
        <Threads amplitude={0.5} distance={-0.4} />
      </div>
      <FloatingNav navItems={navItems} />
      <div className="flex items-center gap-4 py-6 mx-8">
        <Terminal color="#d1d5db" className="z-10" />
        <Link href="/" className="text-xl font-bold z-10 text-gray-300">
          Arkhan Ardana
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-center text-center h-[95svh] w-full z-10">
        <div className="mb-6 w-40 h-40 lg:w-44 lg:h-44">
          <BlurFade delay={0.4} inView>
            <Image
              src={"/me.webp"}
              width={900}
              height={900}
              alt="me"
              className="object-cover rounded-2xl grayscale hover:grayscale-0"
            />
          </BlurFade>
        </div>
        <BlurFade delay={0.4} inView>
          <h1 className="max-w-5xl text-3xl md:text-4xl font-extrabold tracking-tighter text-[#fafafa]">
            Hi, I&apos;m <span>Arkhan Ardana</span>.
          </h1>
          <p className="max-w-4xl mt-2 text-base text-[#fafafa] tracking-tight">
            I&apos;m a passionate developer creating modern, interactive, and responsive web applications.
          </p>
        </BlurFade>
        <motion.a
          href="/CV Arkhan Ardana.pdf"
          download
          className="inline-flex items-center px-6 py-3 mt-4 text-sm font-medium text-[#171717] bg-[#fafafa] rounded-full hover:bg-gray-200 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV
        </motion.a>
        <div className="relative w-full mx-auto mt-12">
          <BlurFade delay={0.4} inView>
            <VelocityScroll
              text="WEB DEVELOPER "
              default_velocity={5}
              className="text-center text-6xl font-bold tracking-[-0.02em] tracking-tighterdrop-shadow-sm text-[#fafafa] lg:text-8xl md:leading-[5rem]"
              maxSkew={35}
            />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
