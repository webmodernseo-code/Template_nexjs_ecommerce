"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCardOne from "../card/product-card-one";

const DISCOUNT_PRODUCTS = [
  {
    image: "/images/vitamin-c.png",
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
    image: "/images/vitamin-c-2.png",
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
    image: "/images/bp-machine-2.png",
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
    image: "/images/bp-machine.png",
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
    image: "/images/nutrageinz.png",
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
    image: "/images/temperature-gun-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.8,
  },
];

export default function DailyDiscountGrid() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h3>Daily Discount You'll Love</h3>
        </motion.div>
        <div className="grid grid-cols-12 gap-6">
          {DISCOUNT_PRODUCTS.map((prod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prod.delay }}
              className="2xl:col-span-2 lg:col-span-4 md:col-span-6 col-span-12"
            >
              <ProductCardOne {...prod} badgeVariant="error" className="" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
