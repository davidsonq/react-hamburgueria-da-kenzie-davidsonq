export const Product = ({ product }) => {
  return (
    <li>
      <figure>
        <img src={product.img} alt={`Imagem ${product.name}`} />
      </figure>
      <h3>{product.name}</h3>
      <h4>{product.category}</h4>
      <p>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </p>
      <button type="button">Adicionar</button>
    </li>
  );
};
