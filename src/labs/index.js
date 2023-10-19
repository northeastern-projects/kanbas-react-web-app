import { Route, Routes } from 'react-router-dom/dist';
import A3 from './a3';

function Labs() {
	return (
		<Routes>
			<Route path="a3/*" element={<A3 />} />
		</Routes>
	);
}
export default Labs;
