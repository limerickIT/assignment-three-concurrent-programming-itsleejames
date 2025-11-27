import React from "react";
import HeroSection from "../components/layout/HeroSection";
import TrendingNow from "../components/layout/TrendingNow.jsx";
import ShopForMen from "../components/layout/ShopForMen.jsx";
import WomenSection from "../components/layout/WomensSection.jsx";
import FootwearSection from "../components/layout/FootwearSection.jsx";
import PromoBanner from "../components/layout/PromoBanner.jsx";

import FadeIn from "../components/animations/FadeIn";
import FAQPage from "./FAQPage.jsx";

export default function HomePage() {
    return (
        <>
            <FadeIn delay={0}>
                <HeroSection />
            </FadeIn>

            <FadeIn delay={0.1}>
                <WomenSection />
            </FadeIn>

            <FadeIn delay={0.2}>
                <TrendingNow />
            </FadeIn>

            <FadeIn delay={0.3}>
                <ShopForMen />
            </FadeIn>

            <FadeIn delay={0.4}>
                <FootwearSection />
            </FadeIn>

            <FadeIn delay={0.5}>
                <PromoBanner />
            </FadeIn>

            <FadeIn delay={0.5}>


            <FAQPage />

            </FadeIn>
        </>
    );
}
