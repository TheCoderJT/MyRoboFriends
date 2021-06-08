import { combineReducers } from "redux";
import { searchRobots } from "../reducer-actions/searchInput/searchInputReducer.js";
import { requestRobots } from "../reducer-actions/getRobots/getRobotsReducer.js";

export const reducers = combineReducers({
  searchInput: searchRobots,
  getRobots: requestRobots,
});
