import React from "react";
import { useSelector } from "react-redux";
import Estates from "../components/Estates/Estates";
import DataFromApi from "../DataFromApi";

const SaleHomes = () => {
  // getting states of the rent estates from the store
  const saleEstate = useSelector((state) => state.saleEstates);

  return (
    <>
      <DataFromApi />
      <div className="grid grid-col-1 mt-6 md:grid-cols-2 lg:grid-cols-3 md:mx-16 lg:mx-20">
        {saleEstate.map((rentEstate, index) => (
          <div key={index}>
            <Estates
              baths={rentEstate.baths}
              area={rentEstate.area}
              photo={rentEstate.coverPhoto.url}
              price={rentEstate.price}
              rooms={rentEstate.rooms}
              forRent={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SaleHomes;
