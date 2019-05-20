import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCHING_USER,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE
} from "../actions";

const initialState = {
  error: "",
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isRegistering: false,
  registeringError: "",
  loginError: "",
  id: "",
  username: "",
  password: "",
  role: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loginError: "",
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: "failed login",
        isLoggingIn: false
      };
    }
    case REGISTER_START: {
      return {
        ...state,
        registeringError: "",
        isRegistering: true
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        registeringError: "registration failed",
        isRegistering: false
      };
    }
    case FETCHING_USER: {
      return {
        ...state,
        error: ""
      };
    }
    case USER_FETCH_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        error: ""
      };
    }
    case USER_FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
