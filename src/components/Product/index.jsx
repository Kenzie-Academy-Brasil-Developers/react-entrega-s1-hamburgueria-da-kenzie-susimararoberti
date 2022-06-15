import "./style.css";

function Product({ product, handleClick }) {
  let name;
  if (product && product.name.length > 12) {
    name = product.name.substr(0, 12) + "...";
  } else {
    name = product.name;
  }
  return (
    <article className="card--produto">
      <div className="produto--divimg">
        <img className="produto--img" src={product.img} alt={product.name} />
      </div>
      <div className="container--info">
        <h2 className="produto--nome">{name}</h2>
        <span className="produto--categoria">{product.category}</span>
        <p className="produto--preco">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="produto--adicionar"
          onClick={() => handleClick(product.id)}
        >
          Adicionar
        </button>
      </div>
    </article>
  );
}

export default Product;
