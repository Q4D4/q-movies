import { Fragment, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// METADATA
import { home, movies, series } from './meta';

// CONTEXT
import { useAppDispatch, useAppState } from './context';
import { APP_CONTEXT_ACTION_TYPES } from './context/types';

// COMPONENTS
import Nav from './components/nav';

// PAGES
import Home from './pages/home';
import Movies from './pages/movies';
import Series from './pages/series';

const App = () => {
	// State of component
	const [isMobile, setIsMobile] = useState();
	// Context (global state)
	const AppState = useAppState();
	const AppDispatch = useAppDispatch();
	// Media query
	const mediaQueryList = window.matchMedia('(min-width: 1010px)');

	// Media query listener
	const queryListener = sizes => {
		if (sizes.matches) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	}

	// Lifecycle method
	useEffect(() => {
		// Run listener for a first time
		queryListener(mediaQueryList);
		// Add media query listener
		mediaQueryList.addListener(queryListener);

		// Cleanup
		return () => {
			mediaQueryList.removeListener(queryListener);
		}
	}, []);


	return (
		<Fragment>
			<Nav isMobile={isMobile} />

			<main>
				<Switch>
					<Route exact path='/'>
						<Home>
							<Helmet>
								<title>{home.title}</title>
							</Helmet>
						</Home>
					</Route>
					<Route exact path='/movies'>
						<Movies>
							<Helmet>
								<title>{movies.title}</title>
							</Helmet>
						</Movies>
					</Route>
					<Route exact path='/series'>
						<Series>
							<Helmet>
								<title>{series.title}</title>
							</Helmet>
						</Series>
					</Route>
				</Switch>
			</main>

			{/*<button onClick={() => AppDispatch({type: APP_CONTEXT_ACTION_TYPES.INCREMENT})}>Increment</button>
			<button onClick={() => AppDispatch({type: APP_CONTEXT_ACTION_TYPES.DECREMENT})}>Decrement</button>
			<p>value: {AppState.count}</p>*/}


		</Fragment>
	);
}

export default App;