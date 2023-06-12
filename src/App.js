import "./App.scss";
import React, { useEffect, useState } from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage/Homepage";
import StartAtTop from "./components/StartAtTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";

function App() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  useEffect(() => {
    const settingScrollTopBtn = () => {
      window.scrollY > 150 ? setIsNotAtTop(true) : setIsNotAtTop(false);
    };

    window.addEventListener("scroll", settingScrollTopBtn);

    return () => {
      window.removeEventListener("scroll", settingScrollTopBtn);
    };
  }, []);

  return (
    <Router>
      <StartAtTop>
        {isNotAtTop && <ScrollTopBtn />}
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StartAtTop>
    </Router>
  );
}

export default App;
