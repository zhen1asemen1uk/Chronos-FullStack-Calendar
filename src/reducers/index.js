import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { monthReducer } from './monthReducer/monthReducer';
import { eventReducer } from './eventReducer/eventReducer';
import { authReducer } from './authReducer/authReducer';

const rootReducer = combineReducers({
	monthState: monthReducer,
	eventState: eventReducer,
	authState: authReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
