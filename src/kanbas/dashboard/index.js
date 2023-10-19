import { Link } from 'react-router-dom';
import db from '../db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFilePen } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Dashboard() {
	const courses = db.courses;
	return (
		<div>
			<div className="wd-top-bar">
				<h4>Dashboard</h4>
			</div>
			<hr />

			<h4 className="mb-3">Published Courses ({courses.length})</h4>

			<div className="d-flex flex-row flex-wrap" style={{ maxWidth: '1200px' }}>
				{courses.map((course) => (
					<Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
						<div style={{ marginRight: '20px', marginBottom: '30px' }}>
							<div className="card" style={{ width: '270px' }}>
								<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG" className="card-img-top" alt="" />
								<FontAwesomeIcon icon={faEllipsisVertical} style={{ color: 'lightgray', position: 'absolute', top: '20px', right: '20px' }} />
								<div className="card-body">
									<b>
										<p className="card-title" style={{ color: 'blue', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
											{course.name}
										</p>
									</b>
									<p className="card-text mb-0">CS4550.12631.202410</p>
									<p className="card-text" style={{ color: 'gray', fontSize: '14px' }}>
										202410_1 Fall 2023 Semester Full Term
									</p>
									<FontAwesomeIcon icon={faFilePen} />
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
