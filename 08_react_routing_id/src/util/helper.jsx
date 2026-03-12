import { products } from "../data/productData";

export const getProductById = (id) => {
  const productInfo = products.filter(
    (product) => product.id === parseInt(id)
  )[0];
  return productInfo;
};
