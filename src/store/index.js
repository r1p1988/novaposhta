import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import global from "./global/reducer";

const rootReducer = combineReducers({ global });

export function saveToLocalStorage(store) {
  try {
    const serialisedState = JSON.stringify(store);
    localStorage.setItem("CMR", serialisedState);
  } catch (e) {
    // console.warn(e);
  }
}

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("CMR");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    // console.warn(e);
    return undefined;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // loadFromLocalStorage(),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

// store.subscribe(() =>
//   // (store.getState().global !== undefined ||
//   //   store.getState().global !== null ||
//   //   store.getState().global !== "") &&
//   saveToLocalStorage(store.getState().global.History)
// );
