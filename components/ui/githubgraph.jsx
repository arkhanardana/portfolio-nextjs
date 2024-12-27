import GitHubCalendar from "react-github-calendar";

export default function GithubGraph() {
	return (
		<div className="flex items-start">
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
	);
}
