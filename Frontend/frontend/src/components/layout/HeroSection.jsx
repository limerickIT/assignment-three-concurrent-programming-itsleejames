import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-container">
            {/* Video */}
            <video
                className="hero-video"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content text-center">
                <h1 className="hero-title">SUSTAINABLE FASHION</h1>

                <div className="hero-buttons mt-4">
                    <a href="/categories/1" className="btn btn-light btn-lg mx-2">Shop Men's</a>
                    <a href="/categories/2" className="btn btn-light btn-lg mx-2">Shop Women’s</a>
                    <a href="/categories" className="btn btn-outline-light btn-lg mx-2">Shop the collection</a>
                </div>
            </div>
        </div>
    );
}
