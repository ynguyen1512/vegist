import React, { useState } from 'react';
import './Collection.scss';
import collection1 from '../../assets/images/collection1.jpg';
import collection2 from '../../assets/images/collection2.jpg';
import collection4 from '../../assets/images/collection4.jpg';
import collection5 from '../../assets/images/collection5.jpg';
import collection6 from '../../assets/images/collection6.jpg';
import collection7 from '../../assets/images/collection7.jpg';
import collection8 from '../../assets/images/collection8.jpg';
import collection9 from '../../assets/images/collection9.jpg';
import collection10 from '../../assets/images/collection10.jpg';

const Collection = () => {
    const items = [
        { quantity: 8, image: collection1, name: 'Bagel' },
        { quantity: 22, image: collection2, name: 'Shrimp' },
        { quantity: 8, image: collection10, name: 'Biscuit' },
        { quantity: 8, image: collection4, name: 'Bread' },
        { quantity: 16, image: collection5, name: 'Breakfast' },
        { quantity: 8, image: collection6, name: 'Cake' },
        { quantity: 8, image: collection7, name: 'Cookie' },
        { quantity: 8, image: collection8, name: 'Cupcake' },
        { quantity: 8, image: collection9, name: 'Cupcake' },
    ];

    return (
        <div className="collection">
            <div className="breadcrumb">
                Home / Collections
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <div className="quantity">{item.quantity}</div>
                        <img src={item.image} alt={item.name} />
                        <div className="name">{item.name}</div>
                        <button
                            className="shop-now"
                            onMouseEnter={(e) => e.currentTarget.style.display = 'block'}
                            onMouseLeave={(e) => e.currentTarget.style.display = 'none'}
                        >
                            SHOP NOW
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
