import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My..! Projects </h1>
        <span className="pl-title2">You can visit anyone...</span>
        {/* <p className="pl-desc">These are my Projects....</p> */}
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
