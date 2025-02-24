"use client";

import { Globe, Code, Server, Database } from "lucide-react";
import BlurIn from "./ui/blur-in";
import AnimateParagraph from "./ui/animated-paragraph";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { icon: Code, label: "Frontend Dev" },
    { icon: Server, label: "Backend Dev" },
    { icon: Database, label: "Database Management" },
  ];

  return (
    <section className="container mx-auto scroll-mt-0 mt-32" id="about">
      <div className="mx-4 sm:mx-10 md:mx-16 mt-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <BlurIn word={"About Me"} className={"text-3xl sm:text-4xl font-bold md:text-5xl"} />
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100/80 px-4 py-4">
            <Globe className="h-10 w-10 text-gray-600" strokeWidth={1.5} />
          </div>
        </div>

        <AnimateParagraph
          paragraph="Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and APIs, with MySQL and MongoDB for database management. I am passionate about creating user-friendly and efficient web applications, and I am always eager to learn and grow in my field."
          delay={0.5}
          className="text-[0.9rem] leading-relaxed sm:text-base md:text-xl lg:text-[1.30rem] mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-start"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon className="h-6 w-6 text-gray-600" />
              <span className="text-sm font-medium">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
