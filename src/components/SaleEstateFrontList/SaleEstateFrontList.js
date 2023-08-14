import React from "react";
import { useSelector } from "react-redux";
import Estates from "../Estates/Estates";

const SaleEstateFrontList = () => {
  // getting states of the rent estates from the store
  const saleEstate = useSelector((state) => state.saleEstates);

  // Use slice to get the first 6 items
  const firstSixSaleEstates = saleEstate.slice(0, 6);

  return (
    <div className="grid grid-col-1 mt-6 md:grid-cols-2 lg:grid-cols-3 md:mx-16 lg:mx-20">
      {firstSixSaleEstates.map((rentEstate, index) => (
        <div key={index}>
          <Estates
            baths={rentEstate.baths}
            area={rentEstate.area}
            photo={rentEstate.coverPhoto.url}
            price={rentEstate.price}
            rooms={rentEstate.rooms}
          />
        </div>
      ))}
    </div>
  );
};

export default SaleEstateFrontList;
