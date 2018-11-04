import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getFaqItems } from "../actions";

class FaqItemView extends Component {
  static propTypes = {
    faqItem: PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    this.props.getFaqItems();
  }

  onBack() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h2 className="question">{this.props.faqItem.question}</h2>
        <p>{this.props.faqItem.answer}</p>
        <button onClick={this.onBack}>Back</button>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    const index = parseInt(props.match.params.index, 10);
    return {
      faqItem: index < state.faq.length ? state.faq[index] : {}
    };
  },
  { getFaqItems }
)(FaqItemView);
