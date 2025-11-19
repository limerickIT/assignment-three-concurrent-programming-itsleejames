import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductTable from "../components/search/ProductTable";

export default function CategoryProductsPage() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/category/${id}`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <Container className="py-5">
            <h2>Category Products</h2>
            <ProductTable results={products} />
        </Container>
    );
}
