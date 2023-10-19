import { HashRouter, Route, Routes } from 'react-router-dom/dist';
import Labs from './labs';
import Kanbas from './kanbas';
import Home from './Home';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/kanbas/*" element={<Kanbas />} />
					<Route path="/labs/*" element={<Labs />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
