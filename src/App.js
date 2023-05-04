import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import ShoppingCart from './Components/ShoppingCart';
import ProductItem from './Components/ProductItem';

function App () {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/search' element={<SearchBar />} />
      <Route path='/cart' element={<ShoppingCart />} />
      <Route path='/productItem/:id' element={<ProductItem />} />
    </Routes>
    </>
  )
}

export default App;
