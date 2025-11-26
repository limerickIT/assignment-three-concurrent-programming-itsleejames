import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

export default function CartPage() {
    // Temporary dummy cart data — to replace with backend at later stage
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Eco-Friendly Hoodie",
            price: 49.99,
            quantity: 1,
            image: "/public/home/women-hero.jpg"
        },
        {
            id: 2,
            name: "Sustainable T-Shirt",
            price: 19.99,
            quantity: 2,
            image: "/public/home/women-hero.jpg"
        }
    ]);

    const updateQuantity = (id, amount) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                        : item
                )
        );
    };

    const removeItem = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container className="py-5">
            <h1 className="mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <h3>Your cart is empty</h3>
                    <Link to="/" className="btn btn-primary mt-3">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <Table bordered hover responsive>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th style={{ width: "150px" }}>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Row>
                                        <Col xs={3}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded"
                                            />
                                        </Col>
                                        <Col xs={9}>
                                            <strong>{item.name}</strong>
                                        </Col>
                                    </Row>
                                </td>

                                <td>€{item.price.toFixed(2)}</td>

                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >
                                            -
                                        </Button>

                                        <span>{item.quantity}</span>

                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </td>

                                <td>€{(item.price * item.quantity).toFixed(2)}</td>

                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                    <div className="d-flex justify-content-end mt-4">
                        <div className="text-end">
                            <h4>Subtotal: €{total.toFixed(2)}</h4>

                            <Link to="/checkout" className="btn btn-success mt-3">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
}
