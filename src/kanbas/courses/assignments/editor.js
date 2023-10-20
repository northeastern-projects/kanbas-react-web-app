import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import db from '../../db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircleCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

	const { courseId } = useParams();
	const navigate = useNavigate();

	const URL = `/kanbas/courses/${courseId}/assignments`;

	const handleSave = () => {
		console.log('Actually saving assignment TBD in later assignments');
		navigate(URL);
	};

	return (
		<div>
			<div class="wd-button-group">
				<button class="btn" style={{ color: 'green' }}>
					<FontAwesomeIcon icon={faCircleCheck} /> Published
				</button>
				<button class="btn btn-light">
					<FontAwesomeIcon icon={faEllipsisVertical} />
				</button>
			</div>
			<br class="mt-3" />
			<hr />

			<div class="mb-3">
				<label for="assignment_name" class="form-label">
					Assignment Name
				</label>
				<input type="text" class="form-control" id="assignment_name" value={assignment.title} />
			</div>
			<div class="mb-3">
				<label for="assignment_description" class="form-label">
					Description
				</label>
				<textarea class="form-control" id="assignment_description" rows="3" style={{ resize: 'none' }}>
					This is a description of the assignment
				</textarea>
			</div>
			<div class="container">
				<div class="row mb-3 align-items-center">
					<div class="col-3" style={{ textAlign: 'right' }}>
						<label for="points">Points</label>
					</div>
					<div class="col">
						<input type="text" id="points" class="form-control" value="100" />
					</div>
				</div>

				<div class="row mb-3 align-items-center">
					<div class="col-3" style={{ textAlign: 'right' }}>
						<label for="assignment_group">Assignment Group</label>
					</div>
					<div class="col">
						<select name="" id="assignment_group" class="form-select">
							<option value="">Assignments</option>
							<option value="">Quizzes</option>
						</select>
					</div>
				</div>

				<div class="row mb-3 align-items-center">
					<div class="col-3" style={{ textAlign: 'right' }}>
						<label for="display_grade">Display Grade As</label>
					</div>
					<div class="col">
						<select name="" id="display_grade" class="form-select">
							<option value="">Percentage</option>
							<option value="">Absolute</option>
						</select>
					</div>
				</div>

				<div class="row mb-3 align-items-center">
					<div class="col-3" style={{ textAlign: 'right' }}></div>
					<div class="col">
						<input class="form-check-input" type="checkbox" value="" id="count_grade" />
						<label class="form-check-label" for="count_grade">
							{' '}
							Do not count this assignment towards the final grade{' '}
						</label>
					</div>
				</div>

				<div class="row mb-3 align-items-top">
					<div class="col-3" style={{ textAlign: 'right' }}>
						Submission Type
					</div>
					<div class="col">
						<div class="card">
							<div class="card-body">
								<select name="" id="display_grade" class="form-select mb-3">
									<option value="">Online</option>
									<option value="">In person</option>
									<option value="">Fax</option>
									<option value="">Pigeon Mail</option>
								</select>

								<b>
									<span>Online entry options</span>
								</b>
								<br />
								<br />

								<input class="form-check-input" type="checkbox" value="" id="o1" checked />
								<label class="form-check-label" for="o1">
									{' '}
									Text Entry{' '}
								</label>
								<br />

								<input class="form-check-input" type="checkbox" value="" id="o2" checked />
								<label class="form-check-label" for="o2">
									{' '}
									Website URL{' '}
								</label>
								<br />

								<input class="form-check-input" type="checkbox" value="" id="o3" checked />
								<label class="form-check-label" for="o3">
									{' '}
									Media Recordings{' '}
								</label>
								<br />

								<input class="form-check-input" type="checkbox" value="" id="o4" />
								<label class="form-check-label" for="o4">
									{' '}
									Student Annotation{' '}
								</label>
								<br />

								<input class="form-check-input" type="checkbox" value="" id="o5" />
								<label class="form-check-label" for="o5">
									{' '}
									File Uploads{' '}
								</label>
								<br />
							</div>
						</div>
					</div>
				</div>

				<div class="row mb-3 align-items-top">
					<div class="col-3" style={{ textAlign: 'right' }}>
						Submission Type
					</div>
					<div class="col">
						<div class="card">
							<div class="card-body">
								<b>
									<span>Assign to</span>
								</b>
								<br />
								<br />

								<div class="card mb-3">
									<div class="card-body">
										<span class="badge text-bg-light">Everyone</span>
									</div>
								</div>

								<b>
									<span>Due</span>
								</b>
								<br />
								<br />

								<div class="input-group mb-3">
									<input type="text" class="form-control" value="September 18 2023, 11:59 PM" />
									<span class="input-group-text">
										<FontAwesomeIcon icon={faCalendarDays} />
									</span>
								</div>

								<div class="row">
									<div class="col">
										<b>
											<span>Available From</span>
										</b>
										<br />
										<br />
										<div class="input-group mb-3">
											<input type="text" class="form-control" value="September 09 2023, 11:59 PM" />
											<span class="input-group-text">
												<FontAwesomeIcon icon={faCalendarDays} />
											</span>
										</div>
									</div>
									<div class="col">
										<b>
											<span>Until</span>
										</b>
										<br />
										<br />
										<div class="input-group mb-3">
											<input type="text" class="form-control" value="" />
											<span class="input-group-text">
												<FontAwesomeIcon icon={faCalendarDays} />
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<input class="form-check-input" type="checkbox" value="" id="notify" />
					<label class="form-check-label" for="notify">
						{' '}
						Notify users that the content has changed{' '}
					</label>
				</div>
				<div class="col-auto">
					<Link to={URL} className="btn btn-light">
						Cancel
					</Link>
					<button onClick={handleSave} className="btn btn-danger">
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default AssignmentEditor;
