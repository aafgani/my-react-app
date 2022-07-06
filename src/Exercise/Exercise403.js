import React, { Component } from "react";

class Exercise403 extends Component {
  constructor(props) {
    super(props);
    // State will be messages: ["Hello World", "How are you"]
    this.state = { messages: [], loading: true };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          messages: ["Hello World", "How are    you?"],
          loading: false,
        }),
      10000 // 10 seconds
    );
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.messages && this.state.messages.length > 0) {
      return (
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={`msg-${index}`}>{msg}</li>
          ))}
        </ul>
      );
    } else {
      return <div>No messages!</div>;
    }
  }
}

export default Exercise403;
