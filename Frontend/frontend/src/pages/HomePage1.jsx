import React from "react";

const HomePage = () => {
    return (
        <>
            {/* HERO */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold mb-3">
                            Welcome to Zelora
                        </h1>
                        <p className="lead">
                            Sustainable fashion, ethical brands, and modern design — all searchable through our powerful product engine.
                        </p>

                        <a href="/search" className="btn btn-primary btn-lg mt-3">
                            Search Products
                        </a>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
                            alt="Fashion"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>

            {/* FEATURES */}
            <div className="bg-light py-5 mt-4">
                <div className="container">
                    <h2 className="text-center mb-4">Why Shop With Us?</h2>

                    <div className="row g-4">
                        <div className="col-md-4 text-center">
                            <div className="p-4 border rounded shadow-sm bg-white">
                                <h4>Sustainable Clothing</h4>
                                <p>All products are sourced from ethical manufacturers.</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="p-4 border rounded shadow-sm bg-white">
                                <h4>Smart Search</h4>
                                <p>Filter by price, category, materials and more.</p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="p-4 border rounded shadow-sm bg-white">
                                <h4>Fast & Secure</h4>
                                <p>A smooth browsing experience powered by Spring Boot + React.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container py-5 text-center">
                <h2 className="mb-3 fw-bold">Ready to explore?</h2>
                <p className="lead">Start searching through our full eco-friendly catalog.</p>

                <a href="/search" className="btn btn-success btn-lg">
                    Browse Products
                </a>
            </div>
        </>
    );
};

export default HomePage;
