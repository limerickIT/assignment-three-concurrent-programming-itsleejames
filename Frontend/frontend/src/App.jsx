import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
    return (

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/category/:id" element={<CategoryProducts />} />
            </Routes>

    );
}

export default App;
