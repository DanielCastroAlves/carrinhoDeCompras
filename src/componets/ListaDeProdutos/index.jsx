import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCarrinho } from "../../Context/Context";
import Produto from "../Produtos";
import "../../assets/styles.css";

const ListaProdutos = ({ categoria }) => {
  const { adicionarAoCarrinho } = useCarrinho();
  const [produtos, setProdutos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const produtosPorPagina = 10;

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(
          `https://api.mercadolibre.com/sites/MLB/search?category=${categoria}&offset=${
            (pagina - 1) * produtosPorPagina
          }&limit=${produtosPorPagina}`
        );
        setProdutos(response.data.results);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    };

    fetchProdutos();
  }, [categoria, pagina, produtosPorPagina]);

  const handlePaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const handleProximaPagina = () => {
    setPagina(pagina + 1);
  };

  return (
    <div>
      <h2>Produtos do Mercado Livre</h2>
      <ul className="lista-produtos">
        {produtos.map((produto) => (
          <li key={produto.id} className="produto-item">
            <Produto produto={produto} />
            <button
              className="botao-adicionar"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
      <div className="paginacao">
        <button onClick={handlePaginaAnterior}>Página Anterior</button>
        <span>Página {pagina}</span>
        <button onClick={handleProximaPagina}>Próxima Página</button>
      </div>
    </div>
  );
};

export default ListaProdutos;
