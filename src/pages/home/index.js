import { Fragment } from 'react';

const Home = props => {
	return (
		<Fragment>
			{props.children}
			<h1>home</h1>
		</Fragment>
	);
}

export default Home;