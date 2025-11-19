import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Header */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-grow-1 container py-4">
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default App;
