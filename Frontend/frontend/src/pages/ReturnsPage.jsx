import React from "react";
import "./Returns.css";

export default function ReturnsPage() {
    return (
        <div className="returns-wrapper">
            <div className="returns-container">

                <h1 className="returns-title">Returns & Refunds</h1>
                <p className="returns-subtitle">
                    If something isn’t perfect, returning it is simple and hassle-free.
                </p>

                {/* Section: Overview */}
                <div className="returns-section">
                    <h2>Our Return Policy</h2>
                    <p>
                        You can return any item within <strong>30 days</strong> of receiving your order.
                        Items must be unused, unwashed, and in their original packaging.
                    </p>
                </div>

                {/* Section: Return Conditions */}
                <div className="returns-section">
                    <h2>Return Conditions</h2>
                    <ul className="returns-list">
                        <li>Items must be in original condition.</li>
                        <li>Clothing must have all tags attached.</li>
                        <li>Footwear must be unworn and in original box.</li>
                        <li>Accessories must be unopened and unused.</li>
                        <li>Sale items can be returned unless marked “Final Sale”.</li>
                    </ul>
                </div>

                {/* Section: How to return */}
                <div className="returns-section">
                    <h2>How to Return an Item</h2>
                    <ol className="returns-list-numbered">
                        <li>Go to your account & open your recent orders.</li>
                        <li>Select the item you want to return.</li>
                        <li>Choose the reason for the return.</li>
                        <li>Print the prepaid return label.</li>
                        <li>Drop off at your nearest courier point.</li>
                    </ol>
                </div>

                {/* Section: Refunds */}
                <div className="returns-section">
                    <h2>Refund Process</h2>
                    <p>
                        Once your return is received and inspected, we will email you to confirm approval.
                        Approved refunds are processed within <strong>3–7 business days</strong> back to your
                        original payment method.
                    </p>
                </div>

                {/* Section: Exchanges */}
                <div className="returns-section">
                    <h2>Exchanges</h2>
                    <p>
                        To exchange an item, simply place a new order for the size or style you want,
                        and return the original product for a refund.
                    </p>
                </div>

                {/* Section: Faulty items */}
                <div className="returns-section">
                    <h2>Faulty or Incorrect Items</h2>
                    <p>
                        If you received a damaged or incorrect item, contact us at
                        <strong> support@zelora.com</strong> within 7 days and we’ll fix it immediately.
                    </p>
                </div>

            </div>
        </div>
    );
}
