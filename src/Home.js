import { Link } from 'react-router-dom/dist';

function Home() {
	return (
		<div className={'container'} style={{ paddingTop: '25px' }}>
			<h1>Web Development - Rahul Rao</h1>
			<list className={'list-group'} style={{ paddingTop: '25px' }}>
				<li className={'list-group-item'}>
					<a style={{ textDecoration: 'none', color: '#111' }} href="/kanbas/home.html">
						Kanbas Legacy
					</a>
				</li>
				<Link to="/kanbas" className={`list-group-item `}>
					Kanbas
				</Link>
				<li className={'list-group-item'}>
					<a style={{ textDecoration: 'none', color: '#111' }} href="/labs/a1/index.html">
						Assignment 1
					</a>
				</li>
				<li className={'list-group-item'}>
					<a style={{ textDecoration: 'none', color: '#111' }} href="/labs/a2/index.html">
						Assignment 2
					</a>
				</li>
				<Link to="/labs/a3" className={`list-group-item `}>
					Assignment 3
				</Link>
				<Link to="/labs/a4" className={`list-group-item `}>
					Assignment 4
				</Link>
			</list>
		</div>
	);
}

export default Home;
