import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DotPattern from "./ui/dot-pattern";
import { FloatingNav } from "./ui/floating-navbar";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Hero() {
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "#about",
		},
		{
			name: "Contact",
			link: "#contact",
		},
	];

	return (
		<div className="relative">
			<FloatingNav navItems={navItems} />
			<DotPattern className="-z-10" />
			<section className="relative flex flex-col items-center justify-center text-center h-screen w-full z-10">
				<Avatar className="w-48 h-48 my-6">
					<AvatarImage src="/testaja.png" />
					<AvatarFallback>AA</AvatarFallback>
				</Avatar>
				<h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
					Hi, I&apos;m <span>Arkhan Ardana</span>.
				</h1>
				<p className="max-w-4xl mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
					I&apos;m a passionate developer creating modern, interactive, and responsive web applications.
				</p>
			</section>
			<div className="relative w-full mt-8">
				<VelocityScroll
					text="Fullstack Developer "
					default_velocity={5}
					className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
				/>
			</div>
		</div>
	);
}
