import React, { useState } from "react";
import "./Contact.css";

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("We will be in touch soon!)");
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <p className="contact-subtitle">
                        We're here to help with orders, returns, sizing, or anything else.
                    </p>

                    <div className="info-box">
                        <h4>Email</h4>
                        <p>support@zelora.com</p>
                    </div>

                    <div className="info-box">
                        <h4>Customer Support</h4>
                        <p>Mon–Fri, 9AM – 6PM</p>
                    </div>

                    <div className="info-box">
                        <h4>Social</h4>
                        <p>@ZeloraOfficial on all platforms</p>
                    </div>
                </div>

                {/* RIGHT SIDE — FORM */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
