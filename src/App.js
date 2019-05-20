import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

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
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <h1 className="animated logo">Simpson Says</h1>
            </div>

            <nav>
              <a href="https://codingchiro.github.io/Simpson-Says/index.html">
                Home
              </a>
              <Link to="login">Login In</Link>
              <a href="https://codingchiro.github.io/Simpson-Says/aboutus.html">
                About Us
              </a>
              <Link to="/register">Sign Up</Link>
            </nav>
            {/* <!-- end nav --> */}
          </div>
          {/* <!-- end nav-content--> */}
        </div>
        {/* <!-- end nav-container --> */}
        {/* <ul className="navbar">
          <li>
            <NavLink to="/members" exact activeClassName="activeNavButton">
              Members Only
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
        </ul> */}

        {/* <h3>
          Don't have a cow, man! <Link to="/login">Login</Link>
        </h3>
        <h3>
          Not Registered? Aw, Geez! Register <Link to="/register">Here</Link>
        </h3> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/members" component={Home} />
        <PrivateRoute path="/members/admin" component={Admin} />
        <Footer />
      </div>
    );
  }
}

export default App;
