import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FaqItem from "./FaqItem";
import { addFaqItem } from "../actions";

class Faq extends Component {
  static propTypes = {
    faq: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
      })
    ),
    addFaqItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      question: "",
      answer: ""
    };
  }

  onChangeQuestion(event) {
    this.setState({
      question: event.target.value
    });
  }

  onChangeAnswer(event) {
    this.setState({
      answer: event.target.value
    });
  }

  onSubmit(event) {
    this.props.addFaqItem(this.state.question, this.state.answer);
    this.setState({
      question: "",
      answer: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.faq.map((item, index) => (
            <FaqItem
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </ul>
        <form onSubmit={this.onSubmit}>
          <label>
            Question:
            <input
              name="question"
              type="text"
              value={this.state.question}
              onChange={this.onChangeQuestion}
            />
          </label>
          <label>
            Answer:
            <textarea
              name="answer"
              onChange={this.onChangeAnswer}
              value={this.state.answer}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    faq: state.faq
  }),
  { addFaqItem }
)(Faq);
