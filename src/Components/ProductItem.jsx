import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductItem({ onAddToCart }) {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/shoes/${id}`)
      .then((r) => r.json())
      .then((data) => setShoe(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddToCartClick = () => {
    onAddToCart(shoe);
  };

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
        <p>{shoe.description}</p>
        <button onClick={handleAddToCartClick}>Add to Cart</button>
        <Link to="/purchaseConfirmation">
          <button>Purchase</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
