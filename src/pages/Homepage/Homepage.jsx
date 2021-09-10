import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Menu from "../../components/Menu/Menu";
import "./Homepage.scss";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import MapContainer from "../../components/MapContainer/MapContainer";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import Brief from "../../components/Brief/Brief";

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
      {/* <Contact /> */}
      <MapContainer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
