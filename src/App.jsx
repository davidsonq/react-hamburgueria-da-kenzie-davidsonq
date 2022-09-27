import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import axios from "axios";
const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => setList([...res.data]))
      .catch((err) => err);
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList list={list} />
      </main>
    </div>
  );
};

export default App;
