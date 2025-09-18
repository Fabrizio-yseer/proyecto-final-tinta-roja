import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm.jsx";

export default function CheckoutContainer() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (buyer) => {
    setLoading(true);

    const ordersCollection = collection(db, "orders");

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error generando la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="message">Procesando compra...</p>;
  if (orderId) return <p className="message">¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong></p>;

  return <CheckoutForm onCheckout={handleCheckout} />;
}
