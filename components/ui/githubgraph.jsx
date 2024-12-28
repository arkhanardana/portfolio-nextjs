import GitHubCalendar from "react-github-calendar";

export default function GithubGraph() {
	return (
		<div className="container mx-auto px-4 md:px-10 flex flex-col w-full">
			<h1 className="text-2xl md:text-4xl font-bold mb-6">My Github Activity</h1>
			<div className="overflow-auto">
				<GitHubCalendar
					username="arkhanardana"
					labels={{
						totalCount: "{{count}} contributions in the last half year",
					}}
					showWeekdayLabels
					weekStart={1}
					colorScheme="light"
				/>
			</div>
		</div>
	);
}
