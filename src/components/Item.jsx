import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemList.css";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <Link to={`/producto/${product.id}`}>
        <img src={product.img} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <p className="price">S/ {product.price}</p>
      <Link to={`/producto/${product.id}`} className="details-link">
        Ver detalle
      </Link>
    </div>
  );
}

