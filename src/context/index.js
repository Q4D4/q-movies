import { createContext, useReducer, useContext } from 'react';
// REDUCERS
import { AppReducer } from './reducers';

// CONTEXTS
const AppStateContext = createContext();
const AppDispatchContext = createContext();
// SET DISPLAYNAME
AppStateContext.displayName = 'AppStateContext';
AppDispatchContext.displayName = 'AppDispatchContext';

// DEFAULT STATE FOR APP CONTEXT
const defaultState = {
	count: 0,
	pages: {
		home: {

		}
	},
}

// APP CONTEXT PROVIDER
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, defaultState);
	return (
		<AppStateContext.Provider value={ state }>
			<AppDispatchContext.Provider value={ dispatch }>
				{ children }
			</AppDispatchContext.Provider>
		</AppStateContext.Provider>
	);
}

// CUSTOM HOOKS
const useAppState = () => {
	const context = useContext(AppStateContext);
	if (context === undefined) {
		throw new Error('useAppState must be used within a AppProvider')
	}
	return context
}

const useAppDispatch = () => {
	const context = useContext(AppDispatchContext);
	if (context === undefined) {
		throw new Error('useAppDispatch must be used within a AppProvider')
	}
	return context
}

export { AppProvider, useAppState, useAppDispatch };