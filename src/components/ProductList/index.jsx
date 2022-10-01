import { Product } from "../Product";
import { ProductListS } from "./styled";
import Lottie from "react-lottie";
import animationData from "../../lotties/106840-search-not-found.json";
export const ProductList = ({ list, addCart, backList }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ProductListS>
      {!backList ? (
        ""
      ) : (
        <h2>
          Resultados para: <span>{backList}</span>
        </h2>
      )}
      <ul>
        {!list.length && !!backList ? (
          <li className="list__noPage">
            <h3>
              Nenhum resultado encontrado para <span>{backList}</span>!
            </h3>
            <Lottie options={defaultOptions} height={300} width={300} />
          </li>
        ) : (
          list.map((product) => (
            <Product key={product.id} addCart={addCart} product={product} />
          ))
        )}
      </ul>
    </ProductListS>
  );
};
