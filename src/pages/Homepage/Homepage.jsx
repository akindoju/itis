import React from "react";
import Menu from "../../Components/Menu/Menu";
import Brief from "../../Components/Brief/Brief";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Gallery from "../../Components/Gallery/Gallery";
import MakeOrder from "../../Components/MakeOrder/MakeOrder";
import ReadyToEat from "../../Components/ReadyToEat/ReadyToEat";
import MapContainer from "../../Components/MapContainer/MapContainer";
import "./Homepage.scss";

const Homepage = ({ isNotAtTop, setIsNotAtTop }) => {
  return (
    <div className="homepage">
      <Header />
      <Brief />
      <MakeOrder />
      <ReadyToEat />
      <Menu />
      <MapContainer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
