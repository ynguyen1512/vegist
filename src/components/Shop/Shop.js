import React, { useState } from 'react';
import './Shop.scss';
import banner from '../../assets/images/banner-shop.jpg';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const categories = [
    { name: 'Bagel', count: 8 },
    { name: "Baker's rack", count: 22 },
    { name: 'Bestseller', count: 22 },
    { name: 'Biscuit', count: 8 },
    { name: 'Bread', count: 8 },
    { name: 'Breakfast', count: 16 },
    { name: 'Cake', count: 8 },
    // Add more categories as needed
  ];

  const sortOptions = [
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, new to old',
    'Date, old to new'
  ];

  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    // Handle sorting logic here
  };

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/shop-detail')
  }

  return (
    <div className="shop">
      <div className="breadcrumbs">
        <a href="/">Home</a> / <span>Bestseller</span>
      </div>
      <div className="shop-container">
        <div className="shop-sidebar">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <input type="checkbox" id={category.name} />
                <label htmlFor={category.name}>{category.name} ({category.count})</label>
              </li>
            ))}
          </ul>

          <h3>Filter</h3>
          <div className="filter">
            <div className="filter-section">
              <h4>Price</h4>
              <div className="price-filter">
                <input type="range" min="0" max="100" />
                <div className="price-inputs">
                  <input type="number" min="0" max="100" placeholder="From" />
                  <span>-</span>
                  <input type="number" min="0" max="100" placeholder="To" />
                </div>
              </div>
            </div>
            <div className="filter-section">
              <h4>Size</h4>
              <ul>
                <li>
                  <input type="checkbox" id="1kg" />
                  <label htmlFor="1kg">1kg (19)</label>
                </li>
                <li>
                  <input type="checkbox" id="2kg" />
                  <label htmlFor="2kg">2kg (19)</label>
                </li>
                <li>
                  <input type="checkbox" id="3kg" />
                  <label htmlFor="3kg">3kg (3)</label>
                </li>
                <li>
                  <input type="checkbox" id="5kg" />
                  <label htmlFor="5kg">5kg (19)</label>
                </li>
                <li>
                  <input type="checkbox" id="7kg" />
                  <label htmlFor="7kg">7kg (1)</label>
                </li>
                <li>
                  <input type="checkbox" id="10kg" />
                  <label htmlFor="10kg">10kg (3)</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="shop-content">
          <div className="shop-header">
            <h2>Bestseller (22)</h2>
            <div className="shop-header-controls">
              <div className="view-toggle">
                <button><i className="fas fa-th-large"></i></button>
                <button><i className="fas fa-bars"></i></button>
              </div>
              <div className="sort-by">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={selectedSort} onChange={handleSortChange}>
                  {sortOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="shop-banner">
            <img src={banner} alt="Banner" />
          </div>

          <div className="product-grid">
            <div className="product-card" onClick={handleNavigate}>
              <img src={product1} alt="Product 1" />
              <h4>Vegetable tomato</h4>
              <p className="price">€55,00</p>
            </div>
            <div className="product-card">
              <img src={product2} alt="Product 2" />
              <h4>Sp. red fresh guava</h4>
              <p className="price">€30,00 <span className="original-price">€44,00</span></p>
            </div>
            <div className="product-card">
              <img src={product3} alt="Product 3" />
              <h4>Shrimp - jumbo (5 lb)</h4>
              <p className="price">€61,00</p>
            </div>
            <div className="product-card">
              <img src={product4} alt="Product 4" />
              <h4>Organic coconut</h4>
              <p className="price">€35,00 <span className="original-price">€44,00</span></p>
            </div>
            <div className="product-card">
              <img src={product5} alt="Product 5" />
              <h4>Orange juice natural</h4>
              <p className="price">€40,00</p>
            </div>
            <div className="product-card">
              <img src={product6} alt="Product 6" />
              <h4>Healthy papaya 100%</h4>
              <p className="price">€50,00</p>
            </div>
            {/* Repeat product-card for more products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
