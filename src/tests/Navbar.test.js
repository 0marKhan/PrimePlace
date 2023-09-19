import React from "react";
import { render } from "@testing-library/react";

import Navbar from "../layout/Navbar";
import { MemoryRouter } from "react-router-dom";

test("Navbar renders correctly", () => {
  // Render the Navbar component inside a MemoryRouter to provide routing context
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Use getByText to query for the rendered text content
  const navbarText = getByText("PrimePlace");

  // Assert that the text content is present in the rendered output
  expect(navbarText).toBeInTheDocument();
});
