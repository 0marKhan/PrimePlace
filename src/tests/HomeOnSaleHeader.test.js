// Import necessary testing libraries and the component to be tested
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeOnSaleHeader from "../components/HomeOnSaleHeader";

test("renders HomeOnSaleHeader component correctly", () => {
  // Render the HomeOnSaleHeader component wrapped with MemoryRouter
  const { getByText } = render(
    <MemoryRouter>
      <HomeOnSaleHeader />
    </MemoryRouter>
  );

  // Make assertions about the rendered content
  expect(getByText("BUY A HOME")).toBeInTheDocument();
  expect(getByText("Buy the best home of your dreams")).toBeInTheDocument();
  expect(
    getByText("Explore Villas, Homes, Apartments and more")
  ).toBeInTheDocument();
  expect(getByText("view more")).toBeInTheDocument();
});
