import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/categories/${id}`)
            .then(res => {
                setCategory(res.data);
                if (res.data.productList) {
                    setProducts(res.data.productList);
                }
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!category) return <div className="container py-5">Loading...</div>;

    return (
        <div className="container py-5">
            <h1>{category.categoryName}</h1>

            <div className="row mt-4">
                {products.map(p => (
                    <div className="col-md-3 mb-4" key={p.productId}>
                        <div className="card shadow-sm">
                            <img
                                src={p.featureImage}
                                className="card-img-top"
                                alt={p.productName}
                            />
                            <div className="card-body">
                                <h6>{p.productName}</h6>
                                <p className="text-muted">€{p.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CategoryProducts;
