// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProvedorCarrinho } from "./Context/Context";
import ListaProdutos from "./componets/ListaDeProdutos";
import HomePage from "./page";

const App = () => {
  return (
    <ProvedorCarrinho>
      <Router>
        <div>
          <h1>Carrinho de Compras</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ListaProdutos />} />
          </Routes>
        </div>
      </Router>
    </ProvedorCarrinho>
  );
};

export default App;
