import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import global from "./global/reducer";

const rootReducer = combineReducers({ global });

export function saveToLocalStorage(store) {
  try {
    const serialisedState = JSON.stringify(store);
    localStorage.setItem("CMR", serialisedState);
  } catch (e) {}
}

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("CMR");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    return undefined;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
