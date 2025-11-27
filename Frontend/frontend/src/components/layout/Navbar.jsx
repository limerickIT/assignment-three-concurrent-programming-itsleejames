import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";

export default function MainNavbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") return;

        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <Navbar expand="lg" fixed="top" className="zelora-navbar bg-white shadow-sm py-3">
            <Container>

                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
                    ZELORA
                </Navbar.Brand>

                <div className="d-none d-lg-block ms-5">
                    {/* Premium search bar */}
                    <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search-btn">
                            <FaSearch />
                        </button>
                    </form>
                </div>

                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">

                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/categories/1">Men</Nav.Link>
                        <Nav.Link as={Link} to="/categories/2">Women</Nav.Link>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>

                        <Nav.Link as={Link} to="/login" className="ms-3">
                            <FaUser size={18} />
                        </Nav.Link>

                        <Nav.Link as={Link} to="/cart" className="ms-2">
                            <FaShoppingBag size={18} />
                        </Nav.Link>
                    </Nav>

                    {/* Search bar in mobile menu */}
                    <div className="d-lg-none mt-3 w-100">
                        <form className="nav-search-bar" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="search-btn">
                                <FaSearch />
                            </button>
                        </form>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
