import React from "react";
import Card from "../Card/Card";
import image_1 from "../../Assets/image-1.jpg";
import image_2 from "../../Assets/image-2.jpg";
import image_3 from "../../Assets/image-3.jpg";
import image_4 from "../../Assets/image-4.jpg";
import image_5 from "../../Assets/image-5.jpg";
import image_6 from "../../Assets/image-6.jpg";
import image_7 from "../../Assets/image-7.jpg";
import image_8 from "../../Assets/image-8.jpg";
import image_9 from "../../Assets/image-9.jpg";
import image_10 from "../../Assets/image-10.jpg";
import image_16 from "../../Assets/image-16.jpg";
import image_17 from "../../Assets/image-17.jpg";
import image_18 from "../../Assets/image-18.jpg";

const Classics = () => {
  const products = [
    {
      id: 6,
      name: "Ürün 1",
      price: 290,
      image: image_1,
    },
    {
      id: 7,
      name: "Ürün 2",
      price: 270,
      image: image_2,
    },
    {
      id: 8,
      name: "Ürün 3",
      price: 240,
      image: image_3,
    },
    {
      id: 9,
      name: "Ürün 4",
      price: 250,
      image: image_4,
    },
    {
      id: 10,
      name: "Ürün 5",
      price: 190,
      image: image_5,
    },
    {
      id: 11,
      name: "Ürün 6",
      price: 210,
      image: image_6,
    },
    {
      id: 12,
      name: "Ürün 7",
      price: 260,
      image: image_7,
    },
    {
      id: 13,
      name: "Ürün 8",
      price: 230,
      image: image_8,
    },
    {
      id: 14,
      name: "Ürün 9",
      price: 250,
      image: image_9,
    },
    {
      id: 15,
      name: "Ürün 10",
      price: 270,
      image: image_10,
    },
    {
      id: 16,
      name: "Ürün 11",
      price: 220,
      image: image_16,
    },
    {
      id: 17,
      name: "Ürün 12",
      price: 290,
      image: image_17,
    },
    {
      id: 18,
      name: "Ürün 13",
      price: 300,
      image: image_18,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center container mx-auto">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Classics;
