import { Globe } from "lucide-react";
import BlurIn from "./ui/blur-in";

export default function About() {
	return (
		<div className="container mx-auto">
			<div className="flex mx-16 my-10 justify-between items-center">
				<BlurIn word={"About Me"} className={"text-4xl font-bold md:text-7xl"}></BlurIn>

				<div className="inline-flex items-center gap-2 rounded-full bg-gray-100/80 px-4 py-4">
					<Globe className="h-10 w-10 text-gray-600" strokeWidth={1.5} />
				</div>
			</div>
		</div>
	);
}
