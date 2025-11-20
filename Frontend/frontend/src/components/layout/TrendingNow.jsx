import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TrendingProducts() {
    const [products, setProducts] = useState([]);

    // Prevent useEffect from running twice in React Strict Mode
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return; // ⛔ Stop double call
        hasFetched.current = true;

        axios.get("http://localhost:8080/api/products")
            .then(res => {
                console.log("FINAL Products:", res.data);
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <Container className="trending-wrapper my-5">
            <h2 className="mb-4 text-center fw-bold">TRENDING NOW</h2>

            <Row>
                {products.slice(0, 6).map(product => (
                    <Col md={4} lg={2} sm={6} xs={6} className="mb-4" key={product.productId}>
                        <Card className="shadow-sm h-100">
                            <Card.Img
                                variant="top"
                                className="card-img-top"
                                src={
                                    product.featureImage?.startsWith("http")
                                        ? product.featureImage
                                        : `http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}`
                                }
                            />
                            <Card.Body>
                                <Card.Title className="fs-6">{product.productName}</Card.Title>
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
