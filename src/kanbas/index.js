import KanbasNavigation from './kanbas-navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './dashboard';
import Courses from './courses';
import db from './db';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

function Kanbas() {
	const [courses, setCourses] = useState(db.courses);
	const [course, setCourse] = useState({
		name: 'New Course',
		number: 'New Number',
		startDate: '2023-09-10',
		endDate: '2023-12-15'
	});

	const addNewCourse = () => {
		setCourses([...courses, { ...course, _id: new Date().getTime() }]);
	};

	const deleteCourse = (courseId) => {
		setCourses(courses.filter((course) => course._id !== courseId));
	};

	const updateCourse = () => {
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				} else {
					return c;
				}
			})
		);
	};

	return (
		<Provider store={store}>
			<div className="row">
				<div className="col-auto">
					<KanbasNavigation />
				</div>
				<div className="col">
					<Routes>
						<Route path="/" element={<Navigate to="dashboard" />} />
						<Route path="account" element={<h1>Account</h1>} />
						<Route
							path="dashboard"
							element={
								<Dashboard
									courses={courses}
									course={course}
									setCourse={setCourse}
									addNewCourse={addNewCourse}
									deleteCourse={deleteCourse}
									updateCourse={updateCourse}
								/>
							}
						/>
						<Route path="courses/:courseId/*" element={<Courses courses={courses} />} />
					</Routes>
				</div>
			</div>
		</Provider>
	);
}

export default Kanbas;
