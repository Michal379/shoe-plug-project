import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart({ items, total, onRemoveItem, onPurchase }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.map((item, index) => (
        <ShoppingCartItem key={index} item={item} index={index} onRemoveItem={onRemoveItem} />
      ))}
      <div className="shopping-cart-total">
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;