import React from "react";
import "./App.css";
import { Link, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink to="/" exact activeClassName="activeNavButton">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="activeNavButton">
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="activeNavButton">
              Sign Up
            </NavLink>
          </li>
        </ul>

        {/* <h3>
          Don't have a cow, man! <Link to="/login">Login</Link>
        </h3>
        <h3>
          Not Registered? Aw, Geez! Register <Link to="/register">Here</Link>
        </h3> */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
