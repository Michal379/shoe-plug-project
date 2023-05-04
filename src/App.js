import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import ProductItem from './Components/ProductItem';
import SearchBar from './Components/SearchBar';
import ShoppingCart from './Components/ShoppingCart';
import { PurchaseConfirmation } from './Components/PurchaseConfirmation'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
}

export default App;


/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductItem() {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/shoes`)
      .then((r) => r.json())
      .then((data) => setShoe(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-item">
      <h1>{shoe.name}</h1>
      <div className="product-image">
        <img src={shoe.img_url} alt={shoe.name} />
      </div>
      <div className="product-info">
        <p>Description: {shoe.description}</p>
        <p>Price: {shoe.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;*/
