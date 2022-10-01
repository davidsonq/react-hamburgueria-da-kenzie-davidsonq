import { CartTotalS } from "./styled";

export const CartTotal = ({ totalProducts, removeAll }) => {
  return (
    <CartTotalS>
      {!totalProducts() ? (
        ""
      ) : (
        <div>
          <div>
            <h3>Total</h3>
            <p>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(totalProducts())}
            </p>
          </div>
          <button onClick={removeAll} type="button">
            Remover todos
          </button>
        </div>
      )}
    </CartTotalS>
  );
};
