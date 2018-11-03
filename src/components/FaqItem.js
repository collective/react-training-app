import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FaqItem.css";

class FaqItem extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <li className="faq-item">
        <h2 className="question">{this.props.question}</h2>
        {this.state.show && <p>{this.props.answer}</p>}
      </li>
    );
  }
}

export default FaqItem;
