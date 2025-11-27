import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "How long does delivery take?",
        answer: "Delivery takes 2–4 working days in Ireland. International orders may take 5–10 days."
    },
    {
        question: "Can I return an item?",
        answer: "Yes, you can return any item within 30 days as long as it’s in original condition."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay and Klarna (Pay Later)."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order ships, you’ll get an email with a tracking link and live updates."
    },
    {
        question: "Do you offer student discounts?",
        answer: "Yes! Students get 10% off — verify your student status at checkout."
    }
];

export default function FAQPage() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <p className="faq-subtitle">Find answers to the most common questions.</p>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${openIndex === index ? "open" : ""}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {item.question}
                            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                        </div>

                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
