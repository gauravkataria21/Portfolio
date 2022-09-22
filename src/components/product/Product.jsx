import "./product.css";

const Product = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <h5 className="name">{name}</h5>
      </div>
      <a href="https://gauravkataria.netlify.app/" target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
