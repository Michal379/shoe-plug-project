import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function SearchBar({ onSearch, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
      .then((r) => r.json())
      .then((data) => setShoes(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredShoes = shoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(filteredShoes);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredShoes.map((shoe) => (
            <tr key={shoe.id}>
              <td><img src={shoe.img_url} alt={shoe.name} /></td>
              <td>{shoe.name}</td>
              <td>{shoe.description}</td>
              <td>{shoe.price}</td>
              <td>
                <button onClick={onAddToCart}>Add to Cart</button>
                <Link to={`/purchaseConfirmation/${shoe.id}`}>
                  <button>Purchase</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;