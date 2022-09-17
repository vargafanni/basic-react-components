import React from "react";
import { getByText, render, screen } from "@testing-library/react";

import Button from "./Button";
import EColors from "../EColors";

describe("Button", () => {
    test("renders the Button component", () => {
        const button =render(<Button />);
        const span = button.getByRole("button");
        expect(span).toBeTruthy();
      });
  test("renders the Button component with text", () => {
    const button = render(<Button text="Hello world!" />);
    const text = button.getByText("Hello world!");
    expect(text).toBeTruthy();
  });
  test("renders the Button component with color", () => {
    const button =render(<Button colorShema={EColors.RED}/>);
    const buttonElement = button.getByRole("button");
    expect(buttonElement.classList.contains("red")).toBe(true);
  });
  test("renders the Button component with child", () => {
    const button =render(<Button text="Hello world!" ><span>Child</span></Button>);
    const span = button.getByText("Child");
    const text = button.queryByText("Hello world!");
    expect(text === null);
    expect(span).toBeTruthy();
  });
});