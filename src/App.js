import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./layout/Navbar";
import RentHomes from "./pages/RentHomes";
import SaleHomes from "./pages/SaleHomes";
import EstateDetails from "./pages/EstateDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rent-homes" element={<RentHomes />} />
        <Route path="sale-homes" element={<SaleHomes />} />
        <Route path="estate-details" element={<EstateDetails />} />
      </Routes>
    </>
  );
}

export default App;
