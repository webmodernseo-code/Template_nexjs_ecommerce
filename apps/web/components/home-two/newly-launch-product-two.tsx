"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCardOne from "@/components/card/product-card-one";

const NEWLY_LAUNCH_PRODUCTS = [
  {
    image: "/images/multi-vendor-slider-image-1.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.2,
  },
  {
    image: "/images/multi-vendor-slider-image-2.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.3,
  },
  {
    image: "/images/multi-vendor-slider-image-3.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.4,
  },
  {
    image: "/images/multi-vendor-slider-image-4.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.5,
  },
  {
    image: "/images/multi-vendor-slider-image-5.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.6,
  },
  {
    image: "/images/multi-vendor-slider-image-1.png",
    badgeVariant: "success",
    badgeText: "NEW",
    ratingPercentage: 100,
    ratingCount: 189,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    oldPrice: "$39.99",
    currentPrice: "$27.49",
    discountPercentage: "10% OFF",
    variant: "pink",
    delay: 0.7,
  },
];

export default function NewlyLaunchProductTwo() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="mb-[70px]">
      <div className="bg-[#FFEB69] xl:max-w-[1728px] w-full mx-auto xl:rounded-tr-5xl relative flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-between pt-12 lg:pt-0">
        <div className="lg:bg-white bg-[#FFEB69] pb-0 lg:pt-0 flex-none lg:w-full lg:pb-[23px] lg:pl-12 pl-4 md:text-left text-center max-w-xl lg:rounded-tr-[164px] relative z-5 lg:after:bg-[#FFEB69] lg:before:absolute lg:before:top-full lg:before:left-0 lg:before:h-12 lg:before:w-12 lg:before:bg-[url(/images/home-2/slider-left-shape-2.png)] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url(/images/slider-right-shape.png)] lg:after:bg-no-repeat lg:after:z-11">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            Newly Launched Products
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
          <div className="md:flex items-center justify-center gap-x-6 hidden">
            <button
              onClick={() => swiper?.slidePrev()}
              className="bg-white/48 hover:text-black text-black rounded-full size-12 hover:bg-white transition-all duration-300 flex items-center justify-center pointer-events-auto"
              aria-label="Previous"
            >
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="bg-white/48 hover:text-black text-black rounded-full size-12 hover:bg-white transition-all duration-300 flex items-center justify-center pointer-events-auto"
              aria-label="Next"
            >
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#FFEB69] xl:rounded-bl-5xl xl:rounded-br-5xl py-12">
        <div className="container">
          <div className="home-two-newly-launched-product-slider-wrapper">
            <div className="home-two-newly-launched-product-slider -mx-3 sellzy-slider">
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
                  1024: {
                    slidesPerView: 4,
                  },
                  1440: {
                    slidesPerView: 4,
                  },
                  1600: {
                    slidesPerView: 5,
                  },
                }}
              >
                {NEWLY_LAUNCH_PRODUCTS.map((product, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: product.delay }}
                      className="mx-3"
                    >
                      <ProductCardOne
                        className="bg-white border-0"
                        variant={
                          product.variant as "pink" | "gray" | "transparent"
                        }
                        image={product.image}
                        badgeText={product.badgeText}
                        badgeVariant={
                          product.badgeVariant as
                            | "success"
                            | "default"
                            | "error"
                        }
                        ratingPercentage={product.ratingPercentage}
                        ratingCount={product.ratingCount}
                        title={product.title}
                        oldPrice={product.oldPrice}
                        currentPrice={product.currentPrice}
                        discount={product.discountPercentage}
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex md:justify-end justify-center"
          >
            <Link
              href="/shop-left-sidebar-3col"
              className="btn btn-primary bg-white text-primary-darker font-semibold btn-large rounded-[60px] text-sm leading-6 group py-1.5 pl-3 pr-2 mt-12"
            >
              View All Products
              <span className="size-8 bg-primary inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-lighter" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
