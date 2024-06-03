import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Vegist</h2>
          <p>Tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
          <div className="payment-methods">
            <img src="path_to_visa_image" alt="Visa" />
            <img src="path_to_mastercard_image" alt="MasterCard" />
            <img src="path_to_amex_image" alt="American Express" />
            <img src="path_to_gpay_image" alt="Google Pay" />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/about">About Vegist</a></li>
              <li><a href="/faqs">FAQ's</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/store-location">Store Location</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Privacy & Terms</h3>
            <ul>
              <li><a href="/payment-policy">Payment Policy</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/return-policy">Return Policy</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li><a href="/my-account">My Account</a></li>
              <li><a href="/cart">My Cart</a></li>
              <li><a href="/order-history">Order History</a></li>
              <li><a href="/wishlist">My Wishlist</a></li>
              <li><a href="/address">My Address</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Location</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 7882 Longbranch Rd Wooster, Park Iban, Australia</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> +14 654 1234 5448</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> support@gmail.com</p>
            <div className="social-media">
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 by spacingtech</p>
      </div>
    </footer>
  );
};

export default Footer;
