import React from "react";
import Item from "./Item.jsx";

export default function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
