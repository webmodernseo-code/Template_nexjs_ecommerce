import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sellzy - Multivendor eCommerce Template",
  description: "Learn about the Sellzy multivendor marketplace platform, our mission, values, and commitment to empowering online sellers.",
  openGraph: {
    title: "About Us | Sellzy - Multivendor eCommerce Template",
    description: "Learn about the Sellzy multivendor marketplace platform, our mission, values, and commitment to empowering online sellers.",
  },
};

import { AboutHero } from "@/components/about/about-hero";
import DeliveryFeature from "@/components/about/delivery-feature";
import OurFocus from "@/components/about/our-focus";
import OurTeam from "@/components/about/our-team";
import QualitySection from "@/components/about/quality-section";
import Breadcrumb from "@/components/common/breadcrumb";
import Testimonial from "@/components/common/testimonial";

export default function AboutPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "About Us",
          },
        ]}
      />
      <AboutHero />
      <QualitySection />
      <DeliveryFeature />
      <Testimonial />
      <OurFocus />
      <OurTeam />
    </div>
  );
}
