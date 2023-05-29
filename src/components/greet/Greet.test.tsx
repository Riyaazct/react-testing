import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

/*
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

/* test suite */
describe("Greet", () => {
  /* Tests */
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="Riyaaz" />);
    const textElement = screen.getByText("Hello Riyaaz");
    expect(textElement).toBeInTheDocument();
  });
});
