'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './news.module.css';

const MOCK_NEWS = [
    {
        _id: 1,
        date: 'Jan 28, 2026',
        title: 'Monster Energy x X-Games 2026',
        description: 'The biggest names in action sports are gathering in Aspen. Catch all the highlights and exclusive interviews with Monster Energy athletes.',
        tag: 'Sports',
        image: '/assets/news/xgames.png'
    },
    {
        _id: 2,
        date: 'Feb 05, 2026',
        title: 'New Flavor Drop: Ultra India',
        description: 'Introducing a new flavor inspired by the vibrant streets of Mumbai. Taste the spice of life with zero sugar.',
        tag: 'Product',
        image: '/assets/news/ultra_india.png'
    },
    {
        _id: 3,
        date: 'Feb 12, 2026',
        title: 'Global Gaming Championship Finals',
        description: 'Who will take home the trophy? livestream the finals on our YouTube channel.',
        tag: 'Gaming',
        image: '/assets/monster_original.png'
    }
];

export default function News() {
    const [newsItems, setNewsItems] = useState(MOCK_NEWS);

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setNewsItems(data);
                }
            })
            .catch(err => console.log('Using mock data due to API error:', err));
    }, []);
    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <h1 className={styles.title}>Latest News</h1>
            </div>

            <div className={styles.timeline}>
                {newsItems.map((item) => (
                    <div key={item._id} className={styles.newsCard}>
                        {/* Fallback to mock images if API data lacks them (or merge strategy) */}
                        <div className={styles.imageContainer}>
                            <img
                                src={(item as any).image}
                                alt={item.title}
                                className={styles.newsImage}
                                onError={(e) => {
                                    // Fallback for API data that might not have images yet
                                    if (item.title.includes('X-Games')) e.currentTarget.src = '/assets/news/xgames.png';
                                    else if (item.title.includes('Ultra')) e.currentTarget.src = '/assets/news/ultra_india.png';
                                    else e.currentTarget.src = '/assets/monster_original.png';
                                }}
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{item.date}</span>
                            <span className={styles.tag}>{item.tag}</span>
                            <h2 className={styles.headline}>{item.title}</h2>
                            <p className={styles.snippet}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
