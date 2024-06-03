import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="breadcrumb">
        Home / Your Shopping Cart
      </div>
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/store" className="return-link">Return to store</Link>
      </div>
    </div>
  );
};

export default Cart;
