import axios from "axios";
import axiosWithAuth from "../utilities/axiosAuth";

export const LOGIN_START = "LOGIN_START"; // these are action types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FETCHING_USER = "FETCHING_USER";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAILURE = "USER_FETCH_FAILURE";

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
  return axios
    .post("https://simpson-says-backend.herokuapp.com/api/Login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};

export const fetchUser = () => dispatch => {
  dispatch({ type: FETCHING_USER });
  return axios
    .get("https://simpson-says-backend.herokuapp.com/api/admin/users")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
