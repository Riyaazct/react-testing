import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    // RENDER THE COMPONENT TO THE DOM
    render(<Application />);

    // TEXT INPUT ELEMENT
    const nameElement = screen.getByRole("textbox", {
      name: "Name", // if there is more than one input element, you access the label associated with the element and use the text content (in this case) of the label element
    });
    expect(nameElement).toBeInTheDocument();

    // TEXT AREA ELEMENT
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

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
