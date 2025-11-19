import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container className="py-5">
            <h2 className="mb-4">Categories</h2>

            <Row>
                {categories.map((cat) => (
                    <Col md={4} sm={6} xs={12} className="mb-4" key={cat.categoryId}>
                        <Card className="shadow-sm h-100">

                            {cat.categoryImage && (
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:8080/images/thumbs/${cat.categoryId}/${cat.categoryId}_1.png`}
                                    alt={cat.categoryName}
                                />

                            )}

                            <Card.Body>
                                <Card.Title>{cat.categoryName}</Card.Title>
                                <Link to={`/categories/${cat.categoryId}`} className="btn btn-dark">
                                    View Products →
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategoriesPage;
