"use client";

import Image from "next/image";
import BlurIn from "./ui/blur-in";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Next.js", img: "/next-js.png" },
    { name: "React.js", img: "/react.png" },
    { name: "Javascript", img: "/js.png" },
    { name: "Node.js", img: "/node.png" },
    { name: "HTML", img: "/html.png" },
    { name: "Typescript", img: "/ts.png" },
    { name: "Tailwind CSS", img: "/tailwind.png" },
    { name: "CSS", img: "/css.png" },
    { name: "MySQL", img: "/sql.png" },
    { name: "MongoDB", img: "/mongo.png" },
  ];

  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);

  const SkillsCard = ({ img, name }) => {
    return (
      <motion.figure
        className={cn(
          "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
          "bg-white/10 backdrop-blur-md border-white/20",
          "shadow-xl shadow-black/20",
          "hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-black/30",
          "transition-all duration-500 ease-out",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
        )}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          z: 50,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="relative z-10 flex flex-row items-center gap-3">
          <div className="relative">
            <Image
              className="object-contain h-8 w-8 drop-shadow-lg"
              width="32"
              height="32"
              alt={name}
              src={img || "/placeholder.svg"}
            />
            <div className="absolute inset-0 bg-white/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-gray-50 drop-shadow-sm">{name}</figcaption>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl opacity-60"></div>
      </motion.figure>
    );
  };

  return (
    <section className="relative h-fit w-full overflow-hidden bg-[#171717]" id="home">
      <div
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg my-20 scroll-mt-0"
        id="skills"
      >
        <div className="flex flex-col mx-10 md:mx-16 mt-20 mb-10 justify-between items-center">
          <BlurIn
            word={"Tech Stack"}
            className={"mb-10 text-3xl sm:text-4xl font-bold md:text-5xl text-gray-50"}
          ></BlurIn>
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((skill) => (
                <SkillsCard key={skill.name} {...skill} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((skill) => (
                <SkillsCard key={skill.name} {...skill} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
