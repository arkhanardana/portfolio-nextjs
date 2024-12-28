import About from "@/components/about";
import GithubActivity from "@/components/github-activity";
import Hero from "@/components/hero";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<GithubActivity />
		</>
	);
}
