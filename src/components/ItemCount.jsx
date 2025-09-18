import React, { useState } from "react";
import "../styles/ItemDetail.css";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => setCount((c) => Math.min(c + 1, stock));
  const decrease = () => setCount((c) => Math.max(1, c - 1));

  return (
    <div className="item-count">
      <button type="button" onClick={decrease}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increase}>+</button>
      <button
        type="button"
        className="btn"
        disabled={stock <= 0}
        onClick={() => onAdd(count)}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
