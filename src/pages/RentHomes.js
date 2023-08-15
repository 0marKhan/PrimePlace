import React from "react";
import { useSelector } from "react-redux";
import Estates from "../components/Estates/Estates";
import DataFromApi from "../DataFromApi";

const RentHome = () => {
  // getting states of the rent estates from the store
  const rentEstates = useSelector((state) => state.rentEstates);

  return (
    <>
      <DataFromApi />
      <div className="grid grid-col-1 mt-6 md:grid-cols-2 lg:grid-cols-3 md:mx-16 lg:mx-20">
        {rentEstates.map((rentEstate, index) => (
          <div key={index}>
            <Estates
              baths={rentEstate.baths}
              area={rentEstate.area}
              photo={rentEstate.coverPhoto.url}
              price={rentEstate.price}
              rooms={rentEstate.rooms}
              forRent={true}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RentHome;
