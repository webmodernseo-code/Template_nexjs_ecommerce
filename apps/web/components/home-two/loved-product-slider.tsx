"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import ProductCardOne from "@/components/card/product-card-one";

const LOVED_PRODUCTS = [
  {
    image: "/images/home-2/product-image-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    discount: "10% OFF",
    delay: 0.2,
  },
  {
    image: "/images/home-2/product-image-2.png",
    title: "Organic Matcha Green Tea Powder Premium Grade",
    ratingPercentage: 90,
    ratingCount: 245,
    currentPrice: "$18.50",
    oldPrice: "$22.00",
    discount: "15% OFF",
    delay: 0.3,
  },
  {
    image: "/images/home-2/product-image-3.png",
    title: "Wireless Bluetooth Noise-Canceling Headphones",
    ratingPercentage: 85,
    ratingCount: 512,
    currentPrice: "$89.99",
    oldPrice: "$120.00",
    discount: "25% OFF",
    delay: 0.4,
  },
  {
    image: "/images/home-2/product-image-4.png",
    title: "Ceramic Non-Stick Cookware Set 10-Piece",
    ratingPercentage: 95,
    ratingCount: 89,
    currentPrice: "$149.00",
    oldPrice: "$199.00",
    discount: "25% OFF",
    delay: 0.5,
  },
  {
    image: "/images/home-2/product-image-5.png",
    title: "Smart Fitness Watch with Heart Rate Monitor",
    ratingPercentage: 75,
    ratingCount: 320,
    currentPrice: "$45.99",
    oldPrice: "$59.99",
    discount: "23% OFF",
    delay: 0.6,
  },
  {
    image: "/images/home-2/product-image-3.png",
    title: "Organic Arabica Coffee Beans Dark Roast",
    ratingPercentage: 88,
    ratingCount: 420,
    currentPrice: "$14.50",
    oldPrice: "$18.00",
    discount: "19% OFF",
    delay: 0.7,
  },
];

export default function LovedProductSlider() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="flex items-center md:justify-between justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-light-primary-text">Most Loved Products</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:flex items-center justify-center gap-x-6 hidden"
          >
            <button
              onClick={() => swiper?.slidePrev()}
              className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary transition-all duration-300"
              aria-label="Previous"
            >
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary transition-all duration-300"
              aria-label="Next"
            >
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
            </button>
          </motion.div>
        </div>
        <div className="new-branded-product-multi-vendor-slider-wrapper">
          <div className="new-branded-product-multi-vendor-slider -mx-3 sellzy-slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
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
                  slidesPerView: 5,
                },
              }}
            >
              {LOVED_PRODUCTS.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCardOne
                    image={product.image}
                    title={product.title}
                    ratingPercentage={product.ratingPercentage}
                    ratingCount={product.ratingCount}
                    currentPrice={product.currentPrice}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                    delay={product.delay}
                    variant="pink"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
