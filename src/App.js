import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import ShoppingCart from "./Components/ShoppingCart";
import ProductItem from "./Components/ProductItem";
import PurchaseConfirmation from "./Components/PurchaseConfirmation";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSearch = (searchTerm) => {
    // implement search functionality here
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        {/* pass shoes and handleSearch as props to SearchBar */}
        <Route path="/search" element={<SearchBar onSearch={handleSearch} />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              items={cartItems}
              total={cartTotal}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/productItem/:id"
          element={<ProductItem onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/purchaseConfirmation"
          element={<PurchaseConfirmation />}
        />
      </Routes>
    </>
  );
}

export default App;
