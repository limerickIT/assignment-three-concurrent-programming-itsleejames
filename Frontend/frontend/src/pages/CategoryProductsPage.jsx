import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CategoryProductsPage() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/search`, {
                params: { category: id }
            })
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="container my-5">
            <h2>Products in Category {id}</h2>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="row">
                    {products.map(p => (
                        <div className="col-md-3 mb-4" key={p.productId}>
                            <div className="card h-100">
                                <img
                                    src={p.featureImage}
                                    className="card-img-top"
                                    alt={p.productName}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.productName}</h5>
                                    <p className="card-text">€{p.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
