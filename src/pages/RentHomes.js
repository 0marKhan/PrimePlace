import React, { useState } from "react";
import { useSelector } from "react-redux";
import Estates from "../components/Estates/Estates";
import DataFromApi from "../DataFromApi";
import RentSearch from "../components/RentSearch/RentSearch";

const RentHome = () => {
  // getting states of the rent estates from the store
  const rentEstates = useSelector((state) => state.rentEstates);

  // state after applying the filters
  const [filteredEstates, setFilteredEstates] = useState(rentEstates);

  // function so child can pass filtered estate data to parent
  const handleFilterSubmit = (priceOption, roomOption, bathOption) => {
    let filtered = rentEstates;

    // filtering based on price
    if (priceOption !== "default") {
      filtered = filtered.filter((estate) => {
        if (estate.price) {
          let estatePrice = estate.price;

          if (priceOption === "3k-8k") {
            return estatePrice >= 3000 && estatePrice < 8000;
          } else if (priceOption === "8k-13k") {
            return estatePrice >= 8000 && estatePrice < 13000;
          } else if (priceOption === ">13k") {
            return estatePrice >= 13000;
          }
          return false;
        }
        return false;
      });
    }

    // filtering on room
    if (roomOption !== "default") {
      filtered = filtered.filter((estate) => {
        if (roomOption === "0") {
          return estate.rooms === 0;
        } else if (roomOption === "1") {
          filtered = filtered.filter((estate) => {
            return estate.rooms === 1;
          });
        } else if (roomOption === "2") {
          return estate.rooms === 2;
        } else if (roomOption === "3") {
          return estate.rooms === 3;
        } else if (roomOption === "4") {
          return estate.rooms === 4;
        }
        return false;
      });
    }

    // filtering on baths
    if (bathOption !== "default") {
      filtered = filtered.filter((estate) => {
        if (bathOption === "1") {
          return estate.baths === 1;
        } else if (bathOption === "2") {
          return estate.baths === 2;
        } else if (bathOption === "3") {
          return estate.baths === 3;
        }
        return false;
      });
    }

    setFilteredEstates(filtered);
  };

  return (
    <>
      <DataFromApi />
      <RentSearch onFilterSubmit={handleFilterSubmit} />
      <div className="grid grid-col-1 mt-6 mb-10 md:grid-cols-2 lg:grid-cols-3 md:mx-16 lg:mx-20">
        {filteredEstates.map((rentEstate, index) => (
          <div key={index}>
            <Estates
              baths={rentEstate.baths}
              area={rentEstate.area}
              photo={rentEstate.coverPhoto.url}
              price={rentEstate.price}
              rooms={rentEstate.rooms}
              photoIDs={rentEstate.photoIDs}
              geo={rentEstate.geography}
              amenities={rentEstate.amenities}
              contactName={rentEstate.contactName}
              furnishingStatus={rentEstate.furnishingStatus}
              purpose={rentEstate.purpose}
              title={rentEstate.title}
              forRent={true}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RentHome;
