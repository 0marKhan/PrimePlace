import React from "react";
import RentAHomeHeader from "../components/RentAHomeHeader/RentAHomeHeader";
import DataFromApi from "../DataFromApi";
import RentEstateFrontList from "../components/RentEstateFrontList/RentEstateFrontList";
import HomeOnSaleHeader from "../components/HomeOnSaleHeader/HomeOnSaleHeader";
import SaleEstateFrontList from "../components/SaleEstateFrontList/SaleEstateFrontList";

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
