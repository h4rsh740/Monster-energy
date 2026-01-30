'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './login.module.css';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMessage('');
        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (res.ok) {
                setMessage(isLogin ? 'Login Successful! Redirecting...' : 'Account Created! Please Login.');
                if (isLogin) {
                    // Simulate redirect
                    setTimeout(() => window.location.href = '/', 1500);
                } else {
                    setTimeout(() => setIsLogin(true), 1500);
                }
            } else {
                setMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setMessage('Server error. Ensure backend is running.');
        }
    };

    return (
        <div className={styles.main}>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.formBox}>
                    <h1 className={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</h1>

                    {message && <p style={{ color: 'var(--monster-green)', marginBottom: '1rem' }}>{message}</p>}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={styles.input}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className={styles.input}
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <input
                                type="password"
                                name="password"
                                className={styles.input}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button className={styles.btn}>{isLogin ? 'Login' : 'Create Account'}</button>
                    </form>

                    <p className={styles.switch}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <span className={styles.link} onClick={() => { setIsLogin(!isLogin); setMessage(''); }}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </span>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
