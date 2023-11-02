import { Route, Routes } from 'react-router-dom/dist';
import A3 from './a3';
import A4 from './a4';
import { Provider } from 'react-redux';
import store from './store';

function Labs() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="a3/*" element={<A3 />} />
				<Route path="a4/*" element={<A4 />} />
			</Routes>
		</Provider>
	);
}
export default Labs;
