import React from "react";
import { render } from "@testing-library/react";
import Amenities from "../components/Amenities";

describe("Amenities Component", () => {
  it("renders a list of chips", () => {
    const amenities = ["Swimming Pool", "Gym", "Parking"];

    const { getByText } = render(<Amenities amenities={amenities} />);

    // Check if each amenity chip is rendered
    amenities.forEach((amenity) => {
      const chip = getByText(amenity);
      expect(chip).toBeInTheDocument();
    });
  });

  it("matches snapshot", () => {
    const amenities = ["Swimming Pool", "Gym", "Parking"];

    const { container } = render(<Amenities amenities={amenities} />);

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
