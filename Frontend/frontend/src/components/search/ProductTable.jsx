import React from "react";

const ProductTable = ({ results }) => {
    if (!Array.isArray(results)) return <p>No results</p>;

    return (
        <table className="table table-striped mt-4">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price (€)</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {results.map((p) => (
                <tr key={p.productId}>
                    <td>{p.productId}</td>
                    <td>{p.productName}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td>{p.categoryId?.categoryName || "N/A"}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
