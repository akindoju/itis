import "./App.scss";
import React, { useEffect, useState } from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Homepage from "./Pages/Homepage/Homepage";
import StartAtTop from "./Components/StartAtTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollTopBtn from "./Components/ScrollTopBtn/ScrollTopBtn";
import emailjs from "@emailjs/browser";

function App() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  useEffect(() => {
    emailjs.init("l9I-1magpjSZ5yQ6u");
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
