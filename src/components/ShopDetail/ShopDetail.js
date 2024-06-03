import React, { useState } from 'react';
import './ShopDetail.scss';
import productImage1 from '../../assets/images/product1.jpg';
import productImage2 from '../../assets/images/product2.jpg';
import productImage3 from '../../assets/images/product3.jpg';
import productImage4 from '../../assets/images/product4.jpg';
import relatedProductImage1 from '../../assets/images/product5.jpg';
import relatedProductImage2 from '../../assets/images/product6.jpg';
import relatedProductImage3 from '../../assets/images/product7.jpg';
import relatedProductImage4 from '../../assets/images/product8.jpg';


const imageMap = {
    '5KG': productImage1,
    '10KG': productImage2,
    '1KG': productImage3
};

const ShopDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('5KG');
    const [mainImage, setMainImage] = useState(imageMap['5KG']);
    const [activeTab, setActiveTab] = useState('description');

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setMainImage(imageMap[size]);
    };

    const relatedProducts = [
        { image: relatedProductImage1, name: 'Sp. red fresh guava', price: '€30,00', originalPrice: '€44,00', discount: '32%' },
        { image: relatedProductImage2, name: 'Fresh mussel (500g)', price: '€33,00', originalPrice: '€55,00', discount: '40%' },
        { image: relatedProductImage3, name: 'Fresh banana 100% safe', price: '€15,00', originalPrice: '€20,00', discount: '25%' },
        { image: relatedProductImage4, name: 'Fruits banana 100% organic', price: '€22,00', originalPrice: '€44,00', discount: '50%' }
    ];

    return (
        <div className="shop-detail container">
            <div className="breadcrumb">Home / Fresh organic fruit(50gm)</div>
            <div className="product-details">
                <div className="product-images">
                    <img src={mainImage} alt="Product" className="main-image" />
                    <div className="thumbnail-images">
                        <img src={productImage1} alt="Product Thumbnail" className='thumbnail-img'/>
                        <img src={productImage2} alt="Product Thumbnail" className='thumbnail-img'/>
                        <img src={productImage3} alt="Product Thumbnail" className='thumbnail-img'/>
                        <img src={productImage4} alt="Product Thumbnail" className='thumbnail-img'/>
                    </div>
                </div>
                <div className="product-info">
                    <h1>Fresh organic fruit(50gm)</h1>
                    <div className="availability">
                        <span className="status">Availability:</span> <span className="in-stock">11 in stock</span>
                    </div>
                    <div className="price">€33,00</div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="size-selector">
                        <span>Size: </span>
                        <button className={selectedSize === '5KG' ? 'selected' : ''} onClick={() => handleSizeChange('5KG')}>5KG</button>
                        <button className={selectedSize === '10KG' ? 'selected' : ''} onClick={() => handleSizeChange('10KG')}>10KG</button>
                        <button className={selectedSize === '1KG' ? 'selected' : ''} onClick={() => handleSizeChange('1KG')}>1KG</button>
                    </div>
                    <div className="quantity-selector">
                        <span>Quantity: </span>
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="buy-it-now">Buy it now</button>
                    </div>
                    <div className="wishlist">❤️ Wishlist</div>
                    <div className="sku">SKU: 123456</div>
                    <div className="share">
                        <span>Share: </span>
                        <a href="#"><img src="icon-facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="icon-twitter.png" alt="Twitter" /></a>
                        <a href="#"><img src="icon-pinterest.png" alt="Pinterest" /></a>
                    </div>
                    {/* <div className="payment-options">
                        <img src="icon-visa.png" alt="Visa" />
                        <img src="icon-paypal.png" alt="Paypal" />
                        <img src="icon-amex.png" alt="American Express" />
                        <img src="icon-apple-pay.png" alt="Apple Pay" />
                        <img src="icon-google-pay.png" alt="Google Pay" />
                    </div> */}
                </div>
            </div>
            <div className="additional-info">
                <div className="info-box">
                    <h3>Delivery Info</h3>
                    <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
                </div>
                <div className="info-box">
                    <h3>30 Days Returns</h3>
                    <p>Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee.</p>
                </div>
                <div className="info-box">
                    <h3>10 Year Warranty</h3>
                    <p>Quality comes first and our products are designed to last.</p>
                </div>
            </div>
            <div className="tabs">
                <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>DESCRIPTION</button>
                <button className={activeTab === 'additional' ? 'active' : ''} onClick={() => setActiveTab('additional')}>ADDITIONAL INFORMATION</button>
                <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>REVIEWS</button>
            </div>
            <div className="tab-content">
                {activeTab === 'description' && (
                    <div>
                        <h2>More Detail</h2>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            <li>Type here your detail one by one li more add</li>
                            <li>Has been the industry’s standard dummy text ever since. Lorem Ips</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                        </ul>
                        <h2>Key Specification</h2>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            <li>Type here your detail one by one li more add</li>
                            <li>Has been the industry’s standard dummy text ever since. Lorem Ips</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'additional' && (
                    <div>
                        <h2>Additional Information</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Vendor:</td>
                                    <td>Vegist</td>
                                </tr>
                                <tr>
                                    <td>Size:</td>
                                    <td>5kg, 10kg, 1kg</td>
                                </tr>
                                <tr>
                                    <td>SKU:</td>
                                    <td>123456</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div>
                        <h2>Reviews</h2>
                        <p>No reviews yet</p>
                    </div>
                )}
            </div>
            <div className="related-products">
                <h2>Related products</h2>
                <div className="product-list">
                    {relatedProducts.map((product, index) => (
                        <div key={index} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <div className="discount">{product.discount}</div>
                            <div className="name">{product.name}</div>
                            <div className="price">
                                <span className="current-price">{product.price}</span>
                                <span className="original-price">{product.originalPrice}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopDetail;
