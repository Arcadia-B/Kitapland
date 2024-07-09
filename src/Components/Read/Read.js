import React from "react";
import read from "../../Assets/read.jpg";

const Read = () => {
  return (
    <div className="about container mx-auto flex flex-col md:flex-row items-center my-32">
      {" "}
      <div className="side-1 md:w-1/2">
        <img src={read} className="w-full" alt="Hero" />
      </div>
      <div className="side-2 md:w-1/2 md:px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Kitaplar ve Dünyalar
        </h2>{" "}
        <p className="text-lg text-center md:text-left">
          {" "}
          Kitaplar, insanları farklı dünyalara götüren sihirli kapılardır. Her
          bir sayfa, yeni maceraların ve keşiflerin başlangıcıdır. Sayfalar
          arasında dolaşırken, farklı zamanlarda ve mekânlarda yolculuk yaparız;
          geçmişin derinliklerine dalarız veya geleceğin ufuklarını keşfederiz.
          Kitaplar, bizi duygusal bir yolculuğa çıkarırken aynı zamanda zihinsel
          bir serüvene de sürükler. Sayfalardaki karakterlerle birlikte yaşar,
          onların sevinçlerini ve hüzünlerini paylaşırız. Kitapların içinde
          kaybolmak, kendi dünyamızı unutup yeni dünyaları keşfetmek demektir.
          Her kitap, bir dünyanın kapısını aralamak ve içindeki gizemleri
          keşfetmek için bir fırsattır.
        </p>
      </div>
    </div>
  );
};

export default Read;
