import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Container className="py-5">
            <h2 className="mb-4 fw-bold">Categories</h2>

            <Row>
                {categories.map((cat, index) => (
                    <Col md={4} sm={6} xs={12} className="mb-4" key={cat.categoryId}>
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="shadow-sm h-100">

                                {cat.categoryImage && (
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:8080/images/thumbs/${cat.categoryId}/${cat.categoryId}_1.png`}
                                        alt={cat.categoryName}
                                    />
                                )}

                                <Card.Body>
                                    <Card.Title className="fw-bold">{cat.categoryName}</Card.Title>

                                    <Link
                                        to={`/categories/${cat.categoryId}`}
                                        className="btn btn-dark w-100"
                                    >
                                        View Products →
                                    </Link>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategoriesPage;
