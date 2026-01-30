'use client';
import { useState, useRef, useEffect } from 'react';
import styles from '../app/home.module.css';

interface Hero3DProps {
    src: string;
    alt: string;
    className: string;
}

export default function Hero3D({ src, alt, className }: Hero3DProps) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        // Max rotation: 25 degrees
        const xRot = yPct * -25;
        const yRot = xPct * 25;

        setRotation({ x: xRot, y: yRot });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={styles.heroVisual}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            <img
                src={src}
                alt={alt}
                className={className}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.1)`,
                    transition: 'transform 0.1s ease-out',
                    filter: `drop-shadow(${-rotation.y}px ${rotation.x + 10}px 30px var(--monster-green))`
                }}
            />
        </div>
    );
}
