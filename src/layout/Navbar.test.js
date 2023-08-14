import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest's expect functionality
import Navbar from "./Navbar";

test("Navbar renders correctly", () => {
  // Render the Navbar component
  const { getByText } = render(<Navbar />);

  // Use getByText to query for the rendered text content
  const navbarText = getByText("PrimePlace");

  // Assert that the text content is present in the rendered output
  expect(navbarText).toBeInTheDocument();
});
