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
        {saleEstate.map((saleEstate, index) => (
          <div key={index}>
            <Estates
              baths={saleEstate.baths}
              area={saleEstate.area}
              photo={saleEstate.coverPhoto.url}
              price={saleEstate.price}
              rooms={saleEstate.rooms}
              photoIDs={saleEstate.photoIDs}
              geo={saleEstate.geography}
              amenities={saleEstate.amenities}
              contactName={saleEstate.contactName}
              furnishingStatus={saleEstate.furnishingStatus}
              purpose={saleEstate.purpose}
              title={saleEstate.title}
              forRent={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SaleHomes;
