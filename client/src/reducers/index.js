import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { monthReducer } from "./monthReducer/monthReducer";
import { eventReducer } from "./eventReducer/eventReducer";
import { userReducer } from "./userReducer/userReducer";



const rootReducer = combineReducers({
   monthStore: monthReducer,
   eventStore: eventReducer,
   userStore: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));