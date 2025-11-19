import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="mb-4">Browse Categories</h1>

            <div className="row">
                {categories.map(cat => (
                    <div className="col-md-3 mb-4" key={cat.categoryId}>
                        <div className="card shadow-sm">
                            <img
                                src={cat.categoryImage}
                                className="card-img-top"
                                alt={cat.categoryName}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{cat.categoryName}</h5>
                                <a
                                    href={`/category/${cat.categoryId}`}
                                    className="btn btn-dark btn-sm"
                                >
                                    View Products
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
