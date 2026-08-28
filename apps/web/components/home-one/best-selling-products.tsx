"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCardOne from "../card/product-card-one";
import { motion } from "framer-motion";

type Product = {
  image: string;
  title: string;
  currentPrice: string;
  oldPrice: string;
  discount: string;
  ratingPercentage: number;
  ratingCount: number;
  badgeText: string;
  delay: number;
  stockStatus?: "in-stock" | "out-of-stock" | "notified";
};

const BEST_PRODUCTS: Product[] = [
  {
    image: "/images/power-c.png",
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
    image: "/images/temperature-gun-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.3,
    stockStatus: "out-of-stock",
  },
  {
    image: "/images/temperature-gun-2.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "15% OFF",
    delay: 0.4,
    stockStatus: "notified",
  },
  {
    image: "/images/diesel.png",
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
    image: "/images/combat.png",
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
    image: "/images/bp-machine.png",
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
    image: "/images/nutrageinz.png",
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

export default function BestSellingProducts() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="mb-[70px]">
      <div className="lg:bg-white bg-[#9EE872] py-12 lg:pt-0 lg:pb-[23px] text-center lg:max-w-[704px] mx-auto lg:rounded-[164px] lg:-mb-[103px] relative z-10 lg:before:bg-[#9EE872] lg:after:bg-[#9EE872] lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:h-full lg:before:w-[145px] lg:before:bg-[url(/images/slider-left-shape.png)] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url(/images/slider-right-shape.png)] lg:after:bg-no-repeat lg:after:z-11">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2"
        >
          Best Selling Products
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Up to 69% discount for limited time 🔥
        </motion.p>
      </div>
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#9EE872] xl:rounded-5xl pb-12 lg:pt-[172px]">
        <div className="container overflow-hidden">
          <div className="best-selling-products-wrapper">
            <div className="-mx-3 sellzy-slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7000 }}
                navigation={{
                  prevEl,
                  nextEl,
                }}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  769: { slidesPerView: 2 },
                  1025: { slidesPerView: 4 },
                  1441: { slidesPerView: 4 },
                  1600: { slidesPerView: 6 },
                }}
              >
                {BEST_PRODUCTS.map((prod, index) => (
                  <SwiperSlide key={index} className="p-3">
                    <ProductCardOne
                      {...prod}
                      deliveryTime="12-48 hours"
                      storeName="Store Name/ Category"
                      badgeVariant="error"
                      className="bg-white mx-0"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="best-selling-products-slider-nav mt-10 flex items-center justify-center gap-x-6">
              <button
                ref={(node) => setPrevEl(node)}
                className="size-12 rounded-full bg-white hover:text-white hover:bg-primary backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all text-(--primary-dark) "
                aria-label="Previous"
              >
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
              </button>
              <button
                ref={(node) => setNextEl(node)}
                className="size-12 rounded-full bg-white hover:text-white hover:bg-primary backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all text-(--primary-dark) "
                aria-label="Next"
              >
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
