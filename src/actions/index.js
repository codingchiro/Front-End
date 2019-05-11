import axios from "axios";

export const LOGIN_START = "LOGIN_START"; // these are action types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://simpson-says-backend.herokuapp.com/api/register", creds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// this is the action creator
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://simpson-says-backend.herokuapp.com/api/Login", creds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
