import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { calendarReducer } from "./calendarReducer/calendarReducer";



const rootReducer = combineReducers({
   calendarStore: calendarReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));