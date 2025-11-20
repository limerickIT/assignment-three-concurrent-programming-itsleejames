import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ShopForMen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products/category/1")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">SHOP FOR MEN</h2>

                <Link to="/categories/1" className="btn btn-outline-dark">
                    View All →
                </Link>
            </div>

            <Row>
                {products.slice(0, 4).map(product => (
                    <Col md={3} sm={6} xs={6} className="mb-4" key={product.productId}>
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
