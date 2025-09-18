import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>{item.quantity} x ${item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
      </div>
      <button className="btn-remove" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
}
