import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/CartWidget.css";

export default function CartWidget() {
  const { cart } = useCart();

 
  const qty = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <span role="img" aria-label="carrito" className="cart-icon">
          🛒
        </span>
        {qty > 0 && <span className="cart-badge">{qty}</span>}
      </Link>
    </div>
  );
}
