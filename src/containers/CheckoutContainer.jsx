import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm.jsx";

export default function CheckoutContainer() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (buyer) => {
    setLoading(true);

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
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      setBuyerInfo(buyer); 
      clearCart();
    } catch (error) {
      console.error("Error generando la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="message">Procesando compra...</p>;

  if (orderId) {
    return (
      <div className="checkout-summary">
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>

        <h3>📋 Resumen de la compra:</h3>
        <p><strong>Nombre:</strong> {buyerInfo?.name}</p>
        <p><strong>Email:</strong> {buyerInfo?.email}</p>
        <p><strong>Teléfono:</strong> {buyerInfo?.phone}</p>

        <h4>Productos:</h4>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} x {item.quantity} = S/ {item.price * item.quantity}
            </li>
          ))}
        </ul>

        <h3>Total pagado: <strong>S/ {totalPrice()}</strong></h3>
      </div>
    );
  }

  return <CheckoutForm onCheckout={handleCheckout} />;
}
