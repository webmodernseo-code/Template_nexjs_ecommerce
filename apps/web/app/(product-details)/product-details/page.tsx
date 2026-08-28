import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details | Sellzy - Multivendor eCommerce Template",
  description: "View comprehensive product information including images, specifications, pricing, and verified customer reviews.",
  openGraph: {
    title: "Product Details | Sellzy - Multivendor eCommerce Template",
    description: "View comprehensive product information including images, specifications, pricing, and verified customer reviews.",
  },
};

import Breadcrumb from "@/components/common/breadcrumb";
import DetailsTabOne from "@/components/product-details/product-deatils-one/details-tab-one";
import FeatureGrid from "@/components/product-details/product-deatils-one/feature-grid";
import ProductDetailOne from "@/components/product-details/product-deatils-one/product-detail-one";
import RelatedProductsOne from "@/components/product-details/product-deatils-one/related-products-one";

export default function ProductDetailsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Product Details" }]} />
      <ProductDetailOne />
      <FeatureGrid />
      <DetailsTabOne />
      <RelatedProductsOne />
    </div>
  );
}
