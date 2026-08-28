import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Sellzy - Multivendor eCommerce Template",
  description: "Complete your purchase securely with our streamlined checkout process. Multiple payment methods and shipping options available.",
  openGraph: {
    title: "Checkout | Sellzy - Multivendor eCommerce Template",
    description: "Complete your purchase securely with our streamlined checkout process. Multiple payment methods and shipping options available.",
  },
};

import CheckoutV1Page from "@/components/checkout/checkout-v1/checkout-v1-page";
import Breadcrumb from "@/components/common/breadcrumb";

export default function CheckoutPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Checkout" }]} />
      <CheckoutV1Page />
    </div>
  );
}
