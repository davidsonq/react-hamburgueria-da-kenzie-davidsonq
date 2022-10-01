import { CartPorduct } from "../CartProduct/index";
import { CartTotal } from "../CartTotal";
import { CartS, LiCart } from "./styled";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export const Cart = ({ productsCart, setProductsCart }) => {
  const MySwal = withReactContent(Swal);
  const removeCart = (e) => {
    const productsCopy = [...productsCart];
    const filterProducts = productsCopy.filter(
      ({ id }) => id === Number(e.target.id)
    );

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
      title: `${filterProducts[0].name} removido!`,
    });

    if (filterProducts[0].count > 1) {
      filterProducts[0].count = filterProducts[0].count - 1;
      setProductsCart([...productsCart]);
    } else {
      setProductsCart([
        ...productsCopy.filter(({ id }) => id !== Number(e.target.id)),
      ]);
    }
  };
  const removeAll = (e) => {
    MySwal.fire({
      title: "Remover todos",
      text: "Deseja remover todos os produtos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27AE60",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#E60000",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Sucesso!",
          text: "Todos os produtos foram removidos.",
          icon: "success",
          confirmButtonColor: "#27AE60",
          confirmButtonText: "Ok",
        });
        setProductsCart([]);
      }
    });
  };
  const totalProducts = () => {
    return productsCart.reduce((a, { price, count }) => a + price * count, 0);
  };
  return (
    <CartS>
      <h2>Carrinho de compras</h2>
      <ul>
        {!productsCart.length ? (
          <LiCart>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </LiCart>
        ) : (
          productsCart.map((productCart) => (
            <CartPorduct
              key={productCart.id}
              productCart={productCart}
              removeCart={removeCart}
            />
          ))
        )}
      </ul>
      <CartTotal removeAll={removeAll} totalProducts={totalProducts} />
    </CartS>
  );
};
