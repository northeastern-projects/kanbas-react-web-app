import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
	return (
		<div>
			<div className="wd-top-bar">
				<h4>Dashboard</h4>
			</div>
			<hr />

			<div className="d-flex flex-row justify-content-between">
				<h4 className="mb-3">Published Courses ({courses.length})</h4>
				<div className="d-flex flex-row">
					<input
						type="text"
						className="form-control"
						value={course.name}
						onClick={(e) => e.preventDefault()}
						onChange={(e) => setCourse({ ...course, name: e.target.value })}
						style={{ width: '200px', marginRight: '5px' }}
						placeholder="Course Name"
					/>
					<input
						type="text"
						className="form-control"
						value={course.number}
						onClick={(e) => e.preventDefault()}
						onChange={(e) => setCourse({ ...course, number: e.target.value })}
						style={{ width: '200px', marginRight: '5px' }}
						placeholder="Course Number"
					/>
					<div className="input-group" style={{ width: '250px', marginRight: '5px' }}>
						<span className="input-group-text">Start:</span>
						<input
							type="date"
							className="form-control"
							value={course.startDate}
							onClick={(e) => e.preventDefault()}
							onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
							placeholder="Start Date"
						/>
					</div>
					<div className="input-group" style={{ width: '250px', marginRight: '5px' }}>
						<span className="input-group-text">End: </span>
						<input
							type="date"
							className="form-control"
							value={course.endDate}
							onClick={(e) => e.preventDefault()}
							onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
							placeholder="End Date"
						/>
					</div>
					<button className="btn btn-success" onClick={addNewCourse} style={{ marginRight: '5px' }}>
						Add
					</button>
					<button className="btn btn-primary" onClick={updateCourse}>
						Update
					</button>
				</div>
			</div>

			<div className="d-flex flex-row flex-wrap mt-3" style={{ maxWidth: '1200px' }}>
				{courses.map((c) => (
					<Link key={c._id} to={`/Kanbas/Courses/${c._id}`}>
						<div style={{ marginRight: '20px', marginBottom: '30px' }}>
							<div className="card" style={{ width: '270px' }}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG" className="card-img-top" alt="" />
								<FontAwesomeIcon icon={faEllipsisVertical} style={{ color: 'lightgray', position: 'absolute', top: '20px', right: '20px' }} />
								<div className="card-body">
									<b>
										<p className="card-title" style={{ color: 'blue', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
											{c.name}
										</p>
									</b>
									<p className="card-text mb-2">{c.number}</p>
									<p className="card-text" style={{ color: 'gray', fontSize: '14px' }}>
										Start: {c.startDate}
										<br />
										End: {c.endDate}
									</p>
									<FontAwesomeIcon
										onClick={(e) => {
											e.preventDefault();
											setCourse(c);
										}}
										icon={faFilePen}
										style={{ marginRight: '10px' }}
									/>
									<FontAwesomeIcon
										onClick={(e) => {
											e.preventDefault();
											deleteCourse(c._id);
										}}
										icon={faTrash}
									/>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Dashboard;
