import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function ProductList() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
      .then((r) => r.json())
      .then((data) => setShoes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bot-collection">
      <h1>Shoe Plug</h1>
      <SearchBar shoes={shoes} />
      {shoes.map((shoe) => (
        <article className="card" key={shoe.id}>
          <div className="card-image">
            <img src={shoe.img_url} alt={shoe.name} />
          </div>
          <div className="card-content">
            <div className="card-header">
              <h4>Name : {shoe.name}</h4>
            </div>
            <div className="card-body">
              <p className="card-text">Description : {shoe.description}</p>
              <p className="card-text">Price : {shoe.price}</p>
              <Link to={`/productItem/${shoe.id}`} className="btn btn-primary">
                View details
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;