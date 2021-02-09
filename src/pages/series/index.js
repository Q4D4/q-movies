import { Fragment } from 'react';

const Series = props => {
	return (
		<Fragment>
			{props.children}
			<h1>Series</h1>
		</Fragment>
	);
}

export default Series;