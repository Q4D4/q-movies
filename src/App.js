import { Fragment, useEffect } from 'react';

import { useAppDispatch, useAppState } from './context';
import { APP_CONTEXT_ACTION_TYPES } from './context/types';

// COMPONENTS
import Nav from './components/nav';

// PAGES
import Home from './pages/home';

const App = () => {
	// Context (global state)
	const AppState = useAppState();
	const AppDispatch = useAppDispatch();
	// Media query
	const mediaQueryList = window.matchMedia('(min-width: 980px)');

	// Media query listener
	const queryListener = sizes => {
		if (sizes.matches) {
			console.log('big')
		} else {
			console.log('small')
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
			<Nav />
			
			<main>
			{/*<Home />*/}
			</main>

			{/*<button onClick={() => AppDispatch({type: APP_CONTEXT_ACTION_TYPES.INCREMENT})}>Increment</button>
			<button onClick={() => AppDispatch({type: APP_CONTEXT_ACTION_TYPES.DECREMENT})}>Decrement</button>
			<p>value: {AppState.count}</p>*/}


		</Fragment>
	);
}

export default App;