import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowUpFromBracket,
	faBook,
	faCalendarDays,
	faCircleQuestion,
	faCircleUser,
	faClockRotateLeft,
	faEnvelopeOpenText,
	faGauge,
	faPersonChalkboard
} from '@fortawesome/free-solid-svg-icons';

function KanbasNavigation() {
	const links = ['Account', 'Dashboard', 'Courses', 'Calendar', 'Inbox', 'History', 'Studio', 'Commons', 'Help'];
	const icons = [
		faCircleUser,
		faGauge,
		faBook,
		faCalendarDays,
		faEnvelopeOpenText,
		faClockRotateLeft,
		faPersonChalkboard,
		faArrowUpFromBracket,
		faCircleQuestion
	];

	const { pathname } = useLocation();

	return (
		<div className="wd-sidebar">
			<div>
				<h1>RR</h1>
			</div>
			{links.map((link, index) => (
				<div key={index} className={`${pathname.includes(link.toLowerCase()) && 'selected'}`}>
					<Link to={`/kanbas/${link.toLowerCase()}`} className={`list-group-item a`}>
						<FontAwesomeIcon className={'i'} size="2xl" icon={icons[index]} />
						<br />
						{link}
					</Link>
				</div>
			))}
		</div>
	);
}

export default KanbasNavigation;
