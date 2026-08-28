import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Demo 2 - Medical & Healthcare | Sellzy eCommerce Template",
  description: "A specialized healthcare and medical eCommerce storefront featuring product carousels, deal timers, and category-driven navigation.",
  openGraph: {
    title: "Home Demo 2 - Medical & Healthcare | Sellzy eCommerce Template",
    description: "A specialized healthcare and medical eCommerce storefront featuring product carousels, deal timers, and category-driven navigation.",
  },
};

import HeroTwo from "@/components/home-two/hero-two";
import LatestBlogTwo from "@/components/home-two/latest-blog-two";
import LovedProductSlider from "@/components/home-two/loved-product-slider";
import ShopByCategoryTwo from "@/components/home-two/shop-by-category-two";
import ThreeColCta from "@/components/home-two/three-col-cta";
import TodaysTop from "@/components/home-two/todays-top";
import FavouriteCategorySlider from "@/components/home-two/favourite-category-slider";
import ShopByBrand from "@/components/home-two/shop-by-brand";
import DiscountBanner from "@/components/home-two/discount-banner";
import NewlyLaunchProductTwo from "@/components/home-two/newly-launch-product-two";
import CenteredProductFilter from "@/components/home-two/centered-product-filter";
import LimitedTimeDeals from "@/components/home-two/limited-time-deals";
import BeautyCareProducts from "@/components/home-two/beauty-care-products";

export default function HomeTwo() {
  return (
    <div>
      <HeroTwo />
      <ShopByCategoryTwo />
      <TodaysTop />
      <LovedProductSlider />
      <ThreeColCta />
      <DiscountBanner />
      <NewlyLaunchProductTwo />
      <CenteredProductFilter />
      <LimitedTimeDeals />
      <ShopByBrand />
      <FavouriteCategorySlider />
      <BeautyCareProducts />
      <LatestBlogTwo />
    </div>
  );
}
