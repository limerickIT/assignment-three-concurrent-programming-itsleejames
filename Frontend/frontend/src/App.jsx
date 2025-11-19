import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
