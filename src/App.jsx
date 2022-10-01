import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { instance } from "../src/servers/Api";
import { Cart } from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const App = () => {
  const [list, setList] = useState([]);
  const [backList, setBackList] = useState("");
  const [productsCart, setProductsCart] = useState([]);
  const MySwal = withReactContent(Swal);
  const [getAnimation, setGetAnimation] = useState(false);
  useEffect(() => {
    instance
      .get()
      .then((res) =>
        setList(
          res.data.filter(
            ({ category, name }) =>
              category
                .toLowerCase()
                .trim()
                .replace("-", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(
                  backList
                    .toLowerCase()
                    .trim()
                    .replace("-", "")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                ) ||
              name
                .toLowerCase()
                .trim()
                .replace("-", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(
                  backList
                    .toLowerCase()
                    .trim()
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
    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      background: "#168821",
      color: "#FFFFFF",
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", MySwal.stopTimer);
        toast.addEventListener("mouseleave", MySwal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `${filterProducts[0].name} adicionado!`,
    });

    if (!products) {
      setGetAnimation(false);
      filterProducts[0].count = 1;
      setProductsCart([...productsCart, ...filterProducts]);
    } else {
      filterProducts[0].count = filterProducts[0].count + 1;
      setProductsCart([...productsCart]);
    }
  };

  return (
    <div>
      <Header setBackList={setBackList} />
      <main>
        <ProductList list={list} addCart={addCart} backList={backList} />
        <Cart
          getAnimation={getAnimation}
          setGetAnimation={setGetAnimation}
          productsCart={productsCart}
          setProductsCart={setProductsCart}
        />
      </main>
    </div>
  );
};
export default App;
