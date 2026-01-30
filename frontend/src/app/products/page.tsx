'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './products.module.css';

const MOCK_PRODUCTS = [
    { _id: 1, name: 'Monster Original', size: '500ml', price: 130, category: 'Energy Drink', color: '#00FF2A', image: '/assets/monster_original.png' },
    { _id: 2, name: 'Monster Ultra', size: '500ml', price: 140, category: 'Zero Sugar', color: '#FFFFFF', image: '/assets/monster_ultra.png' },
    { _id: 3, name: 'Mango Loco', size: '500ml', price: 150, category: 'Juice', color: '#FFA500', image: '/assets/monster_mango.png' },
    { _id: 4, name: 'Pipeline Punch', size: '500ml', price: 150, category: 'Juice', color: '#FF69B4', image: '/assets/monster_pipeline.png' },
    { _id: 5, name: 'Pacific Punch', size: '500ml', price: 150, category: 'Juice', color: '#FF4500', image: '/assets/monster_pacific.png' },
    { _id: 6, name: 'Assault', size: '500ml', price: 135, category: 'Energy Drink', color: '#FF0000', image: '/assets/monster_assault.png' },
];

export default function Products() {
    const [products, setProducts] = useState(MOCK_PRODUCTS);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    // Merge API data with local images
                    const updatedProducts = data.map(product => {
                        if (product.name === 'Monster Original') return { ...product, image: '/assets/monster_original.png' };
                        if (product.name === 'Monster Ultra') return { ...product, image: '/assets/monster_ultra.png' };
                        if (product.name === 'Mango Loco') return { ...product, image: '/assets/monster_mango.png' };
                        if (product.name === 'Pipeline Punch') return { ...product, image: '/assets/monster_pipeline.png' };
                        if (product.name === 'Pacific Punch') return { ...product, image: '/assets/monster_pacific.png' };
                        if (product.name === 'Assault') return { ...product, image: '/assets/monster_assault.png' };
                        return product;
                    });
                    setProducts(updatedProducts);
                }
            })
            .catch(err => console.log('Using mock data due to API error:', err));
    }, []);

    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <h1 className={styles.title}>Energy Drinks</h1>
                <p style={{ color: '#888' }}>Fuel your destiny.</p>
            </div>

            <div className={styles.grid}>
                {products.map((product, index) => (
                    <div key={product._id || index} className={styles.card}>
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        ) : (
                            <div className={styles.imagePlaceholder} style={{ borderBottom: `2px solid ${product.color}` }}>
                                {product.name}
                            </div>
                        )}
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productSize}>{product.size}</p>
                        <p className={styles.productPrice}>₹{product.price}</p>
                        <button
                            className={styles.buyBtn}
                            onClick={() => {
                                // Simple cart logic
                                const cart = JSON.parse(localStorage.getItem('monster_cart') || '[]');
                                cart.push(product);
                                localStorage.setItem('monster_cart', JSON.stringify(cart));
                                alert(`${product.name} added to your stash! 🤘`);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
