import { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  increment = () => {
    this.setState((state) => ({ value: state.value + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ value: state.value - 1 }));
  };

  render() {
    return React.createElement(
      "div",
      { "data-testid": "counter" },
      React.createElement("p", null, `Value: ${this.state.value}`),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  initialValue: 0,
};
