import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppNavbar() {
    return (
        <Navbar expand="lg" bg="light" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
                    Zelora
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
                        <Nav.Link as={Link} to="/account">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
