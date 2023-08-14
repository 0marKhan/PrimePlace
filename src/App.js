import DataFromApi from "./DataFromApi";
import "./App.css";
import RentAHomeHeader from "./components/RentAHomeHeader";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <RentAHomeHeader />
      <DataFromApi />
    </div>
  );
}

export default App;
