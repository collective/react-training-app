import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FaqItem.css";

class FaqItem extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      show: false
    };
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  onDelete() {
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <li className="faq-item">
        <h2 onClick={this.toggle} className="question">
          {this.props.question}
        </h2>
        {this.state.show && <p>{this.props.answer}</p>}
        <button onClick={this.onDelete}>Delete</button>
      </li>
    );
  }
}

export default FaqItem;
