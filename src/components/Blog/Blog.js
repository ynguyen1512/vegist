import React from 'react';
import './Blog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/fontawesome-free-solid';

const Blog = () => {
  const recentPosts = [
    { image: 'assets/images/blog1.jpg', date: 'May 13, 2023', title: 'All time fresh every time healthy...' },
    { image: 'assets/images/blog2.jpg', date: 'May 13, 2023', title: 'Vegina special liquide fesh vagi' },
    { image: 'assets/images/blog3.jpg', date: 'May 13, 2023', title: 'Green onion knife and salad...' },
  ];

  const categories = [
    'Fresh fruits',
    'Organic wine',
    'Organic juice',
    'Dairy & cheese',
    'Fresh meat',
  ];

  const tags = [
    'DINNER', 'GROCERY', 'HANDMADE', 'ORGANIC', 'PASTA'
  ];

  const news = [
    { image: 'assets/images/news1.jpg', title: 'All time fresh every time healthy', date: 'May 13, 2023', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...' },
    { image: 'assets/images/news2.jpg', title: 'Vegina special liquide fesh vagi', date: 'May 13, 2023', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...' },
    { image: 'assets/images/news3.jpg', title: 'Green onion knife and salad...', date: 'May 13, 2023', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...' },
    { image: 'assets/images/news4.jpg', title: 'Healthy food for healthy life', date: 'May 13, 2023', excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ...' },
  ];

  return (
    <div className="blog">
      <div className="breadcrumbs">
        <a href="/">Home</a> / <span>News</span>
      </div>
      <div className="blog-container">
        <div className="blog-sidebar">
          <div className="search">
            <input type="text" placeholder="Search" />
            <button><FontAwesomeIcon icon={faSearch}/></button>
          </div>
          <div className="recent-posts">
            <h3>Recent posts</h3>
            <ul>
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <img src={post.image} alt={post.title} />
                  <div className="post-info">
                    <span>{post.date}</span>
                    <p>{post.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <div className="tags">
            <h3>Tags</h3>
            <div className="tag-list">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="blog-content">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <img src={item.image} alt={item.title} />
              <div className="news-info">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="/">Read More <FontAwesomeIcon icon={faArrowRight}/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
