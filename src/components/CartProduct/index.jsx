export const CartPorduct = ({ productCart, removeCart }) => {
  return (
    <li>
      <figure>
        <img src={productCart.img} alt={`imagem ${productCart.name}`} />
      </figure>
      <div>
        <div>
          <h2>{productCart.name}</h2>
          <button id={productCart.id} onClick={removeCart} type="button">
            Remover
          </button>
        </div>
        <span>{`quantidade:${productCart.count}`}</span>
        <span>{productCart.category}</span>
      </div>
    </li>
  );
};
