import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCartItem({ item }) {
  return (
    <div className="shopping-cart-item">
      <div className="shopping-cart-item-img">
        <img src={item.img_url} alt={item.name} />
      </div>
      <div className="shopping-cart-item-info">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <Link to="/purchaseConfirmation">
          <button>Purchase</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
