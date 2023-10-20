import db from '../../db';
import { useParams } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faFileImport, faFilter, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Grades() {
	const { courseId } = useParams();

	const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
	const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

	return (
		<div>
			<div class="wd-button-group">
				<button class="btn btn-light">
					<FontAwesomeIcon icon={faFileImport} /> Import
				</button>
				<button class="btn btn-light">
					<FontAwesomeIcon icon={faFileExport} /> Export
				</button>
				<button class="btn btn-light">
					<FontAwesomeIcon icon={faGear} />
				</button>
			</div>
			<br class="mt-3" />
			<hr />

			<div class="row mb-3">
				<div class="col">
					<b>
						<span>Student Names</span>
					</b>
					<br />
					<br />

					<div class="input-group mb-3">
						<select class="form-select">
							<option selected>
								<FontAwesomeIcon icon={faMagnifyingGlass} /> Search Students
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
				</div>
				<div class="col">
					<b>
						<span>Assignment Names</span>
					</b>
					<br />
					<br />

					<div class="input-group mb-3">
						<select class="form-select">
							<option selected>
								<FontAwesomeIcon icon={faMagnifyingGlass} /> Search Assignments
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
				</div>
			</div>

			<button class="btn btn-light mb-3">
				<FontAwesomeIcon icon={faFilter} /> Apply Filters
			</button>

			<table class="table table-bordered align-middle table-striped">
				<thead class="table-light">
					<th>Student Name</th>
					{assignments.map((assignment) => (
						<th>{assignment.title}</th>
					))}
				</thead>
				<tbody>
					{enrollments.map((enrollment) => {
						const user = db.users.find((user) => user._id === enrollment.user);
						return (
							<tr>
								<td>
									{user.firstName} {user.lastName}
								</td>
								{assignments.map((assignment) => {
									const grade = db.grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
									return <td>{grade?.grade || ''}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Grades;
