"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import ProductCardTwo from "@/components/card/product-card-two";

const TODAYS_TOP_PRODUCTS = [
  {
    image: "/images/home-2/product-image-6.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.2,
  },
  {
    image: "/images/home-2/product-image-7.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.3,
  },
  {
    image: "/images/home-2/product-image-8.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.4,
  },
  {
    image: "/images/home-2/product-image-9.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.5,
  },
  {
    image: "/images/home-2/product-image-10.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.6,
  },
  {
    image: "/images/home-2/product-image-8.png",
    storeName: "Store Name/Category",
    title: "Nebulizer Ultracare",
    currentPrice: "$28.56",
    oldPrice: "$29.56",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 118,
    progressPercentage: 60,
    soldCount: 4,
    availableCount: 200,
    badgeText: "SALES",
    delay: 0.7,
  },
];

export default function TodaysTop() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="mb-[70px]">
      <div className="bg-[#FFD6EF] xl:max-w-[1728px] w-full mx-auto xl:rounded-tr-5xl relative flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-between pt-12 lg:pt-0">
        <div className="lg:bg-white bg-[#FFD6EF] pb-0 lg:pt-0 flex-none lg:w-full lg:pb-[23px] lg:pl-12 pl-4 md:text-left text-center max-w-xl lg:rounded-tr-[164px] relative z-5 lg:after:bg-[#FFD6EF] lg:before:absolute lg:before:top-full lg:before:left-0 lg:before:h-12 lg:before:w-12 lg:before:bg-[url(/images/home-2/slider-left-shape-2.png)] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url(/images/slider-right-shape.png)] lg:after:bg-no-repeat lg:after:z-11">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            Today's Top Offer
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex z-5 items-center gap-x-5 lg:pr-12 pr-4"
        >
          <div className="limited-time-countdown font-bold text-xl flex items-center justify-center gap-x-1 bg-success-lighter py-[9px] px-6 rounded-[50px] mx-auto sellzy-countdown">
            <span className="text-light-primary-text">Ends in:</span>
            <span className="days text-light-primary-text">30</span>
            <span className="text-light-primary-text">:</span>
            <span className="hours text-light-primary-text">12</span>
            <span className="text-light-primary-text">:</span>
            <span className="minutes text-light-primary-text">45</span>
            <span className="text-light-primary-text">:</span>
            <span className="seconds text-light-primary-text">15</span>
          </div>
          <div className="home-four-picks-slider-nav home-two-top-offer-slider-nav items-center justify-center gap-x-6 lg:flex hidden">
            <button
              onClick={() => swiper?.slidePrev()}
              className="bg-white/48  rounded-full size-12 hover:bg-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous"
            >
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="bg-white/48  rounded-full size-12 hover:bg-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next"
            >
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#FFD6EF] xl:rounded-bl-5xl xl:rounded-br-5xl py-12">
        <div className="container">
          <div className="home-four-picks-slider-wrapper">
            <div className="home-four-picks-slider -mx-3 sellzy-slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 7000 }}
                onSwiper={setSwiper}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1440: {
                    slidesPerView: 5,
                  },
                }}
              >
                {TODAYS_TOP_PRODUCTS.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardTwo
                      image={product.image}
                      title={product.title}
                      badgeText={product.badgeText}
                      storeName={product.storeName}
                      currentPrice={product.currentPrice}
                      oldPrice={product.oldPrice}
                      discount={product.discount}
                      ratingPercentage={product.ratingPercentage}
                      ratingCount={product.ratingCount}
                      progressPercentage={product.progressPercentage}
                      soldCount={product.soldCount}
                      availableCount={product.availableCount}
                      delay={product.delay}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
