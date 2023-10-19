import { Link, useParams, useLocation } from 'react-router-dom';
import './index.css';

function CourseNavigation() {
	const links = [
		'Home',
		'Modules',
		'Piazza',
		'Zoom Meetings',
		'Assignments',
		'Quizzes',
		'Grades',
		'People',
		'Panopto Video',
		'Discussions',
		'Announcements',
		'Pages',
		'Files',
		'Rubrics',
		'Outcomes',
		'Collaborations',
		'Syllabus',
		'Settings'
	];

	const { courseId } = useParams();
	const { pathname } = useLocation();

	return (
		<div className="wd-menu" style={{ width: 150 }}>
			{links.map((link, index) => (
				<div key={index} className={`${pathname.includes(link.toLowerCase()) && 'selected'}`}>
					<Link to={`/kanbas/courses/${courseId}/${link.toLowerCase()}`}>{link}</Link>
				</div>
			))}
		</div>
	);
}

export default CourseNavigation;
