import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Swiper from "./Components/Slider/Swiper";
import Title from "./Components/Title/Title";
import BestSeller from "./Components/BestSeller/BestSeller";
import Contact from "./Components/Contact/Contact";
import Classics from "./Components/Classics/Classics";
import Books from "./Components/Books/Books";
import Read from "./Components/Read/Read";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/title" element={<Title />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/books" element={<Classics />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AllPages() {
  return (
    <div>
      <Hero />
      <Title key="classics" subTitle="KLASİKLER" />
      <Swiper />
      <Title key="good-books" subTitle="İYİ Kİ KİTAPLAR VAR" />
      <Books />
      <Title key="benefits-of-reading" subTitle="KİTAP OKUMANIN FAYDALARI" />
      <Read />
      <Title key="cnc" subTitle="İLETİŞİM" />
      <Contact />
    </div>
  );
}

export default App;
