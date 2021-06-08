import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducer-actions/index.js";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
export const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));
console.log(store.getState());
