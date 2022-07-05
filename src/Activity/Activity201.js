import React, { Component } from "react";

class Activity201 extends Component {
  constructor(props) {
    super(props);
    this.state = { field: "", submitDisabled: true };
  }
  updateFieldLength = (event) => {
    const field = event.target.value;
    this.setState({ field }, () => {
      this.validateFieldLength();
    });
  };
  validateFieldLength() {
    if (this.state.submitDisabled && this.state.field.length > 100) {
      this.setState({ submitDisabled: false });
    } else if (!this.state.submitDisabled && this.state.field.length <= 100) {
      this.setState({ submitDisabled: true });
    }
  }
  displayCharLen() {
    return <p>{`${this.state.field.length} character(s)!`}</p>;
  }
  SubmitPost = (event) => {
    alert("Submiting the blog post");
  };
  render() {
    return (
      <div>
        <h2>Blog Post Writer</h2>
        <hr />
        <strong>Write your post here</strong>
        <br />
        <small>Must be at least 100 characters!</small>
        <br />
        <textarea
          cols={100}
          rows={30}
          onChange={this.updateFieldLength}
        ></textarea>
        {this.displayCharLen()}
        <br />
        <button disabled={this.state.submitDisabled} onClick={this.SubmitPost}>
          Submit Post
        </button>
      </div>
    );
  }
}

export default Activity201;
