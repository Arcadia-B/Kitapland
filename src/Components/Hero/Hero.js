import React from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/hero.jpg";
import arrow from "../../Assets/white-arrow.png";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero relative">
      <img src={hero} alt="" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold z-10 mb-4">
          Kitapland'e Hoşgeldiniz!
        </h1>
        <p className="text-white text-lg md:text-xl my-4 z-10 max-w-xl">
          Keşfetmeye hazır mısınız? Kitapland, size en güzel kitapları sunuyor.
          Okumak istediğiniz her türden kitabı bulabilir, yeni dünyalara
          yolculuk yapabilirsiniz. Romandan bilim kurguya, tarihten biyografiye
          kadar geniş bir yelpazede seçeneklerimizle sizi bekliyoruz. Herkes
          için bir şeyler var!
        </p>
        <div className="flex justify-center z-10">
          <Link to="/books" onClick={scrollToTop}>
            <button className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
              Kitapları Keşfet{" "}
              <img src={arrow} alt="" className="inline-block h-4 m-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
