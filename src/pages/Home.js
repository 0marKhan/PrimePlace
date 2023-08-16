import React from "react";
import RentAHomeHeader from "../components/RentAHomeHeader";
import DataFromApi from "../DataFromApi";
import RentEstateFrontList from "../components/RentEstateFrontList";
import HomeOnSaleHeader from "../components/HomeOnSaleHeader";
import SaleEstateFrontList from "../components/SaleEstateFrontList";

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
