import React, { useState } from 'react';
function WorkingWithObjects() {
	const URL = 'http://localhost:4000/a5/assignment';
	const [assignment, setAssignment] = useState({
		id: 1,
		title: 'NodeJS Assignment',
		description: 'Create a NodeJS server with ExpressJS',
		due: '2021-10-10',
		completed: false,
		score: 0
	});

	return (
		<div>
			<h3>Working With Objects</h3>
			<h4>Modifying Properties</h4>

			<a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 float-end">
				Update Title
			</a>
			<input
				className="form-control mb-2 w-75"
				type="text"
				value={assignment.title}
				onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
			/>

			<a href={`${URL}/score/${assignment.score}`} className="btn btn-primary me-2 float-end">
				Update Score
			</a>
			<input
				className="form-control mb-2 w-75"
				type="number"
				value={assignment.score}
				onChange={(e) => setAssignment({ ...assignment, score: e.target.value })}
			/>

			<a href={`${URL}/completed/${assignment.completed}`} className="btn btn-primary me-2 float-end">
				Update Completed
			</a>
			<input
				className="form-check-input mb-2"
				type="checkbox"
				checked={assignment.completed}
				onChange={(e) => setAssignment({ ...assignment, completed: !assignment.completed })}
			/>

			<h4>Retrieving Properties</h4>
			<a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary me-2">
				Get Title
			</a>

			<h4>Retrieving Objects</h4>
			<a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-2">
				Get Assignment
			</a>
		</div>
	);
}
export default WorkingWithObjects;
