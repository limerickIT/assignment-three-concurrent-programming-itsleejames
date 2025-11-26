import { useCompare } from "../context/CompareContext";
import { Container, Table } from "react-bootstrap";

export default function ComparePage() {
    const { compareList } = useCompare();

    if (compareList.length === 0)
        return <Container className="py-5"><h3>No products selected</h3></Container>;

    return (
        <Container className="py-5">
            <h2 className="fw-bold mb-4">Compare Products</h2>

            <Table bordered hover responsive>
                <thead>
                <tr>
                    <th>Feature</th>
                    {compareList.map((p) => (
                        <th key={p.productId}>{p.productName}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Image</td>
                    {compareList.map((p) => (
                        <td key={p.productId}>
                            <img
                                src={`http://localhost:8080/images/thumbs/${p.productId}/${p.featureImage}`}
                                style={{ width: "100%", maxWidth: 150 }}
                            />
                        </td>
                    ))}
                </tr>

                <tr>
                    <td>Price</td>
                    {compareList.map((p) => (
                        <td key={p.productId}>€{p.price}</td>
                    ))}
                </tr>

                <tr>
                    <td>Colour</td>
                    {compareList.map((p) => (
                        <td key={p.productId}>{p.colour}</td>
                    ))}
                </tr>

                <tr>
                    <td>Material</td>
                    {compareList.map((p) => (
                        <td key={p.productId}>{p.material}</td>
                    ))}
                </tr>

                <tr>
                    <td>Sustainability Rating</td>
                    {compareList.map((p) => (
                        <td key={p.productId}>{p.sustainabilityRating}</td>
                    ))}
                </tr>
                </tbody>
            </Table>
        </Container>
    );
}
