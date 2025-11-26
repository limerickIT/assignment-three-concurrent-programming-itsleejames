import MainNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CompareBar from "./components/CompareBar";
import AppRoutes from "./Routes";

export default function App() {
    return (
        <>
            <MainNavbar />
            <AppRoutes />
            <CompareBar />
            <Footer />
        </>
    );
}
