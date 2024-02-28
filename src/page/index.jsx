import React, { useState } from "react";
import Header from "../componets/Header";
import ListaProdutos from "../componets/ListaDeProdutos";
import Carrinho from "../componets/Carrinho";

const HomePage = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("MLB1648"); // Categoria inicial

  const handleCategoriaChange = (novaCategoria) => {
    setCategoriaSelecionada(novaCategoria);
  };

  return (
    <div>
      <Header onCategoryChange={handleCategoriaChange} />
      <ListaProdutos categoria={categoriaSelecionada} />
      <Carrinho />
    </div>
  );
};

export default HomePage;
