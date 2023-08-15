import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { Link } from "react-router-dom";

const Estates = (props) => {
  const fixedArea = props.area.toFixed(1);

  return (
    <Link to="estate-details">
      <div className="mt-2 mx-auto bg-white p-4 rounded-lg shadow-md w-[19rem]">
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
      </div>
    </Link>
  );
};

export default Estates;
