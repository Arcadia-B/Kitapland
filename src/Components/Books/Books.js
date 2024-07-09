import React from "react";
import book from "../../Assets/library.jpg";

const Books = () => {
  return (
    <div className="books">
      <div className="text-center">
        <div className="relative">
          <img src={book} alt="" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-75"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <p className="text-2xl text-center">
              Kitaplar, bilgiye ulaşmanın, dünyayı keşfetmenin ve hayal gücünü
              geliştirmenin en güzel yoludur. Onlarla, geçmişten geleceğe uzanan
              bir yolculuğa çıkabilir, yeni dünyalar keşfedebiliriz.
            </p>
            <p className="mt-4 text-2xl text-center">
              Her kitap, bir hikaye anlatır ve okuyucularını derin düşüncelere
              sevk eder. Okumak, ruhu besler ve yeni bakış açıları kazandırır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
