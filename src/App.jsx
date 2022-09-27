import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import axios from "axios";
const App = () => {
  const [list, setList] = useState([]);
  const [backList, setBackList] = useState("");
  useEffect(() => {
    axios
      .get(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) =>
        setList([
          ...res.data.filter(
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
          ),
        ])
      )
      .catch((err) => err);
  }, [backList]);

  return (
    <div className="App">
      <Header setBackList={setBackList} />
      <main>
        <ProductList list={list} />
      </main>
    </div>
  );
};

export default App;
