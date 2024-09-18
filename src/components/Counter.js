import { Component } from "react";
import React from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({ value: state.value + 1 }));
  }

  decrement() {
    this.setState((state) => ({ value: state.value - 1 }));
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("p", null, `Value: ${this.state.value}`),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}
