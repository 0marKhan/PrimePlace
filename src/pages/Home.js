import React from "react";
import RentAHomeHeader from "../components/rentAHomeHeader/RentAHomeHeader";
import DataFromApi from "../DataFromApi";
import RentEstateFrontList from "../components/rentEstateFrontList/RentEstateFrontList";
import HomeOnSaleHeader from "../components/homeOnSaleHeader/HomeOnSaleHeader";
import SaleEstateFrontList from "../components/saleEstateFrontList/SaleEstateFrontList";

const Home = () => {
  return (
    <div>
      <RentAHomeHeader />
      <DataFromApi />
      <RentEstateFrontList />
      <HomeOnSaleHeader />
      <SaleEstateFrontList />
    </div>
  );
};

export default Home;
