import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-24 bg-white transform transition duration-500 hover:scale-105">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2 text-gray-800">{name}</div>
        <p className="text-gray-700 text-sm">₺{price.toFixed(2)}</p>
        <button className="mt-2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none">
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default Card;
