import Image from "next/image";
import BlurIn from "./ui/blur-in";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

export default function Skills() {
	const skills = [
		{
			name: "Next.js",
			img: "/nextjs.png",
		},
		{
			name: "React.js",
			img: "/react.png",
		},
		{
			name: "Javascript",
			img: "/js.png",
		},
		{
			name: "Node.js",
			img: "/node.png",
		},
		{
			name: "HTML",
			img: "/html.png",
		},
		{
			name: "Typescript",
			img: "/ts.png",
		},
		{
			name: "Tailwind CSS",
			img: "/tailwind.png",
		},
		{
			name: "CSS",
			img: "/css.png",
		},
		{
			name: "MySQL",
			img: "/sql.png",
		},
		{
			name: "MongoDB",
			img: "/mongo.png",
		},
	];

	const firstRow = skills.slice(0, skills.length / 2);
	const secondRow = skills.slice(skills.length / 2);

	const SkillsCard = ({ img, name }) => {
		return (
			<figure
				className={cn(
					"relative w-44 cursor-pointer overflow-hidden rounded-xl border p-3",
					// light styles
					"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
					// dark styles
					"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
				)}
			>
				<div className="flex flex-row items-center gap-2">
					<Image className="object-contain h-6 w-6" width="32" height="32" alt="" src={img} />
					<div className="flex flex-col">
						<figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
					</div>
				</div>
			</figure>
		);
	};

	return (
		<section
			className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:max-w-4xl lg:max-w-[90rem] mx-auto my-20 scroll-mt-0"
			id="skills"
		>
			<div className="flex flex-col mx-10 md:mx-16 mt-20 mb-10 justify-between items-center">
				<BlurIn word={"My Skills"} className={"mb-10 text-3xl sm:text-4xl font-bold md:text-5xl"}></BlurIn>
				<div className="relative w-full overflow-hidden">
					<Marquee pauseOnHover className="[--duration:20s]">
						{firstRow.map((skill) => (
							<SkillsCard key={skill.name} {...skill} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover className="[--duration:20s]">
						{secondRow.map((skill) => (
							<SkillsCard key={skill.name} {...skill} />
						))}
					</Marquee>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
				</div>
			</div>
		</section>
	);
}
