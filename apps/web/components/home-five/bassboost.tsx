"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";

const PRODUCTS = [
  {
    id: 1,
    image: "/images/home-5/headphone.png",
    discount: "15% OFF",
    title: "BassBoost Home Theater System",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.2,
  },
  {
    id: 2,
    image: "/images/home-5/iphone-2.png",
    discount: "15% OFF",
    title: "EchoStream Soundbar",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.3,
  },
  {
    id: 3,
    image: "/images/home-5/laptop.png",
    discount: "15% OFF",
    title: "Harmony TV Speaker Set",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.4,
  },
  {
    id: 4,
    image: "/images/home-5/macbook.png",
    discount: "15% OFF",
    title: "ClearSound Wireless Speakers",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.2,
  },
  {
    id: 5,
    image: "/images/home-5/samsung-phone-3.png",
    discount: "15% OFF",
    title: "VibeMax Surround Kit",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.3,
  },
  {
    id: 6,
    image: "/images/home-5/game-pad-2.png",
    discount: "15% OFF",
    title: "UltraBass Wireless Headphones",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.5,
  },
  {
    id: 7,
    image: "/images/home-5/redphone.png",
    discount: "15% OFF",
    title: "SonicBoom Subwoofer",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.2,
  },
  {
    id: 8,
    image: "/images/home-5/speaker.png",
    discount: "15% OFF",
    title: "PulseWave Bluetooth Speaker",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.3,
  },
  {
    id: 9,
    image: "/images/home-5/action-cam.png",
    discount: "15% OFF",
    title: "ClearSound Action Camera",
    rating: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    delay: 0.4,
  },
];

export default function Bassboost() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex lg:justify-between justify-center flex-wrap lg:flex-nowrap pb-12"
        >
          <h3 className="mb-3 lg:mb-0">BassBoost Home Theater System</h3>
          <button className="btn btn-primary outline btn-large py-2.5 px-10 rounded-full">
            View All
          </button>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-6 xl:gap-y-12 gap-y-6">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: product.delay }}
              className="xl:col-span-4 col-span-12 md:col-span-6 group hover:border-primary transition-all duration-300 border rounded-2xl border-gray-300"
            >
              <Link
                href="/product-details"
                className="flex flex-col lg:flex-row h-full"
              >
                <motion.div className="p-4 lg:border-r border-b lg:border-b-0 border-gray-300 lg:max-w-[190px] flex items-center justify-center w-full shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <div className="py-[37px] px-6 flex-1">
                  <span className="product-discount-badge relative bg-error uppercase text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-contain after:bg-no-repeat">
                    {product.discount}
                  </span>
                  <p className="py-3 font-semibold text-base leading-6 text-light-primary-text group-hover:text-primary">
                    {product.title}
                  </p>
                  <div className="rating-section flex items-center mb-3">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="price-section flex items-center gap-x-3">
                    <span className="current-price text-base font-semibold text-primary-dark">
                      {product.currentPrice}
                    </span>
                    <span className="old-price text-base leading-6 font-normal text-light-disabled-text line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
