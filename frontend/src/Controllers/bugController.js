import BugModel from '../Models/bugModel';

export function retrieveBugs() {
	let data = [];

	data.push(
		new BugModel({
			_id: 'MDU6SXNzdWUx',
			title: 'Found a bug',
			details: "I'm having a problem with this.",
			steps: 'Open the app then it will crash.',
			version: 'v1.0',
			assigned: 'Daria',
			creator: 'Joe Mann',
			priority: 1,
			time: '23:30',
		}),
	);
	data.push(
		new BugModel({
			_id: 'MDU6SXNzdWZ1',
			title: 'Another bug again',
			details: "I'm having a problem with this.",
			steps: 'Open the app then it will crash.',
			version: 'v1.0',
			assigned: 'Daria',
			creator: 'Joe Mann',
			priority: 3,
			time: '23:23',
		}),
	);

	const sorted = data.sort((a, b) => a.priority - b.priority);
	return sorted;
}
