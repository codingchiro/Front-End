import React from "react";
import PrivateRoute from "./PrivateRoute";
import Admin from "./Admin";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Members Only Area</h1>
        {/* <h3>What does a Simpson say?</h3> */}
        <h1 className="cowabunga">"Cowabunga!"</h1>
        <Link to="/members/admin">
          <button>Click here</button>
        </Link>
        <span className="admin-span"> to go to Administration page.</span>
      </div>
    );
  }
}

export default Home;
