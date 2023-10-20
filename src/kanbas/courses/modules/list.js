import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../../db';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsisVertical, faPlus, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ModuleList() {
	const { courseId } = useParams();
	const modules = db.modules;

	return (
		<div>
			<div className="wd-button-group">
				<button className="btn btn-light">Collapse All</button>
				<button className="btn btn-light">View Progress</button>
				<select className="btn btn-light">
					<option value="Retract">Retract</option>
					<option value="Draft">Save Draft</option>
					<option selected value="Publish">
						Publish All
					</option>
				</select>
				<div className="btn-group" role="group">
					<button className="btn btn-danger">
						<FontAwesomeIcon icon={faPlus} /> Module
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</button>
				</div>
			</div>
			<br className="mt-3" />
			<hr />

			<div className="accordion">
				{modules
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<div key={index} className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button bg-light" type="button">
									<span>{module.name}</span>
								</button>
							</h2>
							<div className="accordion-collapse collapse show">
								<div className="accordion-body" style={{ padding: 0 }}>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<div className="wd-list-container">
												<span> LEARNING OBJECTIVES </span>
												<span className="wd-right">
													<FontAwesomeIcon className="check-icon" icon={faCircleCheck} />{' '}
													<FontAwesomeIcon icon={faEllipsisVertical} />
												</span>
											</div>
										</li>
										<li className="list-group-item wd-list-indent">
											<div className="wd-list-container">
												<a href="#">
													Creating a React application <FontAwesomeIcon icon={faUpRightFromSquare} />
												</a>
												<span className="wd-right">
													<FontAwesomeIcon className="check-icon" icon={faCircleCheck} />{' '}
													<FontAwesomeIcon icon={faEllipsisVertical} />
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default ModuleList;
