import React from "react";
import { useParams } from "react-router";
import { getProductById } from "../util/helper";

const Detail = () => {
  const { id } = useParams();
  const productInfo = getProductById(id);
  return (
    <div>
      Detail for product ID: {id}
      <h2>{productInfo.name}</h2>
      <p>{productInfo.desc}</p>
      <p>{productInfo.price} PKR</p>
      <img src={productInfo.imageURL} alt={productInfo.name} width={200} />
    </div>
  );
};

export default Detail;
