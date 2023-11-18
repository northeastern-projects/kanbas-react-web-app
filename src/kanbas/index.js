import KanbasNavigation from './kanbas-navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './dashboard';
import Courses from './courses';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

function Kanbas() {
	const URL = 'https://kanbas-node-server-app-production-bcc9.up.railway.app/api/courses';
	const [courses, setCourses] = useState([]);

	const getAllCourses = async () => {
		try {
			const response = await axios.get(URL);
			setCourses(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllCourses();
	}, []);

	const [course, setCourse] = useState({
		name: 'New Course',
		number: 'New Number',
		startDate: '2023-09-10',
		endDate: '2023-12-15'
	});

	const addNewCourse = async () => {
		try {
			const response = await axios.post(URL, course);
			setCourses([...courses, response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteCourse = async (courseId) => {
		try {
			await axios.delete(`${URL}/${courseId}`);
			setCourses(courses.filter((course) => course._id !== courseId));
		} catch (error) {
			console.error(error);
		}
	};

	const updateCourse = async () => {
		try {
			await axios.put(`${URL}/${course._id}`, course);
			setCourses(
				courses.map((c) => {
					if (c._id === course._id) {
						return course;
					} else {
						return c;
					}
				})
			);
		} catch (error) {
			console.error(error);
		}
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
