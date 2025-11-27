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

                const res = await axios.get(
                    `http://localhost:8080/api/products/${id}/detail`
                );

                setDetail(res.data);
                setReviews(res.data.reviews || []);
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

    // Extract values from backend DTO
    const {
        totalReviews,
        averageRating,
        stockMessage,
        availableQuantity,
        manufacturer,
        categoryName,
        sustainabilityRating
    } = detail;

    const imageUrl = detail.featureImage
        ? `http://localhost:8080/images/thumbs/${detail.productId}/${detail.featureImage}`
        : "/fallback.jpg";

    // Stock levels colour styling
    const getStockColor = () => {
        if (stockMessage.toLowerCase().includes("out")) return "text-danger fw-bold";
        if (stockMessage.toLowerCase().includes("low")) return "text-warning fw-bold";
        return "text-success fw-bold";
    };

    return (
        <Container className="py-5">
            <Row>
                {/* LEFT COLUMN */}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Img
                            variant="top"
                            src={imageUrl}
                            onError={(e) => (e.target.src = "/fallback.jpg")}
                        />
                    </Card>
                </Col>

                {/* RIGHT COLUMN */}
                <Col md={6}>
                    <h2 className="fw-bold">{detail.productName}</h2>
                    <p className="text-muted">{detail.description}</p>

                    <h3 className="text-success fw-bold">€{detail.price}</h3>

                    <div className="d-flex gap-2 mb-4">
                        <Button variant="primary">Add to Cart</Button>

                        <Button
                            variant="outline-secondary"
                            onClick={() => addToCompare(detail)}
                        >
                            Compare
                        </Button>
                    </div>

                    {/* --- STOCK INFO  --- */}
                    <div className="mb-3 p-3 rounded border bg-light">
                        <p className={`mb-1 ${getStockColor()}`}>{stockMessage}</p>

                        {availableQuantity > 0 && (
                            <p className="text-muted mb-1">
                                {availableQuantity} units available
                            </p>
                        )}
                    </div>

                    {/* --- Supllier etc --- */}
                    <div className="mb-4 p-3 rounded border bg-white shadow-sm">
                        {manufacturer && (
                            <p className="mb-1">
                                <strong>Manufacturer:</strong> {manufacturer}
                            </p>
                        )}

                        {categoryName && (
                            <p className="mb-1">
                                <strong>Category:</strong> {categoryName}
                            </p>
                        )}

                        {sustainabilityRating && (
                            <p className="mb-0">
                                <strong>Sustainability Score:</strong>{" "}
                                {sustainabilityRating} / 5
                            </p>
                        )}
                    </div>

                    {/* --- RATING SUMMARY --- */}
                    <div className="mb-4">
                        {totalReviews > 0 ? (
                            <p className="mb-0">
                                ⭐ <strong>{averageRating.toFixed(1)}</strong> / 5{" "}
                                <span className="text-muted">
                                    ({totalReviews} reviews)
                                </span>
                            </p>
                        ) : (
                            <p className="text-muted">No reviews yet.</p>
                        )}
                    </div>
                </Col>
            </Row>

            {/* --- REVIEWS  --- */}
            <Row className="mt-5">
                <Col md={12}>
                    <h3 className="fw-bold mb-3">Customer Reviews</h3>

                    {!reviews || reviews.length === 0 ? (
                        <p className="text-muted">No reviews found with rating 3+.</p>
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
