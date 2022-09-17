import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import EColors from "../EColors";

describe("Button", () => {
  test("renders the Button component", () => {
    const button = render(<Button />);
    const span = button.getByRole("button");
    expect(span).toBeTruthy();
  });
  test("renders the Button component with text", () => {
    const button = render(<Button>Hello world!</Button>);
    const text = button.getByText("Hello world!");
    expect(text).toBeTruthy();
  });
  test("renders the Button component with color", () => {
    const button = render(<Button colorShema={EColors.RED} />);
    const buttonElement = button.getByRole("button");
    expect(buttonElement.classList.contains("red")).toBe(true);
  });
  test("renders the Button component with child", () => {
    const button = render(
      <Button>
        <span>Child</span>
      </Button>
    );
    const span = button.getByText("Child");
    expect(span).toBeTruthy();
  });
});
