import { Link } from "react-router-dom";
import { useCompare } from "../context/CompareContext";
import { Button } from "react-bootstrap";

export default function CompareBar() {
    const { compareList, removeFromCompare, clearCompare } = useCompare();

    if (compareList.length === 0) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#222",
                color: "white",
                padding: "10px 20px",
                zIndex: 9999,
            }}
        >
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-3">
                    {compareList.map((p) => (
                        <div key={p.productId} className="d-flex align-items-center gap-2">
                            <img
                                src={`http://localhost:8080/images/thumbs/${p.productId}/${p.featureImage}`}
                                height="40"
                                style={{ borderRadius: 4 }}
                            />
                            <span>{p.productName}</span>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => removeFromCompare(p.productId)}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="d-flex gap-2">
                    <Button as={Link} to="/compare" variant="primary">
                        Compare
                    </Button>
                    <Button variant="secondary" onClick={clearCompare}>
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
}
