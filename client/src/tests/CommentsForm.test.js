import React from "react";
import { shallow } from "enzyme";
import CommentsForm from "../components/CommentsForm";

describe("CommentsForm", () => {
  it("alters author name when input is changed", () => {
    let wrapper = shallow(<CommentsForm />);
    let input = wrapper.find("[name='author']");
    input.simulate("change", {
      preventDefault: () => {},
      target: { name: "author", value: "nathan" }
    });
    expect(wrapper.state().author).toEqual("nathan");
  });

  it("calls submit when form is submitted", () => {
    let func = jest.fn();
    let wrapper = shallow(<CommentsForm onSubmit={func} />);
    wrapper.simulate("submit", { preventDefault: () => {} });
    expect(func.mock.calls.length).toEqual(1);
  });
});
