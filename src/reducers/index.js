import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
  error: "",
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isRegistering: false,
  registeringError: "",
  loginError: ""
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
    default:
      return state;
  }
};

export default reducer;
