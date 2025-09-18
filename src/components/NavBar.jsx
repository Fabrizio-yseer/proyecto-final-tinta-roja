import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Tinta Roja</Link>
      </div>
      <ul>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/categoria/Clásicos">Clásicos</Link></li>
        <li><Link to="/categoria/Ficción">Ficción</Link></li>
        <li><Link to="/categoria/Ensayo">Ensayo</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
