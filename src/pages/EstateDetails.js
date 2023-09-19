import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DataFromApi from "../DataFromApi";
import millify from "millify";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import Amenities from "../components/Amenities";

const EstateDetails = () => {
  // to ensure the page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // getting state of the details of the estate clicked
  const estateDetails = useSelector((state) => state.estateDetails);

  const fixedArea = estateDetails.area.toFixed(1);

  return (
    <>
      <DataFromApi />
      <div className=" mb-20">
        <div className="flex flex-col items-center">
          <div className="w-[18rem] mt-8 md:w-[35rem] lg:w-[40rem]">
            <img src={estateDetails.photo} alt={estateDetails.title} />
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
            <div className="flex mt-1 text-sm text-blue-500">
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
        <div className="mt-8 mx-10 md:mx-36 lg:mx-60">
          <div className="font-semibold mb-5">{estateDetails.title}</div>
          <div className="text-sm mb-1">
            <span className="  text-gray-500">CONTACT NAME</span>
            <span className="ml-3 font-semibold">
              {typeof estateDetails.contactName === "string"
                ? estateDetails.contactName.toLocaleUpperCase()
                : estateDetails.contactName}
            </span>
          </div>
          <div className="text-sm mb-1">
            <span className="  text-gray-500">PURPOSE</span>
            <span className=" ml-3 font-semibold">
              {typeof estateDetails.purpose === "string"
                ? estateDetails.purpose.toLocaleUpperCase()
                : estateDetails.purpose}
            </span>
          </div>
          <div className="text-sm mb-5">
            <span className="  text-gray-500">FURNISHING STATUS</span>
            <span className=" ml-3 font-semibold">
              {typeof estateDetails.furnishingStatus === "string"
                ? estateDetails.furnishingStatus.toLocaleUpperCase()
                : estateDetails.furnishingStatus}
            </span>
          </div>
          <div data-testid="amenities-component">
            <Amenities amenities={estateDetails.amenities} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
