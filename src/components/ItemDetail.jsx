import React, { useState } from "react";
import "../styles/ItemDetail.css";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!item) return null;

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p><strong>Autor:</strong> {item.author || "Desconocido"}</p>
      <p><strong>Precio:</strong> S/ {item.price}</p>
      <p><strong>Stock:</strong> {item.stock}</p>
      <p>{item.description || "Sin descripción disponible"}</p>

      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "green" }}>✅ Producto agregado al carrito</p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <Link to="/cart">
              <button style={{ padding: "0.5rem 1rem" }}>
                🛒 Ir al carrito
              </button>
            </Link>
            <Link to="/">
              <button style={{ padding: "0.5rem 1rem" }}>
                🛍️ Seguir comprando
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
