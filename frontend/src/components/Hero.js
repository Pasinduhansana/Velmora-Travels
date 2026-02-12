"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const slides = [
    {
        id: 1,
        image: "/hero-1.png",
        subtitle: "ELEVATE YOUR TRAVEL JOURNEY",
        title: "Experience\nThe Magic Of\nTravel !",
    },
    {
        id: 2,
        image: "/hero-2.png",
        subtitle: "MAGICAL WILDLIFE SUNSETS",
        title: "Witness\nThe Golden\nElephant Trails",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // auto-change every 3 seconds as requested

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.heroWrapper}>
        <section className={styles.heroContainer}>
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.backgroundImage} ${index === currentIndex ? styles.active : ""}`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                />
            ))}

            <div className={styles.overlay} />

            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>Tourpoint</div>
                <div className={styles.navLinks}>
                    <a href="#" className={styles.activeLink}>Home</a>
                    <a href="#">Tour</a>
                    <a href="#">About</a>
                    <a href="#">Packages</a>
                    <a href="#">Booking</a>
                </div>
                <button className={styles.bookTripBtn}>Book Trip</button>
            </nav>

            <div className={styles.mainContent}>
                {/* Left Indicators */}
                <div className={styles.leftIndicators}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                    <div className={styles.verticalLine}></div>
                </div>

                {/* Text Content */}
                <div className={styles.textContent}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.slideText} ${index === currentIndex ? styles.activeSlideText : ""}`}
                        >
                            <div className={styles.subtitle}>{slide.subtitle}</div>
                            <h1 className={styles.title}>{slide.title}</h1>
                        </div>
                    ))}

                    <div className={styles.controls}>
                        <button className={styles.ctaButton}>Book a Trip Now</button>
                        <button className={styles.playButton}>
                            <span className={styles.playIcon}>◐</span>
                        </button>
                    </div>
                </div>

                {/* Glass Card */}
                <div className={styles.glassCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.knowMore}>Know More</span>
                        <span className={styles.arrowIcon}>→</span>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.avatarGroup}>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop)' }}></div>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop)' }}></div>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop)' }}></div>
                        </div>
                        <div className={styles.cardText}>
                            <strong>Awesome Places</strong>
                            <p>Discover The Sri Lanka one Adventure At a Time!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Brand Logos */}
            <div className={styles.bottomBar}>
                <div className={styles.socialFollow}>
                    <span>Follow</span>
                    <div className={styles.socialIcons}>
                        <span>𝕏</span>
                        <span>f</span>
                        <span>f</span>
                    </div>
                </div>
                <div className={styles.brandLogos}>
                    <span>airbnb</span>
                    <span>Booking.com</span>
                    <span>Tripadvisor.com</span>
                    <span>Trivago</span>
                    <span>Expedia</span>
                </div>
            </div>

        </section>
        </div>
    );
}
