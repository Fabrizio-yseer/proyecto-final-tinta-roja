import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";

export default function ItemListContainer() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");

 
        const q = categoryName
          ? query(productsRef, where("category", "==", categoryName))
          : productsRef;

        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);

        console.log("Categoría seleccionada:", categoryName);
        console.log("Productos encontrados:", items);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles</p>;

  return <ItemList products={products} />;
}
