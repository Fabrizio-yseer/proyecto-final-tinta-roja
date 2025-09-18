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
        <li><Link to="/categoria/novela">Novela</Link></li>
        <li><Link to="/categoria/épica">Épica</Link></li>
        <li><Link to="/categoria/poesía">Poesía</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
