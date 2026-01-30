import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero3D from '../components/Hero3D';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Unleash The Beast</h1>
          <p className={styles.heroSubtitle}>Power through your day with the most extreme energy drink on the planet.</p>
          <Link href="/products">
            <button className={styles.ctaButton}>Explore Drinks</button>
          </Link>
        </div>

        <Hero3D
          src="/assets/monster_can_3d.png"
          alt="Monster Energy Can 3D"
          className={styles.heroImage}
        />
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Trending Now</h2>
        <div className={styles.grid}>
          {/* Product 1 */}
          <div className={styles.card}>
            <img
              src="/assets/monster_original.png"
              alt="Monster Original"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Monster Original</h3>
            <p className={styles.cardPrice}>₹130</p>
          </div>

          {/* Product 2 */}
          <div className={styles.card}>
            <img
              src="/assets/monster_ultra.png"
              alt="Monster Ultra"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Monster Ultra</h3>
            <p className={styles.cardPrice}>₹140</p>
          </div>

          {/* Product 3 */}
          <div className={styles.card}>
            <img
              src="/assets/monster_mango.png"
              alt="Mango Loco"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Mango Loco</h3>
            <p className={styles.cardPrice}>₹150</p>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className={styles.discover}>
        <h2 className={styles.discoverTitle}>Discover the Power</h2>
        <div className={styles.discoverContent}>
          <p>
            Monster Energy isn't just a drink; it's a lifestyle in a can. Packed with essential ingredients like Taurine, Ginseng, and B-Vitamins, it’s designed to give you the mental and physical edge you need.
          </p>

          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Taurine</h3>
              <p className={styles.benefitText}>An amino acid that supports metabolic processes and athletic performance.</p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Ginseng</h3>
              <p className={styles.benefitText}>Known for boosting energy, reducing fatigue, and enhancing mental focus.</p>
            </div>

            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>B-Vitamins</h3>
              <p className={styles.benefitText}>Essential nutrients that help convert food into fuel to keep you energized.</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="https://regalesdelight.com/blogs/news/discover-the-refreshing-power-of-monster-drink" target="_blank">
              <button className={styles.ctaButton}>Read Full Article</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
