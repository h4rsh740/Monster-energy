'use client';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Monster
                </Link>

                {/* Desktop Menu */}
                <div className={styles.menu}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/products" className={styles.link}>Products</Link>
                    <Link href="/news" className={styles.link}>News</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                </div>

                {/* Socials & Auth */}
                <div className={styles.socials}>
                    <a href="https://instagram.com/monsterenergy" target="_blank" className={styles.icon}><FaInstagram /></a>
                    <a href="https://facebook.com/monsterenergy" target="_blank" className={styles.icon}><FaFacebookF /></a>
                    <a href="https://youtube.com/monsterenergy" target="_blank" className={styles.icon}><FaYoutube /></a>
                    <a href="https://x.com/monsterenergy" target="_blank" className={styles.icon}><FaTwitter /></a>
                    <Link href="/login" className={styles.signInBtn}>Sign In</Link>
                </div>
            </div>
        </nav>
    );
}
