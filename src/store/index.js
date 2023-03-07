import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import global from "./global/reducer";

const rootReducer = combineReducers({ global });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
