import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="zelora-footer">
            <Container className="py-5">
                <Row>
                    <Col md={4} sm={12} className="mb-4">
                        <h5 className="footer-title">ZELORA</h5>
                        <p>
                            Fashion, sustainability & style – curated for you.
                        </p>

                        <div className="social-icons">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaTiktok />
                        </div>
                    </Col>

                    <Col md={4} sm={6} className="mb-4">
                        <h6 className="footer-heading">Shop</h6>
                        <ul className="footer-list">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                        </ul>
                    </Col>

                    <Col md={4} sm={6} className="mb-4">
                        <h6 className="footer-heading">Support</h6>
                        <ul className="footer-list">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="footer-bottom">
                <p className="m-0">© {new Date().getFullYear()} Zelora. All rights reserved.</p>
            </div>
        </footer>
    );
}
