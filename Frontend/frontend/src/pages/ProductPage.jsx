import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useCompare } from "../context/CompareContext";

export default function ProductPage() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCompare } = useCompare();

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Load product detail (reviews included!)
                const res = await axios.get(
                    `http://localhost:8080/api/products/${id}/detail`
                );

                setDetail(res.data);
                setReviews(res.data.reviews || []); // <-- FIXED
            } catch (err) {
                console.error(err);
                setError("Unable to load product.");
            } finally {
                setLoading(false);
            }
        };


        loadData();
    }, [id]);

    if (loading) return <p className="text-center mt-5">Loading...</p>;
    if (error) return <p className="text-center text-danger mt-5">{error}</p>;
    if (!detail) return <p className="text-center mt-5">No product found.</p>;

    const imageUrl = detail.featureImage
        ? `http://localhost:8080/images/thumbs/${detail.productId}/${detail.featureImage}`
        : "/fallback.jpg";

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Img
                            variant="top"
                            src={imageUrl}
                            onError={(e) => (e.target.src = "/fallback.jpg")}
                        />
                    </Card>
                </Col>

                <Col md={6}>
                    <h2 className="fw-bold">{detail.productName}</h2>
                    <p>{detail.description}</p>

                    <h4 className="text-success">€{detail.price}</h4>

                    <Button variant="primary" className="me-2">Add to Cart</Button>

                    <Button
                        variant="outline-secondary"
                        onClick={() => addToCompare(detail)}
                    >
                        Compare
                    </Button>
                </Col>
            </Row>

            {/* REVIEWS SECTION */}
            <Row className="mt-5">
                <Col md={12}>
                    <h3 className="fw-bold mb-3">Customer Reviews</h3>

                    {!reviews || reviews.length === 0 ? (
                        <p className="text-muted">No reviews found with rating 3 or higher.</p>
                    ) : (
                        reviews.map((r, index) => (
                            <Card className="mb-3 shadow-sm" key={index}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div>
                                            <strong>{r.customerFirstName || "Customer"}</strong>
                                            {r.customerCity && (
                                                <span className="text-muted ms-2">
                                                    ({r.customerCity})
                                                </span>
                                            )}
                                        </div>
                                        <Badge bg="warning" text="dark">
                                            {r.rating} / 5
                                        </Badge>
                                    </div>

                                    <p className="mb-1">{r.reviewText}</p>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </Col>
            </Row>
        </Container>
    );
}
