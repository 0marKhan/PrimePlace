import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RentAHomeHeader = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-6 w-72 md:w-80">
        <div className=" text-base text-gray-500 ">RENT A HOME</div>
        <div className="font-semibold text-xl">
          Rent the best homes for your needs
        </div>
        <div className="text-base text-gray-500 ">
          Explore Villas, Homes, Apartments and more
        </div>
        <Link className="flex justify-center mt-3" to="rent-homes">
          <Button variant="outlined">view more</Button>
        </Link>
      </div>
    </div>
  );
};

export default RentAHomeHeader;
