import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductTable from "../components/search/ProductTable";

const SearchPage = () => {
    const [params] = useSearchParams();
    const initialQuery = params.get("query") || "";

    const [query, setQuery] = useState({
        name: initialQuery,
        category: "",
        minPrice: "",
        maxPrice: "",
        keywords: ""
    });

    const [results, setResults] = useState([]);

    useEffect(() => {
        if (initialQuery.trim() !== "") handleSearch();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/products/search", {
                params: query,
            });
            setResults(response.data);
        } catch (error) {
            console.error("Search error:", error);
        }
    };


    return (
        <div className="container py-4">
            <h2>Product Search</h2>

            <div className="row g-3 mt-3">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        placeholder="Product name"
                        value={query.name}
                        onChange={(e) => setQuery({ ...query, name: e.target.value })}
                    />
                </div>

                <div className="col-md-4">
                    <input
                        className="form-control"
                        placeholder="Category"
                        value={query.category}
                        onChange={(e) => setQuery({ ...query, category: e.target.value })}
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Min Price"
                        value={query.minPrice}
                        onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Max Price"
                        value={query.maxPrice}
                        onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
                    />
                </div>

                <div className="col-md-12">
                    <input
                        className="form-control"
                        placeholder="Keywords"
                        value={query.keywords}
                        onChange={(e) => setQuery({ ...query, keywords: e.target.value })}
                    />
                </div>

                <div className="col-md-12 text-end">
                    <button onClick={handleSearch} className="btn btn-primary mt-2">
                        Search
                    </button>
                </div>
            </div>

            <ProductTable results={results} />
        </div>
    );
};

export default SearchPage;
