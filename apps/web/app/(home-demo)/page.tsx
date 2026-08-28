import FaqFeatureGrid from "@/components/faq/faq-feature-grid";
import HeroSliderOne from "@/components/home-one/hero-slider-one";
import ShopByCategory from "@/components/home-one/shop-by-category";
import BannerGrid from "@/components/home-one/banner-grid";
import TwoColBannerGrid from "@/components/home-one/two-col-banner-grid";
import LatestBlogOne from "@/components/home-one/latest-blog-one";
import HotDealsWithTimer from "@/components/home-one/hot-deals-with-timer";
import ProductsFilterTab from "@/components/home-one/products-filter-tab";
import NewlyLaunchedProduct from "@/components/home-one/newly-launched-product";
import BestSellingProducts from "@/components/home-one/best-selling-products";
import DailyDiscountGrid from "@/components/home-one/daily-discount-grid";
import TopSellingProducts from "@/components/home-one/top-selling-products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sellzy - Multivendor eCommerce Next.js Template",
  description:
    "Discover Sellzy, a premium multivendor eCommerce Next.js template. Shop top categories, explore daily deals, and enjoy a fully responsive marketplace experience.",
  openGraph: {
    title: "Sellzy - Multivendor eCommerce Next.js Template",
    description:
      "Discover Sellzy, a premium multivendor eCommerce Next.js template. Shop top categories, explore daily deals, and enjoy a fully responsive marketplace experience.",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSliderOne />
      <FaqFeatureGrid className="py-17.5" />
      <DailyDiscountGrid />
      <BestSellingProducts />
      <ShopByCategory />
      <TopSellingProducts />
      <ProductsFilterTab />
      <BannerGrid />
      <NewlyLaunchedProduct />
      <HotDealsWithTimer />
      <TwoColBannerGrid />
      <LatestBlogOne />
    </div>
  );
}
