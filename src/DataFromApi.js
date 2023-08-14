import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { estateActions } from "./store";

const DataFromApi = () => {
  // dispatch function that make actions in reducer run
  const dispatch = useDispatch();

  // getting states of the rent estates and sale estates from the store
  const rentEstates = useSelector((state) => state.rentEstates);
  const saleEstates = useSelector((state) => state.saleEstates);

  // functions to handle the dipatch functions
  const copyForRentHandler = (rentArray) => {
    dispatch(estateActions.copyForRentEstates(rentArray));
  };

  const copyForSaleHandler = (saleArray) => {
    dispatch(estateActions.copyForSaleEstates(saleArray));
  };

  // api call options for the rent estates
  const rentOptions = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": "ed7b85fe80msh77491ed2c4da0e0p17f269jsn8568f1656544",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  // api calls for the sales estates
  const salesOptions = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-sale",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": "ed7b85fe80msh77491ed2c4da0e0p17f269jsn8568f1656544",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getRentLocations = async () => {
      try {
        const response = await axios.request(rentOptions);
        const rentArray = response.data.hits;
        // saving the rent estates to the rent slice
        copyForRentHandler(rentArray);
        console.log(rentArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getRentLocations();
  }, []);

  useEffect(() => {
    const getSalesLocations = async () => {
      try {
        const response = await axios.request(salesOptions);
        const salesArray = response.data.hits;
        // saving the sales estates to the rent slice
        copyForRentHandler(salesArray);
        console.log(salesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSalesLocations();
  }, []);

  return <div></div>;
};

export default DataFromApi;
