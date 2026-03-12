import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const param = useParams();
  const id = param.id;
  const products = [
    {
      id: 1,
      name: "RTX 5070",
      desc: "High performance graphics card",
      price: 100,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzus2FBMIL9WscN_GYyFE6fLOW8Y3VXLrhQ&s",
    },
    {
      id: 2,
      name: "Samsung S25 Ultra",
      desc: "High resolution monitor",
      price: 200,
      imageURL:
        "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png",
    },
  ];

  const productInfo = products.filter(
    (product) => product.id === parseInt(id)
  )[0];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="w-full h-64 md:h-full object-cover"
                src={productInfo.imageURL}
                alt={productInfo.name}
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {productInfo.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">{productInfo.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">
                  {productInfo.price} PKR
                </span>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                  Add to Cart
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
