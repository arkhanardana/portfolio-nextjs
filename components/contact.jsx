"use client";

import BlurIn from "./ui/blur-in";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Github, ArrowRight, ChevronUp, Sparkle } from "lucide-react";
import Lanyard from "@/components/ui/lanyard";
import Link from "next/link";

export default function Contact() {
  const contactData = [
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/arkhan-ardana-86a705270/",
      color: "text-blue-600",
      bgGradient: "bg-gradient-to-r from-gray-500/20 to-white-600/10",
      borderColor: "border-gray-500/30",
      hoverColor: "hover:border-gray-500/50",
    },
    {
      title: "Instagram",
      description: "Follow my creative journey",
      icon: Instagram,
      link: "https://www.instagram.com/arkhanardna",
      color: "text-pink-600",
      bgGradient: "bg-gradient-to-r from-gray-500/20 to-white-600/10",
      borderColor: "border-gray-500/30",
      hoverColor: "hover:border-gray-500/50",
    },
    {
      title: "GitHub",
      description: "Check out my code repositories",
      icon: Github,
      link: "https://github.com/arkhanardana",
      color: "text-white",
      bgGradient: "bg-gradient-to-r from-gray-500/20 to-white-600/10",
      borderColor: "border-gray-500/30",
      hoverColor: "hover:border-gray-500/50",
    },
  ];

  return (
    <section className="bg-[#171717] scroll-mt-0" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="hidden md:block mb-0 md:mb-10">
          <Lanyard position={[0, 0, 12]} gravity={[0, -30, 0]} />
          <h1 className="text-center flex items-center text-gray-50 justify-center text-4xl font-bold tracking-tight gap-x-3 -mt-10">
            Drag The Lanyard <Sparkle />
          </h1>
        </div>
        <div className="container mx-auto px-4 lg:px-44 pt-16 md:pt-0 pb-16 scroll-mt-0">
          <div>
            <BlurIn word={"Reach me"} className={"mb-10 text-3xl sm:text-4xl font-bold md:text-5xl text-gray-50"} />

            <div className="grid grid-cols-1 gap-6">
              {contactData.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 border ${item.borderColor} ${item.hoverColor} ${item.bgGradient} backdrop-blur-sm hover:shadow-lg hover:shadow-${item.color}/10 hover:-translate-y-1`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-white">
                      <div className={`p-2 rounded-full ${item.bgGradient} border ${item.borderColor}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-white/80">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <Button
                      variant="secondary"
                      className={`w-full cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-300 text-white border ${item.borderColor} ${item.hoverColor}`}
                    >
                      <Link href={item.link} className="flex items-center w-full justify-between">
                        <span>Connect on {item.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
