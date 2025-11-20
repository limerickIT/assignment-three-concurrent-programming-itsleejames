import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WomenSection() {
    return (
        <Container className="my-5">
            <Row className="align-items-center">

                {/* IMAGE */}
                <Col md={6} className="mb-4">
                    <img
                        src="/public/home/women-hero.jpg"
                        alt="Shop Women"
                        className="img-fluid rounded shadow"
                    />
                </Col>

                {/* TEXT */}
                <Col md={6} className="text-center text-md-start">
                    <h2 className="fw-bold mb-3">Shop For Women</h2>
                    <p className="text-muted mb-4">
                        Explore our latest sustainable and stylish women’s clothing collection.
                    </p>

                    <Button
                        as={Link}
                        to="/categories/2"
                        variant="dark"
                        size="lg"
                    >
                        Browse Women's Clothing →
                    </Button>
                </Col>

            </Row>
        </Container>
    );
}
