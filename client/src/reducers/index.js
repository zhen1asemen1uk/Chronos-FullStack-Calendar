import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { monthReducer } from "./monthReducer/monthReducer";



const rootReducer = combineReducers({
   monthStore: monthReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));