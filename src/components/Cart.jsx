import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { cart, clearCart, removeItem, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>No tienes productos en el carrito 🛒</p>
        <Link to="/" className="btn-back">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>🛍️ Tu carrito</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <strong>{item.title}</strong>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: S/ {item.price}</p>
              <p>Subtotal: S/ {item.price * item.quantity}</p>
            </div>
            <button
              className="btn-remove"
              onClick={() => removeItem(item.id)}
            >
              ❌ Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3 className="cart-total">Total: S/ {totalPrice()}</h3>

      <div className="cart-actions">
        <button className="btn-clear" onClick={clearCart}>
          🗑️ Vaciar carrito
        </button>
        <Link to="/checkout">
          <button className="btn-checkout">✅ Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
}
