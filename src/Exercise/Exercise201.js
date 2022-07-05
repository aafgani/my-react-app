import React, { Component } from "react";

class Exercise201 extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      errors: [],
    };
  }
  submitForm() {}
  displayForm() {
    return (
      <div>
        Username: <input type="text" />
        <br />
        Password: <input type="text" />
        <br />
        Password Confirmation: <input type="text" />
        <br />
        Email: <input type="text" />
        <br />
        <br />
        <button onClick={this.submitForm()}>Submit</button>{" "}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        Create Account
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

export default Exercise201;
