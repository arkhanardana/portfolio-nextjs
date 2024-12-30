import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export default function ProjectSection() {
	const projects = [
		{
			id: 1,
			title: "Creative Prompt",
			description: "A SaaS website that provides a platform for user to create and share powered Prompt AI",
			image: "/project1.png",
			technologies: ["Next.js", "Tailwind CSS", "MongoDB", "NextAuth"],
			githubLink: "https://github.com/arkhanardana/prompt-creative.git",
			websiteLink: "https://prompt-creative.vercel.app/",
		},
		{
			id: 2,
			title: "Websitein",
			description: "A company profile website that provides information about the company and its services.",
			image: "/pro2.png",
			technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadcnUI"],
			githubLink: "https://github.com/arkhanardana/websitein.git",
			websiteLink: "https://websitein-dev.vercel.app/",
		},
		{
			id: 3,
			title: "Satu Langkah",
			description:
				"A SaaS platform that connects users with investors, enabling users to find investment opportunities and investors to discover promising projects.",
			image: "/pro3.png",
			technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadcnUI"],
			githubLink: "https://github.com/arkhanardana/satu-langkah.git",
		},
		{
			id: 4,
			title: "Es Teler Sultan",
			description: "An UMKM profile website that provides information about the UMKM and its services.",
			image: "/pro4.png",
			technologies: ["HTML", "JavaScript", "Tailwind CSS"],
			websiteLink: "https://estelersultannafadh.vercel.app/",
		},
	];

	return (
		<section className="pt-20 pb-16 bg-gray-50 scroll-mt-0" id="projects">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Recent Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<Card key={project.id} className="flex flex-col">
							<CardHeader>
								<Image
									src={project.image}
									alt={project.title}
									width={400}
									height={200}
									className="w-full h-60 object-contain rounded-t-lg"
									quality={100}
								/>
							</CardHeader>
							<CardContent className="flex-grow">
								<CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, index) => (
										<Badge key={index} variant="secondary">
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								{project.githubLink && (
									<Button variant="outline" size="sm" asChild>
										<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
											<Github className="mr-2 h-4 w-4" />
											GitHub
										</a>
									</Button>
								)}
								{project.websiteLink && (
									<Button variant="outline" size="sm" asChild>
										<a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
											<Globe className="mr-2 h-4 w-4" />
											Website
										</a>
									</Button>
								)}
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
