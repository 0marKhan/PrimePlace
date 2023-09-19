import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SaleSearch from "../components/SaleSearch";

test("renders SaleSearch component correctly", () => {
  // Mock a callback function for onFilterSubmit
  const onFilterSubmitMock = jest.fn();

  // Render the SaleSearch component with the mock callback
  render(<SaleSearch onFilterSubmit={onFilterSubmitMock} />);

  // Find and click the search button
  const searchButton = screen.getByText("Search");
  fireEvent.click(searchButton);

  // Check if the callback function was called with the selected options
  expect(onFilterSubmitMock).toHaveBeenCalledWith(
    "default",
    "default",
    "default"
  );
});
