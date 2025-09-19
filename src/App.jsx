import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutContainer from "./containers/CheckoutContainer.jsx"; 

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/checkout" element={<CheckoutContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </>
  );
}
