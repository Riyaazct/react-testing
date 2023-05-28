/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

/**
 * FIRST WRITTEN TEST
 * VIDEO #8 IN SERIES
 */

/*
import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
*/
