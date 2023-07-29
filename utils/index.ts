import { createRandomFollower, createRandomUser, createRandomThread, generateThreads } from "./data";

function timeAgo(date: string) {
	const now = new Date();
	const milliseconds = now.getTime() - new Date(date).getTime();

	const netMS = Math.floor(milliseconds / 1000);
	const netMins = Math.floor(netMS / 60);
	const netHrs = Math.floor(netMins / 60);
	const netDays = Math.floor(netHrs / 24);

	if (netMS < 60) return netMS + "s";
	else if (netMins < 60) return netMins + " min";
	else if (netHrs < 24) return netHrs + "h";
	else if (netDays === 1) return "Yesterday";
	else return netDays + " days";
}

export { timeAgo, createRandomFollower, createRandomUser, createRandomThread, generateThreads };
