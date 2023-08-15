import React from "react";
import { useSelector } from "react-redux";
import DataFromApi from "../DataFromApi";
import millify from "millify";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";

const EstateDetails = () => {
  // getting state of the details of the estate clicked
  const estateDetails = useSelector((state) => state.estateDetails);

  const fixedArea = estateDetails.area.toFixed(1);

  return (
    <>
      <DataFromApi />
      <div>
        <div className="flex flex-col items-center">
          <div className="w-[18rem] mt-8 md:w-[35rem] lg:w-[40rem]">
            <img src={estateDetails.photo} alt="estate image" />
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex mt-2 font-bold text-xl">
              <GoVerified className="text-green-500" />
              <span className="ml-3 text-base">
                AED {millify(estateDetails.price)}
                {estateDetails.forRent ? "/monthly" : ""}
              </span>
            </div>
            <div className="flex mt-1  text-sm text-blue-500">
              <FaBed /> <span className="mx-3">{estateDetails.rooms}</span>|
              <div className="flex mx-3 text-blue-500">
                <FaBath />
                <span className="mx-3">{estateDetails.baths}</span>
              </div>
              |
              <div className="flex mx-2 text-blue-500">
                <BsGridFill />
                <span className="mx-3">{fixedArea}sqft</span>
              </div>
            </div>
          </div>
        </div>
        <div>Contact Name: {estateDetails.contactName}</div>
        <div>Purpose: {estateDetails.purpose}</div>
        <div>{estateDetails.amenities}</div>
      </div>
    </>
  );
};

export default EstateDetails;
