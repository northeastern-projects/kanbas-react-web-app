import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModuleList from '../modules/list';
import './index.css';
import {
	faArrowUpFromBracket,
	faBan,
	faBell,
	faBullhorn,
	faCalendarDays,
	faChartSimple,
	faCircleCheck,
	faCrosshairs,
	faFileImport
} from '@fortawesome/free-solid-svg-icons';

function Home() {
	return (
		<div className="row">
			<div className="col">
				<ModuleList />
			</div>
			<div className="col-auto">
				<p>Course Status</p>
				<div className="btn-group" style={{ paddingRight: '15px' }}>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faBan} /> Unpublish
					</button>
					<button className="btn btn-success disabled">
						<FontAwesomeIcon icon={faCircleCheck} /> Published
					</button>
				</div>
				<br />
				<br />

				<div className="btn-group-vertical wd-text-left" style={{ width: '100%', paddingRight: '15px' }}>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faFileImport} /> Import existing content
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faArrowUpFromBracket} rotate={90} /> Import from Commons
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faCrosshairs} /> Choose home page
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faChartSimple} /> View course stream
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faBullhorn} /> New announcement
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faChartSimple} /> New Analytics
					</button>
					<button className="btn btn-light">
						<FontAwesomeIcon icon={faBell} /> View course notifications
					</button>
				</div>
				<br />
				<br />

				<div className="wd-todo">
					<div className="wd-todo-header" style={{ width: '100%' }}>
						<span style={{ fontSize: '16px' }}>Coming up</span>
						<span style={{ float: 'right', marginTop: '3px' }}>
							<FontAwesomeIcon icon={faCalendarDays} /> <a href="">View Calendar</a>
						</span>
					</div>
					<hr />

					<div className="row">
						<div className="col-auto">
							<FontAwesomeIcon icon={faCalendarDays} />
						</div>
						<div className="col-auto">
							<a href="">Lecture</a>
							<br />
							<span>CS4550.12631.202410</span>
							<br />
							<span>Sep 7 at 11:45 AM</span>
						</div>
					</div>
					<div className="row">
						<div className="col-auto">
							<FontAwesomeIcon icon={faCalendarDays} />
						</div>
						<div className="col-auto">
							<a href="">Lecture</a>
							<br />
							<span>CS4550.12631.202410</span>
							<br />
							<span>Sep 7 at 11:45 AM</span>
						</div>
					</div>
					<div className="row">
						<div className="col-auto">
							<FontAwesomeIcon icon={faCalendarDays} />
						</div>
						<div className="col-auto">
							<a href="">CS5610.06 SP23 Lecture</a>
							<br />
							<span>CS5610.06</span>
							<br />
							<span>Sep 11 at 6 PM</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
