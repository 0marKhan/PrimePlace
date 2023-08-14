import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest's expect functionality
import RentAHomeHeader from "./RentAHomeHeader";

test("RentAHomeHeader renders correctly", () => {
  // Render the RentAHomeHeader component
  const { getByText } = render(<RentAHomeHeader />);

  // Use getByText to query for the rendered text content
  const titleText = getByText("Rent the best homes for your needs");
  const subtitleText = getByText("Explore Villas, Homes, Apartments and more");

  // Assert that the text content is present in the rendered output
  expect(titleText).toBeInTheDocument();
  expect(subtitleText).toBeInTheDocument();
});
