import BlurIn from "./ui/blur-in";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

export default function Skills() {
	const skills = [
		{
			name: "Jack",
			img: "https://avatar.vercel.sh/jack",
		},
		{
			name: "Jill",
			img: "https://avatar.vercel.sh/jill",
		},
		{
			name: "John",
			img: "https://avatar.vercel.sh/john",
		},
		{
			name: "Jane",
			img: "https://avatar.vercel.sh/jane",
		},
		{
			name: "Jenny",
			img: "https://avatar.vercel.sh/jenny",
		},
		{
			name: "James",
			img: "https://avatar.vercel.sh/james",
		},
	];

	const firstRow = skills.slice(0, skills.length / 2);
	const secondRow = skills.slice(skills.length / 2);

	const SkillsCard = ({ img, name }) => {
		return (
			<figure
				className={cn(
					"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
					// light styles
					"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
					// dark styles
					"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
				)}
			>
				<div className="flex flex-row items-center gap-2">
					<img className="rounded-full" width="32" height="32" alt="" src={img} />
					<div className="flex flex-col">
						<figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
					</div>
				</div>
			</figure>
		);
	};

	return (
		<div className="container mx-auto scroll-mt-0" id="skills">
			<div className="flex flex-col mx-10 md:mx-16 mt-20 mb-10 justify-between items-center">
				<BlurIn word={"Skills"} className={"text-2xl sm:text-4xl font-bold md:text-5xl"}></BlurIn>
				<div className="relative overflow-hidden">
					<Marquee pauseOnHover className="[--duration:20s]">
						{firstRow.map((skill) => (
							<SkillsCard key={skill.username} {...skill} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover className="[--duration:20s]">
						{secondRow.map((skill) => (
							<SkillsCard key={skill.username} {...skill} />
						))}
					</Marquee>
				</div>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
		</div>
	);
}
