"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuickView } from "@/context/quick-view-context";
import StarRating from "@/components/common/star-rating";
import { Product } from "@/lib/types";

const PRODUCTS = {
  "men-fashion": [
    {
      id: 1,
      image: "/images/home-4/outfit-person-6.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".4s",
    },
    {
      id: 2,
      image: "/images/home-4/outfit-person-7.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".5s",
    },
    {
      id: 3,
      image: "/images/home-4/outfit-person-8.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".6s",
    },
    {
      id: 4,
      image: "/images/home-4/outfit-person-9.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".7s",
    },
    {
      id: 5,
      image: "/images/home-4/outfit-person-10.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".8s",
    },
  ],
  "women-fashion": [
    {
      id: 6,
      image: "/images/home-4/outfit-person-10.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".4s",
    },
    {
      id: 7,
      image: "/images/home-4/outfit-person-9.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".5s",
    },
    {
      id: 8,
      image: "/images/home-4/outfit-person-8.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".6s",
    },
    {
      id: 9,
      image: "/images/home-4/outfit-person-7.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".7s",
    },
    {
      id: 10,
      image: "/images/home-4/outfit-person-6.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".8s",
    },
  ],
  "kids-clothing": [
    {
      id: 11,
      image: "/images/home-4/outfit-person-7.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".4s",
    },
    {
      id: 12,
      image: "/images/home-4/outfit-person-6.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".5s",
    },
    {
      id: 13,
      image: "/images/home-4/outfit-person-10.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".6s",
    },
    {
      id: 14,
      image: "/images/home-4/outfit-person-9.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".7s",
    },
    {
      id: 15,
      image: "/images/home-4/outfit-person-8.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".8s",
    },
  ],
  accessories: [
    {
      id: 16,
      image: "/images/home-4/outfit-person-8.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".4s",
    },
    {
      id: 17,
      image: "/images/home-4/outfit-person-9.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".5s",
    },
    {
      id: 18,
      image: "/images/home-4/outfit-person-10.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".6s",
    },
    {
      id: 19,
      image: "/images/home-4/outfit-person-6.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".7s",
    },
    {
      id: 20,
      image: "/images/home-4/outfit-person-7.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".8s",
    },
  ],
  "jewelry-watches": [
    {
      id: 21,
      image: "/images/home-4/outfit-person-9.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".4s",
    },
    {
      id: 22,
      image: "/images/home-4/outfit-person-10.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".5s",
    },
    {
      id: 23,
      image: "/images/home-4/outfit-person-6.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".6s",
    },
    {
      id: 24,
      image: "/images/home-4/outfit-person-7.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".7s",
    },
    {
      id: 25,
      image: "/images/home-4/outfit-person-8.png",
      title: "Radiance Renewal Serum",
      price: 27.46,
      oldPrice: 29.99,
      discount: "15% OFF",
      delay: ".8s",
    },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ProductCard = ({ product }: { product: Product }) => {
  const { openQuickView } = useQuickView();
  const colors = ["#D0AEFF", "#84A9FF", "bg-error-light", "bg-warning-light"];
  const [activeColor, setActiveColor] = React.useState(colors[0]);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <div className="border border-gray-300 rounded-2xl product-card-1 p-6 group h-full transition-shadow duration-300 hover:shadow-lg">
        <div className="product-image-container relative">
          <div className="product-image rounded-xl mb-4 overflow-hidden">
            <Link href="/product-details">
              <Image
                src={product.image}
                alt="product"
                width={300}
                height={400}
                className="w-full h-auto group-hover:scale-110 transition-all transform group-hover:-rotate-3 ease-in-out duration-300 bg-[#F4F3F5]"
              />
            </Link>
          </div>
          <span className="product-discount-badge absolute top-[11px] left-0 bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-contain">
            {product.discount}
          </span>
          <div className="product-btn-actions absolute bottom-0 right-0 left-0 flex justify-center z-9 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-3">
            <ul className="flex items-center gap-x-px">
              <li>
                <Link
                  aria-label="Add to Wishlist"
                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center rounded-tl-sm rounded-bl-sm before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                  href="/wishlist-style-v1"
                >
                  <i className="hgi hgi-stroke hgi-favourite text-2xl leading-6 text-light-secondary-text" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Compare"
                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                  href="/compare"
                >
                  <i className="hgi hgi-stroke hgi-reload text-2xl leading-6 text-light-primary-text" />
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openQuickView(product)}
                  aria-label="Quick view"
                  className="quick-view-sidebar-btn product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center rounded-tr-sm rounded-br-sm before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                >
                  <i className="hgi hgi-stroke hgi-view text-2xl leading-6 text-light-primary-text" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <h6 className="text-[20px] leading-[30px] font-bold pb-3">
            <Link href="/product-details">{product.title}</Link>
          </h6>
          <div className="rating-section flex items-center mb-3">
            <StarRating ratingPercentage={"80%"} />
            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
              (189)
            </span>
          </div>
          <div className="variation-buttons flex gap-x-2.5 mb-3">
            {colors.map((c) => (
              <div
                key={c}
                style={{
                  borderColor:
                    activeColor === c && !c.includes("bg-") ? c : undefined,
                }}
                className={`variation-color-item p-1 border rounded-full ${
                  activeColor === c
                    ? !c.includes("bg-")
                      ? ""
                      : "border-primary"
                    : "border-gray-300"
                }`}
              >
                <button
                  style={{ backgroundColor: c.includes("bg-") ? undefined : c }}
                  className={`size-6 rounded-full flex items-center justify-center cursor-pointer ${
                    c.includes("bg-") ? c : ""
                  }`}
                  onClick={() => setActiveColor(c)}
                >
                  <i
                    className={`hgi hgi-stroke hgi-tick-02 text-white ${activeColor === c ? "" : "hidden"}`}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="price-section flex items-center gap-x-3 mb-3">
            <span className="current-price text-[20px] font-urbanist leading-[30px] font-bold text-light-primary-text">
              ${product.price}
            </span>
            <span className="old-price text-[20px] font-urbanist font-medium leading-[30px] text-light-disabled-text line-through">
              ${product.oldPrice}
            </span>
            <span className="discount-percentage text-[20px] font-urbanist font-medium leading-[30px] text-error">
              {product.discount}
            </span>
          </div>
          <div className="btn-section flex items-center gap-x-4">
            <Link
              href="/wishlist-style-v1"
              className="size-11 flex flex-none items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300"
            >
              <i className="hgi hgi-stroke hgi-favourite text-xl text-light-secondary-text" />
            </Link>
            <Link
              href="/cart-single-vendor"
              className="btn btn-primary rounded-full font-semibold text-sm leading-6 px-6.5 py-2 flex-1"
            >
              <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
              <span>Add to Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function FlashDealTab() {
  const [activeTab, setActiveTab] = useState("men-fashion");

  const tabs = [
    { id: "men-fashion", label: "Men's Fashion" },
    { id: "women-fashion", label: "Women's Fashion" },
    { id: "kids-clothing", label: "Kids Clothing" },
    { id: "accessories", label: "Accessories" },
    { id: "jewelry-watches", label: "Jewelry & Watches" },
  ];

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="mb-10 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pb-6"
          >
            Flash Fashion Deal
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-x-4 max-w-full"
          >
            <div className="flex gap-x-8 overflow-x-auto overflow-y-hidden whitespace-nowrap home-four-product-filter border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pt-[13px] pb-[22px] transition-all relative ${
                    activeTab === tab.id
                      ? "text-primary font-bold"
                      : "text-light-primary-text hover:text-primary"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeFlashDealTabIndicator"
                      className="absolute -bottom-px left-0 w-full h-[2px] bg-primary z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="tab-content" id="deal-tab-content">
          <div className="tab-pane active min-h-[510px]" id={activeTab}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
              >
                {(PRODUCTS as Record<string, Product[]>)[activeTab as keyof typeof PRODUCTS]?.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
