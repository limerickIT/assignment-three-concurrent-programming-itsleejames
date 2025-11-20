import React from "react";
import { Container } from "react-bootstrap";
import "./PromoBanner.css";

export default function PromoBanner() {
    return (
        <div className="promo-banner d-flex align-items-center">
            <Container className="text-center text-white">
                <h1 className="fw-bold display-4">Sustainable Style</h1>
                <p className="lead mb-4">
                    Eco-friendly fashion made for comfort. Shop our new arrivals today.
                </p>
                <a href="/categories" className="btn btn-light btn-lg px-4">
                    Shop Now →
                </a>
            </Container>
        </div>
    );
}
