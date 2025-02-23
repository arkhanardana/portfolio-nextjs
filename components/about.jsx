import { Globe } from "lucide-react";
import BlurIn from "./ui/blur-in";
import AnimateParagraph from "./ui/animated-paragraph";

export default function About() {
  return (
    <section className="container mx-auto scroll-mt-0 mt-32 scroll-smooth" id="about">
      <div className="flex mx-10 md:mx-16 mt-10 mb-10 justify-between items-center">
        <BlurIn word={"About Me"} className={"text-3xl sm:text-4xl font-bold md:text-5xl"}></BlurIn>

        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100/80 px-4 py-4">
          <Globe className="h-10 w-10 text-gray-600" strokeWidth={1.5} />
        </div>
      </div>

      <AnimateParagraph
        paragraph="Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and APIs, with MySQL and MongoDB for database management. I am passionate about creating user-friendly and efficient web applications, and I am always eager to learn and grow in my field."
        delay={0.5}
        className="text-[0.9rem] leading-relaxed sm:text-base md:text-xl lg:text-[1.30rem] mx-10 md:mx-16"
      />
    </section>
  );
}
