import React from "react";
import Menu from "../../components/Menu/Menu";
import Brief from "../../components/Brief/Brief";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Gallery from "../../components/Gallery/Gallery";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Categories from "../../components/Categories/Categories";
import MapContainer from "../../components/MapContainer/MapContainer";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import "./Homepage.scss";

const Homepage = ({ isNotAtTop, setIsNotAtTop }) => {
  const settingScrollTopBtn = () => {
    window.scrollY > 150 ? setIsNotAtTop(true) : setIsNotAtTop(false);
  };

  window.addEventListener("scroll", settingScrollTopBtn);

  return (
    <div className="homepage">
      <NavBar />
      {isNotAtTop && <ScrollTopBtn />}
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
