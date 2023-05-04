import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
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
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <table>
        <thead>
          <tr>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
