import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

export default function MainNavbar() {
    return (
        <Navbar expand="lg" fixed="top" className="zelora-navbar bg-white shadow-sm py-3">
            <Container>
                <Navbar.Brand as={Link} to="/">ZELORA</Navbar.Brand>

                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>

                        <Nav.Link as={Link} to="/profile" className="ms-3">
                            <FaUser size={18} />
                        </Nav.Link>

                        <Nav.Link as={Link} to="/cart" className="ms-2">
                            <FaShoppingBag size={18} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
