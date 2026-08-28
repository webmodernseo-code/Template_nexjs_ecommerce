import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Demo 4 - Fashion & Lifestyle | Sellzy eCommerce Template",
  description: "A stylish fashion and lifestyle storefront with curated collections, hand-picked products, and trending categories.",
  openGraph: {
    title: "Home Demo 4 - Fashion & Lifestyle | Sellzy eCommerce Template",
    description: "A stylish fashion and lifestyle storefront with curated collections, hand-picked products, and trending categories.",
  },
};

import CategoryTab from "@/components/home-four/category-tab";
import DiscountGridFour from "@/components/home-four/discount-grid-four";
import FeatureGridFour from "@/components/home-four/feature-grid-four";
import FlashDealTab from "@/components/home-four/flash-deal-tab";
import HandPicked from "@/components/home-four/hand-picked";
import HeroFour from "@/components/home-four/hero-four";
import HotPicks from "@/components/home-four/hot-picks";
import LogoCloud from "@/components/home-four/logo-cloud";
import MarqueeSection from "@/components/home-four/marquee-section";
import PromoBento from "@/components/home-four/promo-bento";
import ShopByCategoryFour from "@/components/home-four/shopy-by-category-four";

export default function HomeTwo() {
  return (
    <div>
      <HeroFour />
      <ShopByCategoryFour />
      <HotPicks />
      <FlashDealTab />
      <PromoBento />
      <MarqueeSection />
      <LogoCloud />
      <HandPicked />
      <DiscountGridFour />
      <CategoryTab />
      <FeatureGridFour />
    </div>
  );
}
