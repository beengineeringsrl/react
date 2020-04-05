import React from "react";
import { mount } from "enzyme";
import ChartBar from "./ChartBar";

jest.mock("react-chartjs-2", () => ({
  Line: () => null
}));

describe("ChartBar component", () => {
  let wrapper;
  const prop = {
    labelData: ["27/10/2019"],
    bmiData: ["16.14"]
  };

  beforeEach(() => {
    wrapper = mount(<ChartBar {...prop} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();

    console.log(wrapper.debug());
  });
});
