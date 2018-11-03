import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getFaqItems } from "../actions";

class FaqItemView extends Component {
  static propTypes = {
    faqItem: PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    }).isRequired
  };

  componentDidMount() {
    this.props.getFaqItems();
  }

  render() {
    return (
      <div>
        <h2 className="question">{this.props.faqItem.question}</h2>
        <p>{this.props.faqItem.answer}</p>
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
