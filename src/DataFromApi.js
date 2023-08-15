import React, { useState } from "react";
import { useSelector } from "react-redux";
import FetchingData from "./FetchingData";

const DataFromApi = ({ onDataFetched }) => {
  const [dataFetched, setDataFetched] = useState(false);

  const rentEstates = useSelector((state) => state.rentEstates);
  const saleEstates = useSelector((state) => state.saleEstates);

  const handleDataFetched = () => {
    setDataFetched(true);
  };

  return (
    // checks if the stores are empty
    // if they are renders the data from the api, else it doesnt
    <div>
      {rentEstates.length === 0 || saleEstates.length === 0 ? (
        <FetchingData onDataFetched={handleDataFetched} />
      ) : null}
    </div>
  );
};

export default DataFromApi;
