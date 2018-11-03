import React, { Component } from "react";
import FaqItem from "./components/FaqItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      faq: [
        {
          question: "What does the Plone Foundation do?",
          answer:
            "The mission of the Plone Foundation is to protect and promote Plone. The Foundation provides marketing assistance, awareness, and evangelism assistance to the Plone community. The Foundation also assists with development funding and coordination of funding for large feature implementations. In this way, our role is similar to the role of the Apache Software Foundation and its relationship with the Apache Project."
        },
        {
          question: "Why does Plone need a Foundation?",
          answer:
            "Plone has reached critical mass, with enterprise implementations and worldwide usage. The Foundation is able to speak for Plone, and provide strong and consistent advocacy for both the project and the community. The Plone Foundation also helps ensure a level playing field, to preserve what is good about Plone as new participants arrive."
        }
      ],
      question: "",
      answer: ""
    };
  }

  onDelete(index) {
    let faq = this.state.faq;
    faq.splice(index, 1);
    this.setState({
      faq
    });
  }

  onEdit(index, question, answer) {
    let faq = this.state.faq;
    faq[index] = {
      question,
      answer
    };
    this.setState({
      faq
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

  onSubmit(event) {
    this.setState({
      faq: [
        ...this.state.faq,
        {
          question: this.state.question,
          answer: this.state.answer
        }
      ],
      question: "",
      answer: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.faq.map((item, index) => (
            <FaqItem
              question={item.question}
              answer={item.answer}
              index={index}
              onDelete={this.onDelete}
              onEdit={this.onEdit}
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

export default App;
