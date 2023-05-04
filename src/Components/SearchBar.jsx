import React, { useState } from 'react';

function SearchBar({ shoes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredShoes = shoes && shoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the search logic here
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
          </tr>
        </thead>
        <tbody>
          {filteredShoes && filteredShoes.map((shoe) => (
            <tr key={shoe.id}>
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
