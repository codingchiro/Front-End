import React from "react";
import { Route, Redirect } from "react-router-dom";

// Requirements:
// 1. Has to have the same API as <Route />
// 2. Has to render a <Route /> and pass all the props through it.
// 3. Has to check for a token, if user is authed, then render the
// component, otherwise redirect the user to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
