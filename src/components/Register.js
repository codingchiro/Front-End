import React from "react";
import { connect } from "react-redux";
import { register } from "../actions";

class Register extends React.Component {
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

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Ay, caramba!</h1>
        <h4>Enter your USERNAME and PASSWORD to register</h4>
        <form onSubmit={this.register}>
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
          <button>Click here to register, Man!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(Register);
