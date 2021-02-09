// ACTION TYPES
import { APP_CONTEXT_ACTION_TYPES } from './types';


const AppReducer = (state, action) => {
	switch (action.type) {
		case APP_CONTEXT_ACTION_TYPES.INCREMENT: {
			return {...state, count: state.count + 1}
		}
		case APP_CONTEXT_ACTION_TYPES.DECREMENT: {
			return {...state, count: state.count - 1}
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

export { AppReducer };