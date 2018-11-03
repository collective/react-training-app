import React, { Component } from "react";
import FaqItem from "./components/FaqItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <ul>
        {this.state.faq.map(item => (
          <FaqItem question={item.question} answer={item.answer} />
        ))}
      </ul>
    );
  }
}

export default App;
