
import { db } from "./config.js";
import { collection, getDocs } from "firebase/firestore";

const checkProductIds = async () => {
  try {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);

    if (snapshot.empty) {
      console.log("No hay productos en Firestore");
      return;
    }

    console.log("Lista de IDs de productos en Firestore:");
    snapshot.forEach(doc => {
      console.log(doc.id, "->", doc.data().title || doc.data().name);
    });
  } catch (error) {
    console.error("Error al leer productos:", error);
  }
};

checkProductIds();
