import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomeOnSaleHeader = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-10 w-72 md:w-80">
        <div className=" text-base text-gray-500 ">BUY A HOME</div>
        <div className="font-semibold text-xl">
          Buy the best home of your dreams
        </div>
        <div className="text-base text-gray-500 ">
          Explore Villas, Homes, Apartments and more
        </div>
        <Link className="flex justify-center mt-3" to="sale-homes">
          <Button variant="outlined">view more</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeOnSaleHeader;
