import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useCompare } from "../context/CompareContext";

export default function ProductPage() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCompare } = useCompare();

    useEffect(() => {
        setLoading(true);

        axios
            .get(`http://localhost:8080/api/products/${id}/detail`)
            .then((res) => setDetail(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading || !detail)
        return <p className="text-center mt-5">Loading...</p>;

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Img
                            variant="top"
                            src={`http://localhost:8080/images/thumbs/${detail.productId}/${detail.featureImage}`}
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
        </Container>
    );
}
