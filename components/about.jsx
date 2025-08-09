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
      textColor: "text-gray-50",
    },
    {
      icon: Server,
      label: "Backend Dev",
      color: "bg-gray-200/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-50",
    },
    {
      icon: Database,
      label: "Database Management",
      color: "bg-gray-200/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-50",
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
    <section className="relative h-fit w-full bg-[#171717] py-24 md:py-16" id="about">
      <div className="container mx-auto relative">
        <div className="mx-4 sm:mx-10 md:mx-16 mb-20 relative">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold md:text-5xl text-white">About Me</h1>
              <div className="hidden md:flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-gray-400/30">
                <Globe className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 py-2 rounded-full bg-gradient-to-r from-gray-300/10 to-gray-500/10 border border-gray-400/20">
              <GraduationCap className="h-5 w-5 text-gray-50" />
              <span className="text-sm text-gray-50">SMKN 2 Yogyakarta - SIJA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <p className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg mb-6 text-gray-50">
                Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi
                Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as
                well as developing software applications.
              </p>

              <p className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg mb-6 text-gray-50">
                Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating
                responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and
                APIs, with MySQL and MongoDB for database management.
              </p>

              <p className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg font-medium text-gray-50">
                I am passionate about creating user-friendly and efficient web applications, and I always excited to
                learn and grow in my field.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-gray-50" />
                <h3 className="text-lg font-semibold text-gray-50">My Skills</h3>
              </div>

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 p-4 rounded-lg ${skill.color} border ${skill.borderColor} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full bg-white/10 border ${skill.borderColor}`}>
                      <skill.icon className={`h-5 w-5 ${skill.textColor}`} />
                    </div>
                    <h4 className="font-medium text-gray-50">{skill.label}</h4>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-2 p-3 rounded-lg bg-gray-200/10 border border-gray-400/30 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-gray-50" />
                <p className="text-sm text-gray-50">Always learning new technologies!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
