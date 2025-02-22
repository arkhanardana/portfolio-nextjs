"use client";

import BlurIn from "./ui/blur-in";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Github } from "lucide-react";
import Lanyard from "@/components/ui/lanyard";

export default function Contact() {
  const contactData = [
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/arkhan-ardana-86a705270/",
      color: "text-blue-600",
    },
    {
      title: "Instagram",
      description: "Follow my creative journey",
      icon: Instagram,
      link: "https://www.instagram.com/arkhanardna",
      color: "text-pink-600",
    },
    {
      title: "GitHub",
      description: "Check out my code repositories",
      icon: Github,
      link: "https://github.com/arkhanardana",
      color: "text-gray-800",
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

          <div className="grid grid-cols-1 lg:gap-20 gap-6">
            {contactData.map((item, index) => (
              <Card key={index} className="transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Connect on {item.title}
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
