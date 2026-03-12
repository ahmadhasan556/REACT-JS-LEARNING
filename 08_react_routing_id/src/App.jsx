import { NavLink } from "react-router";
import "./App.css";
import Card from "./components/Card";
import { products } from "./data/productData";

function App() {
  return (
    <>
      <div>
        <h1>This is an ECommerce Store</h1>
        <div className="flex gap-2">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                desc={product.desc}
                imageURL={product.imageURL}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
