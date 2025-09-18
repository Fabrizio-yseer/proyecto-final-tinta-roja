// src/components/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { cart, clearCart } = useCart();

  // función para calcular el total
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>No tienes productos en el carrito 🛒</p>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <span>Cantidad: {item.quantity || 1}</span>
            <span>Precio: ${item.price}</span>
            <span>Subtotal: ${item.price * (item.quantity || 1)}</span>
          </li>
        ))}
      </ul>

      <h3>Total: ${cartTotal()}</h3>

      <div className="cart-actions">
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
}
