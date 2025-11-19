import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const CategoryProductsPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/categories/${id}/products`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <Container className="py-5">
            <h2 className="mb-4">Products in this Category</h2>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <Row>
                    {products.map((p) => (
                        <Col md={4} key={p.productId} className="mb-4">
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:8080/images/thumbs/${p.productId}/${p.featureImage}`}
                                />
                                <Card.Body>
                                    <Card.Title>{p.productName}</Card.Title>
                                    <p>€{p.price}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default CategoryProductsPage;
