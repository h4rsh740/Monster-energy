'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.wrapper}>
                <h1 className={styles.pageTitle}>Get In Touch</h1>

                <div className={styles.contentGrid}>
                    {/* Contact Form */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Contact Support</h2>
                        <p className={styles.subText}>Got a question? We're here to help.</p>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="NAME" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="EMAIL" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <select className={styles.select}>
                                    <option>General Inquiry</option>
                                    <option>Sponsorship</option>
                                    <option>Product Issue</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea placeholder="MESSAGE" className={styles.textarea}></textarea>
                            </div>
                            <button className={styles.submitBtn}>SEND MESSAGE</button>
                        </form>
                    </div>

                    {/* Newsletter / Info */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Join The Legion</h2>
                        <p className={styles.subText}>Sign up for exclusive drops, event invites, and heavy metal news.</p>

                        <div className={styles.newsletterBox}>
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className={styles.newsletterInput}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        const email = e.currentTarget.value;
                                        if (!email) return;
                                        try {
                                            const res = await fetch('/api/subscribe', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ email })
                                            });
                                            const data = await res.json();
                                            alert(data.message);
                                            if (res.ok) e.currentTarget.value = '';
                                        } catch (err) {
                                            alert('Failed to subscribe.');
                                        }
                                    }
                                }}
                            />
                            <button
                                className={styles.newsletterBtn}
                                onClick={async (e) => {
                                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                    const email = input.value;
                                    if (!email) return;
                                    try {
                                        const res = await fetch('/api/subscribe', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ email })
                                        });
                                        const data = await res.json();
                                        alert(data.message);
                                        if (res.ok) input.value = '';
                                    } catch (err) {
                                        alert('Failed to subscribe.');
                                    }
                                }}
                            >
                                SUBSCRIBE
                            </button>
                        </div>

                        <div className={styles.infoBox}>
                            <h3 className={styles.infoTitle}>Headquarters</h3>
                            <p>1 Monster Way, Corona, CA 92879</p>
                            <br />
                            <h3 className={styles.infoTitle}>Press Inquiries</h3>
                            <p>pr@monsterenergy.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
