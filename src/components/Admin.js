import React from "react";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  render() {
    return (
      <div className="user">
        <h1>This is the ADMIN component.</h1>
        <button onClick={this.fetchUser}>Feeling Lucky</button>
      </div>
    );
  }
}

export default Admin;
