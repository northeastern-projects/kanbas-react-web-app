import { HashRouter, Route, Routes } from 'react-router-dom/dist';
import Labs from './labs';
import Kanbas from './kanbas';
import Home from './Home';
import Project from './project';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/*" element={<Project />} />
					<Route path="/kanbas/*" element={<Kanbas />} />
					<Route path="/labs/*" element={<Labs />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
