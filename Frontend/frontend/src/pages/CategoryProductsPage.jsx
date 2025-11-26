import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function CategoryProductsPage() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/category/${id}`)
            .then((res) => {
                console.log("CATEGORY PRODUCTS:", res.data);
                setProducts(res.data);
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <Container className="py-5">
            <h2 className="mb-4 fw-bold">Category Products</h2>

            <Row>
                {products.length === 0 && <p>No products found.</p>}

                {products.map((product) => (
                    <Col md={4} lg={3} sm={6} className="mb-4" key={product.productId}>
                        <Card className="shadow-sm h-100">
                            <Card.Img
                                variant="top"
                                src={`http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}`}
                                alt={product.productName}
                            />

                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.productName}</Card.Title>
                                <p className="mb-3">€{product.price}</p>

                                <Button
                                    as={Link}
                                    to={`/product/${product.productId}`}
                                    variant="primary"
                                    className="mt-auto"
                                >
                                    View
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
