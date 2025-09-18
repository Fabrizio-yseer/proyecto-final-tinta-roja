import React, { useState } from "react";
import "../styles/ItemCount.css";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const increase = () => setCount((c) => Math.min(c + 1, stock));
  const decrease = () => setCount((c) => Math.max(1, c - 1));

  const handleAdd = () => {
    onAdd(count);
    setAdded(true);
  };

  if (stock === 0) {
    return <p className="out-of-stock">Producto sin stock ❌</p>;
  }

  return !added ? (
    <div className="item-count">
      <button type="button" onClick={decrease}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increase}>+</button>
      <button
        type="button"
        className="btn"
        onClick={handleAdd}
      >
        Añadir al carrito
      </button>
    </div>
  ) : (
    <p className="added-message">✅ Producto agregado al carrito</p>
  );
}
