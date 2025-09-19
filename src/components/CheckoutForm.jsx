import React, { useState } from "react";
import "../styles/CheckoutForm.css";

export default function CheckoutForm({ onCheckout }) {
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(buyer); 
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>

      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={buyer.name}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={buyer.email}
        onChange={handleChange}
        required
      />

      <label>Teléfono</label>
      <input
        type="tel"
        name="phone"
        value={buyer.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">Confirmar compra</button>
    </form>
  );
}
