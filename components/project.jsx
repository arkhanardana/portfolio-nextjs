import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

export default function ProjectSection() {
	const projects = [
		{
			id: 1,
			title: "E-commerce Website",
			description: "A fully functional e-commerce website with product listing, cart, and checkout features.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
			githubLink: "https://github.com/yourusername/ecommerce-project",
			websiteLink: "https://ecommerce-project.vercel.app",
		},
		{
			id: 2,
			title: "Task Management App",
			description: "A task management application with drag-and-drop functionality and team collaboration features.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React", "TypeScript", "Redux", "Material-UI"],
			githubLink: "https://github.com/yourusername/task-management-app",
			websiteLink: "https://task-management-app.vercel.app",
		},
		{
			id: 3,
			title: "Weather Forecast App",
			description: "A weather forecast application that provides real-time weather data and 5-day forecasts.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React Native", "Expo", "OpenWeatherMap API"],
			githubLink: "https://github.com/yourusername/weather-forecast-app",
			websiteLink: "https://weather-forecast-app.expo.io",
		},
		{
			id: 4,
			title: "E-commerce Website",
			description: "A fully functional e-commerce website with product listing, cart, and checkout features.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
			githubLink: "https://github.com/yourusername/ecommerce-project",
			websiteLink: "https://ecommerce-project.vercel.app",
		},
		{
			id: 5,
			title: "E-commerce Website",
			description: "A fully functional e-commerce website with product listing, cart, and checkout features.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
			githubLink: "https://github.com/yourusername/ecommerce-project",
			websiteLink: "https://ecommerce-project.vercel.app",
		},
		{
			id: 6,
			title: "E-commerce Website",
			description: "A fully functional e-commerce website with product listing, cart, and checkout features.",
			image: "/placeholder.svg?height=200&width=300",
			technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
			githubLink: "https://github.com/yourusername/ecommerce-project",
			websiteLink: "https://ecommerce-project.vercel.app",
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
									width={300}
									height={200}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
							</CardHeader>
							<CardContent className="flex-grow">
								<CardTitle className="mb-2">{project.title}</CardTitle>
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
								<Button variant="outline" size="sm" asChild>
									<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
										<Github className="mr-2 h-4 w-4" />
										GitHub
									</a>
								</Button>
								<Button variant="outline" size="sm" asChild>
									<a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
										<Globe className="mr-2 h-4 w-4" />
										Website
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
