import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Estates from "../components/Estates";

import DataFromApi from "../DataFromApi";
import SaleSearch from "../components/SaleSearch";

const SaleHomes = () => {
  // to ensure the page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // getting states of the rent estates from the store
  const saleEstate = useSelector((state) => state.saleEstates);

  // state after applying the filters
  const [filteredEstates, setFilteredEstates] = useState(saleEstate);

  // function so child can pass filtered estate data to parent
  const handleFilterSubmit = (priceOption, roomOption, bathOption) => {
    let filtered = saleEstate;

    // filtering based on price
    if (priceOption !== "default") {
      filtered = filtered.filter((estate) => {
        if (estate.price) {
          let estatePrice = estate.price;

          if (priceOption === "700k-1.0M") {
            return estatePrice >= 700000 && estatePrice < 1000000;
          } else if (priceOption === "1.0M-2.0M") {
            return estatePrice >= 1000000 && estatePrice < 2000000;
          } else if (priceOption === ">2M") {
            return estatePrice >= 2000000;
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
          return estate.rooms === 1;
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
        } else if (bathOption === "4") {
          return estate.baths === 4;
        } else if (bathOption === "5") {
          return estate.baths === 5;
        }
        return false;
      });
    }

    setFilteredEstates(filtered);
  };

  return (
    <>
      <DataFromApi />
      <SaleSearch onFilterSubmit={handleFilterSubmit} />
      <div className="grid grid-col-1 mt-6 mb-10 md:grid-cols-2 lg:grid-cols-3 md:mx-16 lg:mx-20">
        {filteredEstates.map((saleEstate, index) => (
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
