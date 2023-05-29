import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    // RENDER THE COMPONENT TO THE DOM
    render(<Application />);

    // TEXT INPUT ELEMENT
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    // SELECT ELEMENT
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // CHECKBOX ELEMENT
    const termsAndConditionsElement = screen.getByRole("checkbox");
    expect(termsAndConditionsElement).toBeInTheDocument();

    // BUTTON ELEMENT
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
