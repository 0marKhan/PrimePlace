import DataFromApi from "./DataFromApi";
import "./App.css";
import RentAHomeHeader from "./components/RentAHomeHeader/RentAHomeHeader";
import Navbar from "./layout/Navbar";
import RentEstateFrontList from "./components/RentEstateFrontList/RentEstateFrontList";
import HomeOnSaleHeader from "./components/HomeOnSaleHeader/HomeOnSaleHeader";
import SaleEstateFrontList from "./components/SaleEstateFrontList/SaleEstateFrontList";

function App() {
  return (
    <div>
      <Navbar />
      <RentAHomeHeader />
      <DataFromApi />
      <RentEstateFrontList />
      <HomeOnSaleHeader />
      <SaleEstateFrontList />
    </div>
  );
}

export default App;
