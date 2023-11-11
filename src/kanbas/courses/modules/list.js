import React from 'react';
import { useParams } from 'react-router-dom';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck, faEllipsisVertical, faPlus, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './reducer';

function ModuleList() {
	const modules = useSelector((state) => state.modulesReducer.modules);
	const module = useSelector((state) => state.modulesReducer.module);
	const dispatch = useDispatch();

	const { courseId } = useParams();

	return (
		<div>
			<div className="wd-button-group d-flex flex-row">
				<button className="btn btn-light">Collapse All</button>
				<button className="btn btn-light">View Progress</button>
				<select className="btn btn-light">
					<option value="Retract">Retract</option>
					<option value="Draft">Save Draft</option>
					<option selected value="Publish">
						Publish All
					</option>
				</select>
				<div className="d-flex flex-row">
					<input
						type="text"
						onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
						value={module.name}
						className="form-control"
						placeholder="Module Name"
						style={{ width: '200px', marginRight: '5px' }}
					/>
					<input
						type="text"
						onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
						value={module.description}
						className="form-control"
						placeholder="Module Description"
						style={{ width: '200px', marginRight: '5px' }}
					/>
					<div className="btn-group" role="group">
						<button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-danger">
							<FontAwesomeIcon icon={faPlus} /> Add
						</button>
						<button onClick={() => dispatch(updateModule(module))} className="btn btn-primary">
							<FontAwesomeIcon icon={faCheck} /> Update
						</button>
						<button className="btn btn-light">
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</button>
					</div>
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
								<div className="accordion-button bg-light d-flex flex-row">
									<span>{module.name}</span>
									<div style={{ position: 'absolute', right: '50px' }}>
										<button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
											Delete
										</button>
										<button className="btn btn-success" style={{ marginLeft: '5px' }} onClick={() => dispatch(setModule(module))}>
											Edit
										</button>
									</div>
								</div>
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
