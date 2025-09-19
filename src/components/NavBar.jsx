import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Tinta Roja</Link>
      </div>

      {/* Categorías */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink to="/categoria/novela">Novela</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/épica">Épica</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/poesía">Poesía</NavLink>
        </li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
}
