// ShoppingCart.js
import React from 'react';

// A stateless functional component that renders a shopping cart
function ShoppingCart({ items, total, onRemoveItem }) {

  const handleRemoveItem = (index) => {
    onRemoveItem(index);
  };

  return (
    <div>
      <span>{items && items.length} items in cart</span>
      <span>Total: ${total}</span>
      <button>Checkout</button>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
