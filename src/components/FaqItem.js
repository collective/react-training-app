import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FaqItem.css";

class FaqItem extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  render() {
    return (
      <li className="faq-item">
        <h2 className="question">{this.props.question}</h2>
        <p>{this.props.answer}</p>
      </li>
    );
  }
}

export default FaqItem;
