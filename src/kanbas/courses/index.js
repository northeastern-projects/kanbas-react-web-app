import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import CourseNavigation from './course-navigation';
import Modules from './modules';
import Home from './home';
import Assignments from './assignments';
import AssignmentEditor from './assignments/editor';
import Grades from './grades';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
	const { courseId } = useParams();
	const { pathname } = useLocation();

	const URL = 'http://localhost:4000/api/courses';

	const [course, setCourse] = useState({});

	const findCourseByID = async () => {
		try {
			const response = await axios.get(`${URL}/${courseId}`);
			setCourse(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		findCourseByID(courseId);
	}, [courseId]);

	return (
		<div>
			<div className="wd-top-bar">
				<FontAwesomeIcon icon={faBars} />
				<h4 style={{ marginLeft: '25px', textTransform: 'capitalize' }}>
					{course.name} {'>'} {pathname.split('/')[4]}
				</h4>
				<div className="wd-top-bar-right">
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faBookOpenReader} /> Student view
					</button>
				</div>
			</div>
			<hr />

			<div className="row">
				<div className="col-auto">
					<CourseNavigation />
				</div>
				<div className="col">
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="home" element={<Home />} />
						<Route path="modules" element={<Modules />} />
						<Route path="assignments" element={<Assignments />} />
						<Route path="assignments/:assignmentId" element={<AssignmentEditor />} />
						<Route path="grades" element={<Grades />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
