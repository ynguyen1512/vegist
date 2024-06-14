import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/fontawesome-free-solid';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left">
          <p>Free shipping orders from all item</p>
        </div>
        <div className="header-top-right">
          <a href="tel:+1422465323255">(+14) 22465 323255</a>
        </div>
      </div>
      <div className="header-main">
        <div className="header-logo">
          <img src='assets/images/logo.png' alt="Vegist Logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collection">Collection</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="/my-order"><FontAwesomeIcon icon={faShoppingCart} className='icon'/></a>
          <a href="/track-order"><FontAwesomeIcon icon={faUser} className='icon'/></a>
          <a href="/contact-us"><FontAwesomeIcon icon={faHeart} className='icon'/></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
