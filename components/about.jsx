"use client";

import { Globe, Code, Server, Database, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import BlurIn from "./ui/blur-in";
import AnimateParagraph from "./ui/animated-paragraph";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      icon: Code,
      label: "Frontend Dev",
      color: "bg-gray-200/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-400",
    },
    {
      icon: Server,
      label: "Backend Dev",
      color: "bg-gray-200/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-400",
    },
    {
      icon: Database,
      label: "Database Management",
      color: "bg-gray-200/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-400",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="container mx-auto scroll-mt-0 mt-36 relative" id="about">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl"></div>

      <div className="mx-4 sm:mx-10 md:mx-16 mt-10 mb-20 relative">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <BlurIn word={"About Me"} className={"text-3xl sm:text-4xl font-bold md:text-5xl"} />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              className="hidden md:flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-gray-400/30"
            >
              <Globe className="h-7 w-7 text-gray-500" strokeWidth={1.5} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-gray-300/10 to-gray-500/10 border border-gray-400/20"
          >
            <GraduationCap className="h-5 w-5 text-gray-500" />
            <span className="text-sm">SMK Negeri 2 Yogyakarta - SIJA</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-3 left-0 h-px bg-gradient-to-r from-gray-500 to-transparent"
            ></motion.div>

            <AnimateParagraph
              paragraph="Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications."
              delay={0.5}
              className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg mb-6"
            />

            <AnimateParagraph
              paragraph="Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and APIs, with MySQL and MongoDB for database management."
              delay={0.7}
              className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg mb-6"
            />

            <AnimateParagraph
              paragraph="I am passionate about creating user-friendly and efficient web applications, and I am always eager to learn and grow in my field."
              delay={0.9}
              className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg font-medium"
            />

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-3 right-0 h-px bg-gradient-to-l from-gray-500 to-transparent"
            ></motion.div>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-semibold">My Skills</h3>
            </div>

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`flex flex-col gap-2 p-4 rounded-lg ${skill.color} border ${skill.borderColor} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full bg-white/10 border ${skill.borderColor}`}>
                    <skill.icon className={`h-5 w-5 ${skill.textColor}`} />
                  </div>
                  <h4 className="font-medium">{skill.label}</h4>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={item}
              className="flex items-center gap-2 mt-2 p-3 rounded-lg bg-gray-200/10 border border-gray-400/30 backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-gray-500" />
              <p className="text-sm">Always learning new technologies!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
