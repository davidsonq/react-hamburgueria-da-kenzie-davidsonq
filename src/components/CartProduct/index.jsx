import { CartProductS, ContainerCart } from "./styled";

export const CartPorduct = ({ productCart, removeCart, running }) => {
  return (
    <CartProductS animation={running}>
      <figure>
        <img src={productCart.img} alt={`imagem ${productCart.name}`} />
      </figure>
      <ContainerCart>
        <div>
          <h2>{productCart.name}</h2>
          <button id={productCart.id} onClick={removeCart} type="button">
            Remover
          </button>
        </div>
        <span>{`Quantidade: ${productCart.count}`}</span>
        <span>{productCart.category}</span>
      </ContainerCart>
    </CartProductS>
  );
};
