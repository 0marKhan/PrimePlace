import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing
import { Button } from "@mui/material";
import RentAHomeHeader from "../components/RentAHomeHeader"; // Make sure to use the correct path to your component

test("renders RentAHomeHeader component correctly", () => {
  // Render the RentAHomeHeader component wrapped with MemoryRouter
  const { getByText } = render(
    <MemoryRouter>
      <RentAHomeHeader />
    </MemoryRouter>
  );

  // Make assertions about the rendered content
  expect(getByText("RENT A HOME")).toBeInTheDocument();
  expect(getByText("Rent the best homes for your needs")).toBeInTheDocument();
  expect(
    getByText("Explore Villas, Homes, Apartments and more")
  ).toBeInTheDocument();
  expect(getByText("view more")).toBeInTheDocument();
});
