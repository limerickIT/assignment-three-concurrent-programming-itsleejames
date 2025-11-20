import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FootwearSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products")
            .then((res) => {
                // Filter footwear category IDs: Shoes = 3, Sneakers = 9
                const footwear = res.data.filter(
                    (p) => p.categoryId.categoryId === 3 || p.categoryId.categoryId === 9
                );

                setProducts(footwear.slice(0, 6)); // Display 6 items max
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center fw-bold">FOOTWEAR</h2>

            <Row>
                {products.map((product) => (
                    <Col md={4} lg={2} sm={6} xs={6} className="mb-4" key={product.productId}>
                        <Card className="shadow-sm h-100">
                            <Card.Img
                                variant="top"
                                className="card-img-top"
                                src={`http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}`}
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
