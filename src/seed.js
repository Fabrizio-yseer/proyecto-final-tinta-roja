import { db } from "./firebase/config.js";
import { collection, addDoc } from "firebase/firestore";
import { products } from "./data/products.js";

const seedProducts = async () => {
  try {
    const productsCollection = collection(db, "products");

    for (let item of products) {
      await addDoc(productsCollection, item);
    }

    console.log("Productos cargados con éxito 🚀");
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
};

seedProducts();
