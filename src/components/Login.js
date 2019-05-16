import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/members");
    });
  };

  render() {
    return (
      <div className="login">
        <h1>Don't have a cow, man!</h1>
        {/* <h4>Enter your USERNAME and PASSWORD to Login</h4> */}
        <form onSubmit={this.login}>
          <input
            type="text"
            placeholder="Enter USERNAME here"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Enter PASSWORD here"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
