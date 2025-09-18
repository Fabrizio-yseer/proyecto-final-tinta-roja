import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemDetail from "../components/ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("id", "==", Number(id))); 
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const docSnap = snapshot.docs[0];
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Producto no encontrado en Firestore");
        }
      } catch (error) {
        console.error("Error cargando producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail item={product} />;
}
