import db from '../db';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseNavigation from './course-navigation';

function Courses() {
	const { courseId } = useParams();
	const { pathname } = useLocation();
	const course = db.courses.find((course) => course._id === courseId);

	return (
		<div>
			<div className="wd-top-bar">
				<FontAwesomeIcon icon={faBars} />
				<h4 style={{ marginLeft: '25px', textTransform: 'capitalize' }}>
					{course.name} {'>'} {pathname.split('/')[4]}
				</h4>
				{/* <div className="wd-top-bar-right">
					<button className="btn btn-light">
						<i className="fas fa-book-open-reader"></i> Student view
					</button>
				</div> */}
			</div>
			<hr />

			<div className="row">
				<div className="col-auto">
					<CourseNavigation />
				</div>
				<div className="col">
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="home" element={<h1>Home</h1>} />
						<Route path="modules" element={<h1>Modules</h1>} />
						<Route path="assignments" element={<h1>Assignments</h1>} />
						<Route path="assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
						<Route path="grades" element={<h1>Grades</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
