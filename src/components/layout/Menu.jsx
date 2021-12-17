import React from "react";
import { Link } from "react-router-dom";

import "./styles/Menu.css";

const Menu = (props) => {
  return (
    <header id="header-full">
      <div className="header-content">
        <h2>
            <Link to="/">Healthcare Blockchain System</Link>
        </h2>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/admission">Admissão de Paciente</Link>
            </li>
            <li>
              <Link to="/blood-pressure">Pressão Sanguínea</Link>
            </li>
            <li>
              <Link to="/search">Busca</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
