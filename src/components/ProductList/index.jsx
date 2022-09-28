import { Product } from "../Product";

export const ProductList = ({ list, addCart }) => {
  return (
    <section>
      <ul>
        {list.map((product) => (
          <Product key={product.id} addCart={addCart} product={product} />
        ))}
      </ul>
    </section>
  );
};
