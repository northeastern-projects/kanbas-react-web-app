import { Link, Route, Routes } from 'react-router-dom/dist';
import A3 from './a3';

function Labs() {
	return (
		<div>
			<h1 style={{ paddingTop: '25px' }}>Labs</h1>
			<list class="list-group" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
				<li class="list-group-item">
					<a href="/labs/a1/index.html">Assignment 1</a>
				</li>
				<li class="list-group-item">
					<a href="/labs/a2/index.html">Assignment 2</a>
				</li>
				<li class="list-group-item">
					<Link to="/labs/a3">Assignment 3</Link>
				</li>
			</list>

			<Routes>
				<Route path="/labs/a3" element={<A3 />} />
			</Routes>
		</div>
	);
}
export default Labs;
