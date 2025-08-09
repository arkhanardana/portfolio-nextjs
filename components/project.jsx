import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import BlurIn from "./ui/blur-in";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";

export default function ProjectSection() {
  const projects = [
    {
      title: "Noto",
      description: "A Todo List website using authentication feature",
      image: "/noto.png",
      technologies: ["Next.js", "Typescript", "Supabase", "Tailwind CSS", "Better Auth"],
      githubLink: "https://github.com/arkhanardana/noto",
      websiteLink: "https://noto-inky.vercel.app/",
    },
    {
      title: "Technomart",
      description: "A simple E commerce website with admin dashboard and payment gateway",
      image: "/technomart.png",
      technologies: ["Next.js", "Typescript", "Lucia", "Tailwind CSS", "Supabase", "Xendit"],
      githubLink: "https://github.com/arkhanardana/technomart",
    },
    {
      title: "Creative Prompt",
      description: "A SaaS website that provides a platform for user to create and share powered Prompt AI",
      image: "/project1.png",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Auth.js"],
      githubLink: "https://github.com/arkhanardana/prompt-creative.git",
      websiteLink: "https://prompt-creative.vercel.app/",
    },
    {
      title: "Websitein",
      description: "A company profile website that provides information about the company and its services.",
      image: "/pro2.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      githubLink: "https://github.com/arkhanardana/websitein.git",
      websiteLink: "https://websitein-dev.vercel.app/",
    },
    {
      title: "Satu Langkah",
      description:
        "A SaaS platform that connects users with investors, enabling users to find investment opportunities and investors to discover promising projects.",
      image: "/pro3.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      githubLink: "https://github.com/arkhanardana/satu-langkah.git",
    },
    {
      title: "Es Teler Sultan",
      description:
        "A profile website for an UMKM, highlighting its identity, services, and key information to introduce and promote its business effectively.",
      image: "/pro4.png",
      technologies: ["HTML", "JavaScript", "Tailwind CSS"],
      websiteLink: "https://estelersultannafadh.vercel.app/",
    },
    {
      title: "Al-Qorni",
      description:
        "A Profile Website for Majelis Ta'lim Al-Qorni, showcasing its activities, mission, and providing an introduction to what Al-Qorni stands for as a center for Islamic learning and community engagement.",
      image: "/pro5.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      websiteLink: "https://alqorni.vercel.app/",
    },
  ];

  return (
    <section className="pt-20 bg-[#171717] scroll-mt-0" id="projects">
      <div className="container mx-auto px-4">
        <BlurIn word={"Recent Projects"} className="text-white mb-12 text-3xl sm:text-4xl font-bold md:text-5xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-300/20 to-gray-100/10 border transition-transform duration-300 hover:scale-[1.02] h-full"
            >
              <CardHeader className="p-0 overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </CardHeader>

              <CardContent className="flex-grow p-5">
                <CardTitle className="mb-3 text-2xl text-white">{project.title}</CardTitle>
                <p className="text-white/80 mb-5 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      variant="outline"
                      key={index}
                      className="bg-white/10 text-white/90 border-white/20 hover:bg-white/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between gap-2 p-5 pt-0">
                {project.githubLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                    asChild
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </Link>
                  </Button>
                )}
                {project.websiteLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                    asChild
                  >
                    <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>

              <BorderBeam duration={10} size={300} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
