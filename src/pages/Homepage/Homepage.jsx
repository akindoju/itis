import React from "react";
import Menu from "../../components/Menu/Menu";
import Brief from "../../components/Brief/Brief";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import ReadyToEat from "../../components/ReadyToEat/ReadyToEat";
import MapContainer from "../../components/MapContainer/MapContainer";
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
