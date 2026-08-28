import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Demo 5 - Electronics & Gadgets | Sellzy eCommerce Template",
  description: "A modern electronics marketplace featuring deal countdowns, brand showcases, and a tech-focused product grid.",
  openGraph: {
    title: "Home Demo 5 - Electronics & Gadgets | Sellzy eCommerce Template",
    description: "A modern electronics marketplace featuring deal countdowns, brand showcases, and a tech-focused product grid.",
  },
};

import Bassboost from "@/components/home-five/bassboost";
import CategoryFive from "@/components/home-five/category-five";
import DealCoutdown from "@/components/home-five/deal-coutdown";
import DealOfTheDayFive from "@/components/home-five/deal-of-the-day-five";
import FeatureGridFive from "@/components/home-five/feature-grid-five";
import FourColumnPromoBanner from "@/components/home-five/four-column-promo-banner";
import HeroFive from "@/components/home-five/hero-five";
import LimitedTimeSteals from "@/components/home-five/limited-time-steals";
import SmartWristTechnology from "@/components/home-five/smart-wrist-technology";
import ThreeColDiscountGrid from "@/components/home-five/three-col-discount-grid";

export default function HomeFive() {
  return (
    <div>
      <HeroFive />
      <CategoryFive />
      <LimitedTimeSteals />
      <DealCoutdown />
      <Bassboost />
      <FourColumnPromoBanner />
      <DealOfTheDayFive />
      <ThreeColDiscountGrid />
      <FeatureGridFive />
      <SmartWristTechnology />
    </div>
  );
}
