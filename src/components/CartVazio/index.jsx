import "./style.css";

function CartVazio() {
  return (
    <section className="carrinhoVazio">
      <div className="carrinhoVazio--titulo">
        <h2>Carrinho de compras</h2>
      </div>

      <div className="carrinhoVazio--mensagem">
        <p>Sua sacola está vazia</p>
        <span>adicione itens</span>
      </div>
    </section>
  );
}

export default CartVazio;
