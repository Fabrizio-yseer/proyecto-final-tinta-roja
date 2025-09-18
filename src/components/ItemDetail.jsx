
import React from "react";
import "../styles/ItemDetail.css";

export default function ItemDetail({ item }) {
  if (!item) return null;

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p><strong>Autor:</strong> {item.author || "Desconocido"}</p>
      <p><strong>Precio:</strong> S/ {item.price}</p>
      <p><strong>Stock:</strong> {item.stock}</p>
      <p>{item.description || "Sin descripción disponible"}</p>
    </div>
  );
}

