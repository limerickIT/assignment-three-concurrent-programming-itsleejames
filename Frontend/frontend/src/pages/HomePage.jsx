import React from "react";
import HeroSection from "../components/layout/HeroSection";
import TrendingNow from "../components/layout/TrendingNow.jsx";
import ShopForMen from "../components/layout/ShopForMen.jsx";
import WomenSection from "../components/layout/WomensSection.jsx";
import FootwearSection from "../components/layout/FootwearSection.jsx";
import PromoBanner from "../components/layout/PromoBanner.jsx";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WomenSection />
            <TrendingNow />
            <ShopForMen />
            <FootwearSection />
            <PromoBanner />


        </>

    );
}


