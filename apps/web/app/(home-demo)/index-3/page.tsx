import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Demo 3 - Grocery & Fresh Food | Sellzy eCommerce Template",
  description:
    "A vibrant grocery and fresh food marketplace layout with featured products, flash deals, and vendor spotlights.",
  openGraph: {
    title: "Home Demo 3 - Grocery & Fresh Food | Sellzy eCommerce Template",
    description:
      "A vibrant grocery and fresh food marketplace layout with featured products, flash deals, and vendor spotlights.",
  },
};

import BannerBentoGrid from "@/components/home-three/banner-bento-grid";
import ShopByCategoryThree from "@/components/home-three/shop-by-category-three";
import LatestBlogThree from "@/components/home-three/latest-blog-three";
import DealOfTheDay from "@/components/home-three/deal-of-the-day";
import DiscountPromo from "@/components/home-three/discount-promo";
import TopSellCarouselThree from "@/components/home-three/top-sell-carousel-three";
import HomeThreeHero from "@/components/home-three/home-three-hero";
import TodaysTopDeal from "@/components/home-three/todays-top-deal";
import PopularProductTab from "@/components/home-three/popular-product-tab";
import PremiumPicksSlider from "@/components/home-three/premium-picks-slider";
import FirmFreshGrocery from "@/components/home-three/firm-fresh-grocery";
import TwoColBannerGridThree from "@/components/home-three/two-col-banner-grid-three";

export default function HomeThree() {
  return (
    <div>
      <HomeThreeHero />
      <ShopByCategoryThree />
      <TodaysTopDeal />
      <PopularProductTab />
      <BannerBentoGrid />
      <PremiumPicksSlider />
      <DiscountPromo />
      <FirmFreshGrocery />
      <DealOfTheDay />
      <TopSellCarouselThree />
      <TwoColBannerGridThree />
      <LatestBlogThree />
    </div>
  );
}
