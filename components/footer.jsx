"use client";

import { useEffect } from "react";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

export default function Footer() {
  const logo = {
    url: "/favicon.png",
  };

  const navItems = ["Home", "About", "Skills", "Project", "Contact"];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/arkhanardna",
      color: "text-pink-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/arkhanardana",
      color: "text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/arkhan-ardana-86a705270/",
      color: "text-blue-600",
    },
  ];

  useEffect(() => {
    if (!window.lenis) {
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
    }
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.lenis.scrollTo(target, { duration: 1.2 });
    }
  };

  return (
    <footer className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative px-4 pt-16 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <Image
                src={logo.url || "/placeholder.svg"}
                alt="Arkhan Ardana"
                width={50}
                height={50}
                className="rounded-full transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-xl font-bold text-white">Arkhan Ardana</span>
            </Link>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
              <Mail />
              <Link href="mailto:arkhanardanaok123@gmail.com">arkhanardanaok123@gmail.com</Link>
            </div>
          </div>

          <nav className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                    className="group flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>

            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  <div className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors duration-300">
                    <social.icon size={20} className={`${social.color}`} />
                  </div>
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-white/20"></div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} Arkhan Ardana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
