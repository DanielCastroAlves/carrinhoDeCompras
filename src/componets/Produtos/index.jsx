import React from "react";

const Produto = ({ produto, adicionarAoCarrinho }) => {
  return (
    <div className="produto">
      <img src={produto.thumbnail} alt={produto.title} />
      <div className="info-produto">
        <h3>{produto.title}</h3>
        <p>Preço: R${produto.price}</p>
      </div>
    </div>
  );
};

export default Produto;
