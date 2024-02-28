// No arquivo Context.js

import React, { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));
  };

  const getTotalCompra = () => {
    return itensCarrinho.reduce((total, item) => total + item.preco, 0);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        getTotalCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);
