import { Product } from "../Product";

export const ProductList = ({ list }) => {
  return (
    <section>
      <ul>
        {list.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};
