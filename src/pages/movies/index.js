import { Fragment } from 'react';

const Movies = props => {
	return (
		<Fragment>
			{props.children}
			<h1>Movies</h1>
		</Fragment>
	);
}

export default Movies;