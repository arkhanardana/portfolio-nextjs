"use client";

import { useEffect } from "react";
import { Instagram, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

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
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/arkhanardana",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/arkhan-ardana-86a705270/",
    },
  ];

  // Initialize Lenis for smooth scrolling
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

  // Smooth scroll to section function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.lenis.scrollTo(target, { duration: 1.2 });
    }
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background with solid color */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative px-4 pt-16 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo and contact */}
          <div className="space-y-4">
            <a
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
            </a>
            <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:arkhanardanaok123@gmail.com">arkhanardanaok123@gmail.com</a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                    className="group flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  <div className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors duration-300">
                    <social.icon size={20} />
                  </div>
                  <span className="sr-only">{social.name}</span>
                </a>
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
