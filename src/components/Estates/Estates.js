import React from "react";
import { useDispatch } from "react-redux";
import { estateActions } from "../../store/index";

import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { Link } from "react-router-dom";

const Estates = (props) => {
  // dispatch function that make actions in reducer run
  const dispatch = useDispatch();

  // handler function for copying estate details
  const setEstateDetailsHandler = () => {
    const estateDetails = {
      baths: props.baths,
      area: props.area,
      photo: props.photo,
      price: props.price,
      rooms: props.rooms,
      photoIDs: props.photoIDs,
      geo: props.geo,
      amenities: props.amenities,
      contactName: props.contactName,
      furnishingStatus: props.furnishingStatus,
      purpose: props.purpose,
      title: props.title,
    };
    dispatch(estateActions.setEstateDetails(estateDetails));
  };

  // setting area to one decimal place
  const fixedArea = props.area.toFixed(1);

  return (
    <div className="mt-2 mx-auto bg-white p-4 rounded-lg shadow-md w-[19rem]">
      <Link to="/estate-details" onClick={setEstateDetailsHandler}>
        <div>
          <img
            src={props.photo}
            alt="Estate"
            className=" w-[17rem] h-[12rem]"
          />
        </div>
        <div className="flex mt-2 font-bold text-xl">
          <GoVerified className="text-green-500" />
          <span className="ml-3 text-base">
            AED {millify(props.price)}
            {props.forRent ? "/monthly" : ""}
          </span>
        </div>
        <div className="flex mt-1 ml-3 text-sm text-blue-500">
          <FaBed /> <span className="mx-3">{props.rooms}</span>|
          <div className="flex mx-3 text-blue-500">
            <FaBath />
            <span className="mx-3">{props.baths}</span>
          </div>
          |
          <div className="flex mx-2 text-blue-500">
            <BsGridFill />
            <span className="mx-3">{fixedArea}sqft</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Estates;
