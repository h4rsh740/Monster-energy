import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <h1 className={styles.heroTitle}>Who We Are</h1>
                <img src="/assets/news/xgames.png" alt="X-Games" className={styles.heroBg} />
            </div>

            <div className={styles.container}>
                <section className={styles.splitSection}>
                    <div className={styles.textContent}>
                        <p className={styles.leadText}>
                            We don't do subtle. We don't do compromise. <span className={styles.highlight}>Monster Energy</span> is more than a drink, it's a lifestyle in a can.
                        </p>
                        <p className={styles.text}>
                            From the dirt tracks to the main stage, we fuel the passion of athletes, musicians, and fans who live life on the edge. Whether you're tearing up the track, rocking out at a concert, or grinding through a late-night gaming session, Monster has your back.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        <img src="/assets/monster_original.png" alt="Monster Can" className={styles.featureImage} />
                    </div>
                </section>

                <section className={styles.missionSection}>
                    <h2 className={styles.missionTitle}>Our Mission</h2>
                    <p className={styles.missionText}>
                        To unleash the beast in everyone. We believe in high energy, high performance, and high stakes. We support the scene because we are the scene.
                    </p>
                </section>
            </div>

            <Footer />
        </div>
    );
}
