import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { instance } from "../src/servers/Api";
import { Cart } from "./components/Cart";
const App = () => {
  const [list, setList] = useState([]);
  const [backList, setBackList] = useState("");
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    instance
      .get()
      .then((res) =>
        setList(
          res.data.filter(
            ({ category, name }) =>
              category
                .toLowerCase()
                .replace("-", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(
                  backList
                    .toLowerCase()
                    .replace("-", "")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                ) ||
              name
                .toLowerCase()
                .replace("-", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(
                  backList
                    .toLowerCase()
                    .replace("-", "")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                )
          )
        )
      )
      .catch((err) => err);
  }, [backList]);
  const addCart = (e) => {
    const productsCopy = [...productsCart];
    const products = productsCopy.find(({ id }) => id === Number(e.target.id));
    const filterProducts = list.filter(({ id }) => id === Number(e.target.id));
    if (!products) {
      filterProducts[0].count = 1;
      setProductsCart([...productsCart, ...filterProducts]);
    } else {
      filterProducts[0].count = filterProducts[0].count + 1;
      setProductsCart([...productsCart]);
    }
  };

  return (
    <div className="App">
      <Header setBackList={setBackList} />
      <main>
        <ProductList list={list} addCart={addCart} />
        <aside>
          <Cart productsCart={productsCart} setProductsCart={setProductsCart} />
        </aside>
      </main>
    </div>
  );
};

export default App;
