import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoryPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />

            {/* CATEGORIES */}
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryProductsPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
