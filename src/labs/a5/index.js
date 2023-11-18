import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithArrays from './WorkingWithArrays';
import WorkingWithObjects from './WorkingWithObjects';

function A5() {
	return (
		<div className="container">
			<h1>Assignment 5</h1>
			<WorkingWithArrays />
			<hr />
			<WorkingWithObjects />
			<hr />
			<EncodingParametersInURLs />
			<hr />
			<div className="list-group">
				<a href="http://localhost:4000/a5/welcome" className="list-group-item">
					Welcome
				</a>
			</div>
		</div>
	);
}

export default A5;
