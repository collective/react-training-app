import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FaqItem.css";

class FaqItem extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      show: false,
      mode: "view",
      question: "",
      answer: ""
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

  onEdit() {
    this.setState({
      mode: "edit",
      question: this.props.question,
      answer: this.props.answer
    });
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

  onSave(event) {
    this.setState({
      mode: "view"
    });
    this.props.onEdit(this.props.index, this.state.question, this.state.answer);
    event.preventDefault();
  }

  render() {
    return this.state.mode === "edit" ? (
      <li className="faq-item">
        <form onSubmit={this.onSave}>
          <label>
            Question:
            <input
              name="question"
              value={this.state.question}
              onChange={this.onChangeQuestion}
            />
          </label>
          <label>
            Answer:
            <textarea
              name="answer"
              value={this.state.answer}
              onChange={this.onChangeAnswer}
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </li>
    ) : (
      <li className="faq-item">
        <h2 onClick={this.toggle} className="question">
          {this.props.question}
        </h2>
        {this.state.show && <p>{this.props.answer}</p>}
        <button onClick={this.onDelete}>Delete</button>
        <button onClick={this.onEdit}>Edit</button>
      </li>
    );
  }
}

export default FaqItem;
