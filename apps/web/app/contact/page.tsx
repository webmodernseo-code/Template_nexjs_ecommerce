import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sellzy - Multivendor eCommerce Template",
  description: "Get in touch with our support team. We are here to help with orders, vendor inquiries, and general questions.",
  openGraph: {
    title: "Contact Us | Sellzy - Multivendor eCommerce Template",
    description: "Get in touch with our support team. We are here to help with orders, vendor inquiries, and general questions.",
  },
};

import Breadcrumb from "@/components/common/breadcrumb";
import AssistGrid from "@/components/contact/assist-grid";
import ContactSection from "@/components/contact/contact-section";
import FAQSection from "@/components/contact/faq-section";

export default function ContactPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "Contact Us",
          },
        ]}
      />
      <AssistGrid />
      <ContactSection />
      <FAQSection />
    </div>
  );
}
