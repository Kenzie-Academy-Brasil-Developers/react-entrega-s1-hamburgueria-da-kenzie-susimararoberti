import "./style.css";

function CartValue({ currentSale, setCurrentSale }) {
  function deleteAll() {
    setCurrentSale([]);
  }
  return (
    <>
      <div className="total">
        <p className="total--texto">Total</p>
        <p className="total--valor">
          {currentSale
            .reduce((acc, { price }) => acc + price, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <button className="total--button" onClick={() => deleteAll()}>
        Remover Todos
      </button>
    </>
  );
}

export default CartValue;
