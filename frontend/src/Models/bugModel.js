export default function Bug(bug) {
	if (bug !== undefined) {
		this._id = bug._id;
		this.title = bug.title;
		this.details = bug.details;
		this.steps = bug.steps;
		this.version = bug.version;
		this.priority = bug.priority;
		this.assigned = bug.assigned;
		this.creator = bug.creator;
		this.time = bug.time;
	}
}
