import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../../constants/constants.js";

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
    .catch((e) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e }));
};