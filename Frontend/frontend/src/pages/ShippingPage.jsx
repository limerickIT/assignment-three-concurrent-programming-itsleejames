import React from "react";
import "./Shipping.css";

export default function ShippingPage() {
    return (
        <div className="shipping-wrapper">
            <div className="shipping-container">

                <h1 className="shipping-title">Shipping Information</h1>
                <p className="shipping-subtitle">
                    Clear and simple delivery options to get your order to you fast.
                </p>

                {/* SECTION: Delivery Times */}
                <div className="shipping-section">
                    <h2>Delivery Times</h2>
                    <p>We aim to dispatch all orders within 24 hours.</p>

                    <div className="shipping-grid">
                        <div className="shipping-card">
                            <h3>Standard Delivery</h3>
                            <p>2–4 working days</p>
                            <span className="tag">€4.99</span>
                        </div>

                        <div className="shipping-card">
                            <h3>Express Delivery</h3>
                            <p>1–2 working days</p>
                            <span className="tag">€9.99</span>
                        </div>

                        <div className="shipping-card">
                            <h3>Next-Day Delivery</h3>
                            <p>Order before 2PM</p>
                            <span className="tag">€14.99</span>
                        </div>
                    </div>
                </div>

                {/* SECTION: Shipping Costs */}
                <div className="shipping-section">
                    <h2>Shipping Costs</h2>
                    <ul className="shipping-list">
                        <li>Free shipping on orders over <strong>€75</strong>.</li>
                        <li>International delivery varies by region.</li>
                        <li>All prices include VAT.</li>
                    </ul>
                </div>

                {/* SECTION: Couriers */}
                <div className="shipping-section">
                    <h2>Couriers</h2>
                    <p>We use trusted partners to ensure safe and fast delivery:</p>

                    <ul className="shipping-list">
                        <li>An Post</li>
                        <li>DPD</li>
                        <li>Fastway</li>
                        <li>DHL (International)</li>
                    </ul>
                </div>

                {/* SECTION: Tracking */}
                <div className="shipping-section">
                    <h2>Order Tracking</h2>
                    <p>
                        Once your order is shipped, you will receive an email with a live tracking link.
                    </p>
                </div>

                {/* SECTION: Delays */}
                <div className="shipping-section">
                    <h2>Possible Delays</h2>
                    <p>
                        During busy periods (Black Friday, Christmas), delivery times may be longer.
                        We appreciate your patience and recommend placing orders early.
                    </p>
                </div>

            </div>
        </div>
    );
}
