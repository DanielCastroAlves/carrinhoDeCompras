import React from "react";
import { useCarrinho } from "../../Context/Context";

const Carrinho = () => {
  const { itensCarrinho, removerDoCarrinho } = useCarrinho();

  const getTotalCompra = () => {
    return itensCarrinho.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      <ul className="lista-itens">
        {itensCarrinho.map((item) => (
          <li key={item.id} className="item">
            <span>
              {item.title} - R${item.price}
            </span>
            <button
              className="botao-remover"
              onClick={() => removerDoCarrinho(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h3 className="total">Total: R${getTotalCompra().toFixed(2)}</h3>
    </div>
  );
};

export default Carrinho;
