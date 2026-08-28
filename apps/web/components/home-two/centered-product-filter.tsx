"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCardOne from "@/components/card/product-card-one";

const TABS = [
  { id: "all", label: "All Products" },
  { id: "moisturizers", label: "Moisturizers" },
  { id: "sunscreens", label: "Sunscreens" },
  { id: "foundations", label: "Foundations" },
  { id: "lipsticks", label: "Lipsticks & Lip Glosses" },
  { id: "eyeshadows", label: "Eyeshadows" },
];

const PRODUCTS = [
  {
    id: 1,
    image: "/images/home-2/product-image-14.png",
    category: ["all", "moisturizers", "sunscreens"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.2,
  },
  {
    id: 2,
    image: "/images/home-2/product-image-15.png",
    category: ["all", "moisturizers", "sunscreens"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.3,
  },
  {
    id: 3,
    image: "/images/home-2/product-image-5.png",
    category: ["all", "moisturizers", "foundations"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.4,
  },
  {
    id: 4,
    image: "/images/home-2/product-image-16.png",
    category: ["all", "moisturizers", "lipsticks"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.5,
  },
  {
    id: 5,
    image: "/images/home-2/product-image-18.png",
    category: ["all", "sunscreens", "foundations"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.6,
  },
  {
    id: 6,
    image: "/images/home-2/product-image-19.png",
    category: ["all", "sunscreens", "eyeshadows"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.7,
  },
  {
    id: 7,
    image: "/images/home-2/product-image-12.png",
    category: ["all", "foundations", "eyeshadows"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.2,
  },
  {
    id: 8,
    image: "/images/home-2/product-image-20.png",
    category: ["all", "foundations", "lipsticks"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.3,
  },
  {
    id: 9,
    image: "/images/home-2/product-image-21.png",
    category: ["all", "lipsticks", "eyeshadows"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.4,
  },
  {
    id: 10,
    image: "/images/home-2/product-image-22.png",
    category: ["all", "lipsticks", "eyeshadows"],
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 80,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$29.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.5,
  },
];

export default function CenteredProductFilter() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = PRODUCTS.filter((product) =>
    product.category.includes(activeTab),
  );

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="mb-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-6"
          >
            Our Products
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-x-4"
          >
            <div className="flex gap-x-4 overflow-x-scroll lg:overflow-x-visible home-two-product-filter py-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn btn-large py-2.5 px-[22px] rounded-[55px] ${
                    activeTab === tab.id
                      ? "btn-primary"
                      : "btn-default outline shadow-none"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
              >
                <ProductCardOne
                  className="mx-0! border border-gray-300 rounded-2xl p-4"
                  variant="pink"
                  image={product.image}
                  badgeText={product.badgeText}
                  ratingPercentage={product.ratingPercentage}
                  ratingCount={product.ratingCount}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  currentPrice={product.currentPrice}
                  discount={product.discountPercentage}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
