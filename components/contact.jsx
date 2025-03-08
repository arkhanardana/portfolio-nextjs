"use client";

import BlurIn from "./ui/blur-in";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Github, ArrowRight } from "lucide-react";
import Lanyard from "@/components/ui/lanyard";

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
    <section className="container mx-auto pt-16 md:pt-0 pb-16 scroll-mt-0" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="hidden md:block">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
        <div className="container px-4">
          <BlurIn word={"Reach me"} className={"mb-10 text-3xl sm:text-4xl font-bold md:text-5xl"} />

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
                    className={`w-full cursor-pointer bg-white/10 hover:bg-white/20 hover:gap- transition-all duration-300 text-white border ${item.borderColor} ${item.hoverColor}`}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Connect on {item.title} <ArrowRight className="w-4 h-4 ml-2"></ArrowRight>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
