import Product from "../Product";
import "./style.css";

function ProductList({ products, handleClick }) {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </>
  );
}

export default ProductList;
