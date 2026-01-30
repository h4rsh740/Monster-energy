import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.brand}>
                    <h2>Monster Energy</h2>
                    <p>Unleash the Beast. Fueling athletes, musicians, and fans worldwide.</p>
                </div>

                <div className={styles.socials}>
                    <a href="https://instagram.com/monsterenergy" target="_blank" className={styles.iconWrapper}><FaInstagram size={18} /></a>
                    <a href="https://facebook.com/monsterenergy" target="_blank" className={styles.iconWrapper}><FaFacebookF size={18} /></a>
                    <a href="https://youtube.com/monsterenergy" target="_blank" className={styles.iconWrapper}><FaYoutube size={18} /></a>
                    <a href="https://x.com/monsterenergy" target="_blank" className={styles.iconWrapper}><FaTwitter size={18} /></a>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Monster Energy Company. All Rights Reserved.
            </div>
        </footer>
    );
}
