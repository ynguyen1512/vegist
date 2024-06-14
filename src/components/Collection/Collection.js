import './Collection.scss';

const Collection = () => {
    const items = [
        { quantity: 8, image: 'assets/images/collection1.jpg', name: 'Bagel' },
        { quantity: 22, image: 'assets/images/collection2.jpg', name: 'Shrimp' },
        { quantity: 8, image: 'assets/images/collection10.jpg', name: 'Biscuit' },
        { quantity: 8, image: 'assets/images/collection4.jpg', name: 'Bread' },
        { quantity: 16, image: 'assets/images/collection5.jpg', name: 'Breakfast' },
        { quantity: 8, image: 'assets/images/collection6.jpg', name: 'Cake' },
        { quantity: 8, image: 'assets/images/collection7.jpg', name: 'Cookie' },
        { quantity: 8, image: 'assets/images/collection8.jpg', name: 'Cupcake' },
        { quantity: 8, image: 'assets/images/collection9.jpg', name: 'Cupcake' },
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
