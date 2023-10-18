import { HashRouter } from 'react-router-dom/dist';
import Labs from './labs';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<div>
					<div class="container" style={{ paddingTop: '25px' }}>
						<h1>Web Development - Rahul Rao</h1>
						<list class="list-group" style={{ paddingTop: '25px' }}>
							<li class="list-group-item">
								<a href="/kanbas/home.html">Kanbas</a>
							</li>
						</list>
						<Labs />
					</div>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
