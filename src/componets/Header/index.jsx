import React, { useState } from "react";
import "../../assets/styles.css";

const Header = ({ onCategoryChange }) => {
  const [categoria, setCategoria] = useState("MLB1648");

  const handleChange = (event) => {
    const novaCategoria = event.target.value;
    setCategoria(novaCategoria);
    onCategoryChange(novaCategoria);
  };

  return (
    <div className="header">
      <h2>Escolha uma categoria:</h2>
      <select value={categoria} onChange={handleChange}>
        <option value="MLB1648">Celulares</option>
        <option value="MLB1649">Computadores</option>
        <option value="MLB1051">Eletrônicos</option>
      </select>
    </div>
  );
};

export default Header;
