import { CartPorduct } from "../CartProduct/index";
export const Cart = ({ productsCart, setProductsCart }) => {
  const removeCart = (e) => {
    const productsCopy = [...productsCart];
    const filterProducts = productsCopy.filter(
      ({ id }) => id === Number(e.target.id)
    );
    if (filterProducts[0].count > 1) {
      filterProducts[0].count = filterProducts[0].count - 1;
      setProductsCart([...productsCart]);
    } else {
      setProductsCart([
        ...productsCopy.filter(({ id }) => id !== Number(e.target.id)),
      ]);
    }
  };
  return (
    <>
      <h2>Carrinho de compras</h2>
      <ul>
        {productsCart.map((productCart) => (
          <CartPorduct
            key={productCart.id}
            productCart={productCart}
            removeCart={removeCart}
          />
        ))}
      </ul>
    </>
  );
};
