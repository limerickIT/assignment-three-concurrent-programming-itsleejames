import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TrendingProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center fw-bold">TRENDING NOW</h2>

            <Row>
                {products.slice(0, 12).map((product) => (
                    <Col key={product.productId} md={4} lg={2} sm={6} className="mb-4">
                        <Card className="shadow-sm h-100">

                            <Card.Img
                                variant="top"
                                src={
                                    product.featureImage?.includes(".")
                                        ? `http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}`
                                        : `http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}.png`
                                }
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/300x300?text=No+Image";
                                }}
                            />

                            <Card.Body>
                                <Card.Title className="fs-6">
                                    {product.productName}
                                </Card.Title>

                                <p className="fw-bold">€{product.price}</p>

                                <Link
                                    to={`/product/${product.productId}`}
                                    className="btn btn-dark w-100"
                                >
                                    View →
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
