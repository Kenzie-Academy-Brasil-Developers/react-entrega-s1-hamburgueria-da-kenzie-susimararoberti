import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductsList";
import instance from "./utils/instance";
import Cart from "./components/Cart";
import CartVazio from "./components/CartVazio";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const notificacao = () => {
    toast.warn("O produto já está no carrinho!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    try {
      const request = async () => {
        const teste = await instance.get("/products");
        setProducts(teste.data);
        setFilteredProducts(teste.data);
      };
      request();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function showProducts(event) {
    const buscado = event.target.value;
    const filtrados = products.filter((produto) => {
      if (
        produto.name.toLowerCase().includes(buscado.toLowerCase()) ||
        produto.category.toLowerCase().includes(buscado.toLowerCase())
      ) {
        return produto;
      }
    });
    if (filtrados.length > 0) {
      setFilteredProducts(filtrados);
    } else {
      setFilteredProducts([]);
    }
  }

  function handleClick(id) {
    const encontrado = products.find((produto) => {
      if (produto.id === id) {
        return produto;
      }
    });

    const ehIgual = currentSale.find((produto) => produto.id === encontrado.id);

    if (ehIgual?.id) {
      notificacao();
    } else {
      setCurrentSale([...currentSale, encontrado]);
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <header className="header--burguer">
        <div className="header--logo">
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </div>
        <div className="header--pesquisa">
          <input
            onChange={showProducts}
            type="text"
            placeholder="Digitar pesquisa"
          />
          <button type="submit">Pesquisar</button>
        </div>
      </header>
      <main className="main">
        <section className="container--produtos">
          <ProductList products={filteredProducts} handleClick={handleClick} />
        </section>
        <section className="container--carrinho">
          {currentSale[0] ? (
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          ) : (
            <CartVazio />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
