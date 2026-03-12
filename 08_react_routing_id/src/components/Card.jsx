import React from "react";
import { NavLink } from "react-router";

const Card = ({ id, name, desc, price, imageURL }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageURL} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-6 flex justify-between items-center">
        <span className="inline-block bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
          {price} PKR
        </span>
        <NavLink
          to={`/product/${id}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
        >
          Go to Detail
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
