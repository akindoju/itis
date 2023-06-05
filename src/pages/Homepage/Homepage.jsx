import React from "react";
import Menu from "../../components/Menu/Menu";
import Brief from "../../components/Brief/Brief";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Categories from "../../components/Categories/Categories";
import MapContainer from "../../components/MapContainer/MapContainer";
import "./Homepage.scss";
import NavBar from "../../components/NavBar/NavBar";

const Homepage = ({ isNotAtTop, setIsNotAtTop }) => {
  return (
    <div className="homepage">
      <NavBar />
      <Header />
      <Brief />
      <MakeOrder />
      <Menu />
      <Categories />
      <MapContainer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
