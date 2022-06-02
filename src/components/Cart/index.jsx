import CartValue from "../CartValue";
import "./style.css";

function Cart({ currentSale, setCurrentSale }) {
  function deleteProduct(removeProduct) {
    const filter = currentSale.filter((item) => item !== removeProduct);
    setCurrentSale(filter);
  }
  return (
    <section className="carrinho">
      <article className="carrinho--titulo">
        <h2>Carrinho de compras</h2>
      </article>
      {currentSale.map((product) => (
        <article className="carrinho--produtos" key={product.id}>
          <div className="produtos--img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="produtos--texto">
            <h3>{product.name}</h3>
            <span>{product.category}</span>
          </div>
          <div className="produtos--button">
            <button onClick={() => deleteProduct(product)}>Remover</button>
          </div>
        </article>
      ))}
      <article className="carrinho--total">
        <CartValue currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </article>
    </section>
  );
}

export default Cart;
