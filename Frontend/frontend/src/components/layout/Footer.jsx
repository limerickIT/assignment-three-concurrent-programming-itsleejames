import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
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

                            <li>
                                <Link to="/categories/1">Men</Link>
                            </li>
                            <li>
                                <Link to="/categories/2">Women</Link>
                            </li>
                            <li>
                                <Link to="/categories/3">Shoes</Link>
                            </li>
                            <li>
                                <Link to="/categories/4">Accessories</Link>
                            </li>

                        </ul>
                    </Col>

                    <Col md={4} sm={6} className="mb-4">
                        <h6 className="footer-heading">Support</h6>
                        <ul className="footer-list">
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/shipping">Shipping</Link>
                            </li>
                            <li>
                                <Link to="/returns">Returns</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="footer-bottom">
                <p className="m-0">© {new Date().getFullYear()} Zelora. All rights reserved<br/>Web Dev & Design by Lee Heffernan - K00297799.</p>
            </div>
        </footer>
    );
}
