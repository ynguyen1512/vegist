import React from 'react';
import Slider from 'react-slick';
import './Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import cat1 from '../../assets/images/cat1.png';
import cat2 from '../../assets/images/cat2.png';
import cat3 from '../../assets/images/cat3.png';
import cat4 from '../../assets/images/cat4.png';
import cat5 from '../../assets/images/cat5.png';
import cat6 from '../../assets/images/cat6.png';
import promo1 from '../../assets/images/promo1.png';
import promo2 from '../../assets/images/promo2.png';
import promo3 from '../../assets/images/promo3.png';
import prod1 from '../../assets/images/product1.jpg';
import prod2 from '../../assets/images/product2.jpg';
import prod3 from '../../assets/images/product3.jpg';
import prod4 from '../../assets/images/product4.jpg';
import prod5 from '../../assets/images/product5.jpg';
import prod6 from '../../assets/images/product6.jpg';
import news1 from '../../assets/images/news1.jpg';
import news2 from '../../assets/images/news2.jpg';
import news3 from '../../assets/images/news3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMoneyBill, faTruck } from '@fortawesome/fontawesome-free-solid';

const Home = () => {
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const categorySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home container">
      <Slider {...bannerSettings}>
        <div className="banner">
          <div className="banner-content">
            <p className="banner-subtitle">Summer vege sale</p>
            <h1 className="banner-title">Handmade bakery shop</h1>
            <a className="banner-button" href="/shop">Shop now</a>
          </div>
          <div className="banner-image">
            <img src={slider1} alt="Croissants" />
          </div>
        </div>
        <div className="banner">
          <div className="banner-content">
            <p className="banner-subtitle">Top selling!</p>
            <h1 className="banner-title">Delicious chocolate</h1>
            <a className="banner-button" href="/shop">Shop now</a>
          </div>
          <div className="banner-image">
            <img src={slider2} alt="Chocolate" />
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <Slider {...categorySettings} className="categories-slider container mt-5">
        <div className="category">
          <img src={cat1} alt="Bagel" />
          <p>Bagel</p>
        </div>
        <div className="category">
          <img src={cat2} alt="Pie" />
          <p>Pie</p>
        </div>
        <div className="category">
          <img src={cat3} alt="Sandwich" />
          <p>Sandwich</p>
        </div>
        <div className="category">
          <img src={cat4} alt="Bread" />
          <p>Bread</p>
        </div>
        <div className="category">
          <img src={cat5} alt="Biscuit" />
          <p>Biscuit</p>
        </div>
        <div className="category">
          <img src={cat6} alt="Cake" />
          <p>Cake</p>
        </div>
      </Slider>

      <div className="promotions">
        <div className="promotion">
          <img src={promo1} alt="Fresh bread" />
          <div className="promo-content">
            <p className="promo-subtitle">Food taste</p>
            <h2 className="promo-title">Fresh bread bakery shop</h2>
            <a className="promo-button" href="/shop">Shop now</a>
          </div>
        </div>
        <div className="promotion">
          <img src={promo2} alt="Handmade bread" />
          <div className="promo-content">
            <p className="promo-subtitle">Only today</p>
            <h2 className="promo-title">100% fresh & handmade</h2>
            <a className="promo-button" href="/shop">Shop now</a>
          </div>
        </div>
        <div className="promotion">
          <img src={promo3} alt="Premium quality" />
          <div className="promo-content">
            <p className="promo-subtitle">Premium quality</p>
            <h2 className="promo-title">Bread & sweet bakery shop</h2>
            <a className="promo-button" href="/shop">Shop now</a>
          </div>
        </div>
      </div>

      <div className="trending-products">
        <h2>Trending products</h2>
        <Slider {...productSettings}>
          <div className="product">
            <div className="product-image">
              <img src={prod1} alt="Variety bread pie" />
              <span className="discount-badge">30%</span>
            </div>
            <h3>Variety bread pie</h3>
            <p className="price">€14,00 <span className="original-price">€20,00</span></p>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={prod2} alt="French loaf bread" />
            </div>
            <h3>French loaf bread</h3>
            <p className="price">€14,00</p>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={prod3} alt="Appetizing bakery bread" />
            </div>
            <h3>Appetizing bakery bread</h3>
            <p className="price">€15,00</p>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={prod4} alt="Chocolate cup cake" />
              <span className="discount-badge">25%</span>
            </div>
            <h3>Chocolate cup cake</h3>
            <p className="price">€15,00 <span className="original-price">€20,00</span></p>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={prod5} alt="Chocolate cup cake" />
              <span className="discount-badge">25%</span>
            </div>
            <h3>Chocolate cup cake</h3>
            <p className="price">€15,00 <span className="original-price">€20,00</span></p>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={prod6} alt="Chocolate cup cake" />
              <span className="discount-badge">25%</span>
            </div>
            <h3>Chocolate cup cake</h3>
            <p className="price">€15,00 <span className="original-price">€20,00</span></p>
          </div>
          {/* Add more products as needed */}
        </Slider>
      </div>

      <div className="services">
        <div className="service">
          <FontAwesomeIcon icon={faTruck}/>
          <h3>Free delivery</h3>
          <p>Free shipping for orders over $50</p>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faMoneyBill}/>
          <h3>Return & refund</h3>
          <p>Free shipping for orders over $50</p>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faHeadphones}/>
          <h3>Quality support</h3>
          <p>Free shipping for orders over $50</p>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={faHeadphones}/>
          <h3>Join newsletter</h3>
          <p>Free shipping for orders over $50</p>
        </div>
      </div>

      <div className="testimonials">
        <h2>Our customer say</h2>
        <Slider {...testimonialSettings}>
          <div className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-quote">“For customer support”</p>
              <p className="testimonial-text">
                The theme is very clean. I want to say that the support is extremely responsive and has been very patient with me. Thank you so much for your help!
              </p>
              <p className="testimonial-author">By tokenfaith</p>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-quote">“For customer support”</p>
              <p className="testimonial-text">
                We needed a number of adjustments and changes before sending the site from draft/staging to a live site. Support was quick to make the necessary adjustments and changes.
              </p>
              <p className="testimonial-author">By refine_digital</p>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </Slider>
      </div>

      <div className="recent-news">
        <h2>Recent news</h2>
        <Slider {...newsSettings} className="news-slider">
          <div className="news-item">
            <img src={news1} alt="Handmade of muffins" />
            <h3>Handmade of muffins</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...
            </p>
            <a className="news-link" href="/news">Read More</a>
          </div>
          <div className="news-item">
            <img src={news2} alt="Delicious bread on cutting board" />
            <h3>Delicious bread on cutting board</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...
            </p>
            <a className="news-link" href="/news">Read More</a>
          </div>
          <div className="news-item">
            <img src={news3} alt="Hands of baker's male knead dough" />
            <h3>Hands of baker's male knead dough</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...
            </p>
            <a className="news-link" href="/news">Read More</a>
          </div>
          {/* Add more news items as needed */}
        </Slider>
        <a className="view-all-news" href="/news">View all news</a>
      </div>
    </div>
  );
};

export default Home;
