import React from "react";
import renderer from "react-test-renderer";

import FaqItem from "./FaqItem";

describe("FaqItem", () => {
  it("renders a FAQ item", () => {
    const component = renderer.create(
      <FaqItem
        question="What is the answer to life the universe and everything?"
        answer="42"
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
