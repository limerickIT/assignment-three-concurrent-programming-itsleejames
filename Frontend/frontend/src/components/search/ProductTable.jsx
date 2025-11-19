import React from "react";
import Table from "react-bootstrap/Table";

export default function ProductTable({ results }) {
    if (!Array.isArray(results)) return <p>No results.</p>;

    return (
        <Table striped bordered hover responsive className="mt-4">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price (€)</th>
                <th>Manufacturer</th>
            </tr>
            </thead>
            <tbody>
            {results.map((product) => {
                const imageUrl = `http://localhost:8080/images/thumbs/${product.productId}/${product.featureImage}`;

                return (
                    <tr key={product.productId}>
                        <td style={{ width: "120px" }}>
                            <img
                                src={imageUrl}
                                alt={product.productName}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                }}
                                onError={(e) => (e.target.src = "/placeholder.png")}
                            />
                        </td>

                        <td>{product.productName}</td>
                        <td>{product.categoryId?.categoryName || "N/A"}</td>
                        <td>{product.price}</td>
                        <td>{product.manufacturer}</td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}
