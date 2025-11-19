import { useState } from "react";

export default function SearchFilters({ onSearch }) {
    const [filters, setFilters] = useState({
        name: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        keywords: "",
        recentOnly: false,
    });

    const update = (field, value) => {
        setFilters({ ...filters, [field]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        onSearch(filters);
    };

    return (
        <form
            onSubmit={submit}
            className="p-3 mb-4 border rounded bg-light shadow-sm"
        >
            <div className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={filters.name}
                        onChange={(e) => update("name", e.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={filters.category}
                        onChange={(e) => update("category", e.target.value)}
                    />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Min Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={filters.minPrice}
                        onChange={(e) => update("minPrice", e.target.value)}
                    />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Max Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={filters.maxPrice}
                        onChange={(e) => update("maxPrice", e.target.value)}
                    />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Keywords (in description)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={filters.keywords}
                        onChange={(e) => update("keywords", e.target.value)}
                    />
                </div>

                <div className="col-md-3 d-flex align-items-center">
                    <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={filters.recentOnly}
                        onChange={(e) => update("recentOnly", e.target.checked)}
                    />
                    <label className="form-check-label">Recently added</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
                Search
            </button>
        </form>
    );
}
