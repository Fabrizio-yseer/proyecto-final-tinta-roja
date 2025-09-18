import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import "../styles/CheckoutForm.css";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creando la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="checkout-message">Procesando compra...</p>;

  if (orderId)
    return (
      <p className="checkout-message">
        ✅ ¡Gracias por tu compra! <br />
        Tu número de orden es: <strong>{orderId}</strong>
      </p>
    );

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>

      <label>Nombre</label>
      <input type="text" name="name" value={buyer.name} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={buyer.email} onChange={handleChange} required />

      <label>Teléfono</label>
      <input type="tel" name="phone" value={buyer.phone} onChange={handleChange} required />

      <button type="submit" disabled={loading || cart.length === 0}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
}
