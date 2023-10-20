import React from 'react';
import { Link, useParams } from 'react-router-dom';
import db from '../../db';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsisVertical, faGripVertical, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

function Assignments() {
	const { courseId } = useParams();
	const assignments = db.assignments;
	const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);

	return (
		<div className="col" style={{ paddingRight: '28px' }}>
			<div className="wd-button-group">
				<button className="btn btn-light" style={{ marginRight: '5px' }}>
					<FontAwesomeIcon icon={faPlus} /> Group
				</button>
				<div className="btn-group" role="group">
					<button className="btn btn-danger">
						<FontAwesomeIcon icon={faPlus} /> Assignment
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				</div>
			</div>
			<br className="mt-3" />
			<hr />

			<div className="accordion">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button bg-light" type="button">
							<div className="row" style={{ width: '100%' }}>
								<div className="col">
									<span>ASSIGNMENTS</span>
								</div>
								<div className="col-auto">
									<span className="badge rounded-pill text-bg-light" style={{ border: '1px solid black', marginRight: '10px' }}>
										40% of total
									</span>
								</div>
							</div>
						</button>
					</h2>
					<div className="accordion-collapse collapse show">
						<div className="accordion-body" style={{ padding: '0' }}>
							<ul className="list-group list-group-flush">
								{courseAssignments.map((assignment) => (
									<Link key={assignment._id} to={`/kanbas/courses/${courseId}/assignments/${assignment._id}`}>
										<li className="list-group-item wd-list-item">
											<div className="wd-list-container">
												<div className="row align-items-center">
													<div className="col-auto">
														<FontAwesomeIcon icon={faGripVertical} />
													</div>
													<div className="col-auto">
														<FontAwesomeIcon icon={faPenToSquare} color="green" />
													</div>
													<div className="col">
														<b>
															<a href="./edit.html">{assignment.title}</a>
														</b>

														<br />
														<span>More Modules | Due: Yesterday | 1000 points</span>
													</div>
													<div className="col-auto">
														<FontAwesomeIcon icon={faCircleCheck} />
													</div>
													<div className="col-auto">
														<FontAwesomeIcon icon={faEllipsisVertical} />
													</div>
												</div>
											</div>
										</li>
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Assignments;
