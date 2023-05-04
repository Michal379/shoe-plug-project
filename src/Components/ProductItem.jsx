import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, handleAddCart }) => {
  return (
    <div className="product-item">
{/* Render product image*/}
      <img src={product.image} alt={product.name} />

{/* Render product details */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>

{/* Add to cart button */}
        <button onClick={() => handleAddCart(product)}>
          Add to Cart
        </button>

{/* Purchase button */}
        <Link to="/purchase-confirmed">
          <button>Purchase</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
