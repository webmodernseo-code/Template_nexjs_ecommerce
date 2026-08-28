"use client";
import { useState } from "react";
import ProductCardOne from "../card/product-card-one";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    image: "/images/softovac.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.2,
  },
  {
    image: "/images/vitamin-c.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.3,
  },
  {
    image: "/images/temperature-gun-3.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.4,
  },
  {
    image: "/images/hand-sanitizer-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.5,
  },
  {
    image: "/images/vitamin-b12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.6,
  },
  {
    image: "/images/ever-herb.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.7,
  },
  {
    image: "/images/hand-sanitizer-2.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.2,
  },
  {
    image: "/images/gillette.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.3,
  },
  {
    image: "/images/honitus.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.4,
  },
  {
    image: "/images/liveasy.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.5,
  },
  {
    image: "/images/aooca.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.6,
  },
  {
    image: "/images/aacka.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.7,
  },
];

const TABS = [
  { id: "all-products", label: "All Products" },
  { id: "medical-device", label: "Medical Device" },
  { id: "first-aid", label: "First Aid" },
  { id: "diabetic-care", label: "Diabetic Care" },
  { id: "herbal", label: "Herbal" },
  { id: "heath-care", label: "Health Care" },
];

export default function ProductsFilterTab() {
  const [activeTab, setActiveTab] = useState("all-products");

  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          className="mb-10 flex xl:flex-row flex-col gap-y-4 items-center xl:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Our Products</h3>
          <div className="flex gap-x-4 overflow-x-scroll lg:overflow-x-visible home-one-product-filter max-w-full">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn btn-default  btn-large py-2.5 px-[22px] rounded-full ${activeTab === tab.id ? "btn-primary" : " outline"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="tab-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-12 gap-6"
            >
              {PRODUCTS.map((prod, index) => (
                <div
                  key={index}
                  className="2xl:col-span-2 lg:col-span-4 md:col-span-6 col-span-12"
                >
                  <ProductCardOne {...prod} badgeVariant="error" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
