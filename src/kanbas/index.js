import KanbasNavigation from './kanbas-navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './dashboard';
import Courses from './courses';

function Kanbas() {
	return (
		<div className="row">
			<div className="col-auto">
				<KanbasNavigation />
			</div>
			<div className="col">
				<Routes>
					<Route path="/" element={<Navigate to="dashboard" />} />
					<Route path="account" element={<h1>Account</h1>} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="courses/:courseId/*" element={<Courses />} />
				</Routes>
			</div>
		</div>
	);
}

export default Kanbas;
