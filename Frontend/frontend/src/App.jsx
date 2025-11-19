import Routes from "./Routes";
import MainNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <>
            <MainNavbar />

            <div className="content-wrapper">
                <Routes />
            </div>

            <Footer />
        </>
    );
}
