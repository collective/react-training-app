import React, { Component } from "react";
import FaqItem from "./components/FaqItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      faq: [
        {
          question: "What does the Plone Foundation do?",
          answer: "The mission of the Plone Foundation is to protect and..."
        },
        {
          question: "Why does Plone need a Foundation?",
          answer: "Plone has reached critical mass, with enterprise..."
        }
      ]
    };
  }

  onDelete(index) {
    let faq = this.state.faq;
    faq.splice(index, 1);
    this.setState({
      faq
    });
  }

  render() {
    return (
      <ul>
        {this.state.faq.map((item, index) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            index={index}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default App;
