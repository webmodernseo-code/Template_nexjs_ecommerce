"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";

const CATEGORY_PROMOS = [
  {
    bgImage: "bg-[url(/images/home-2/promo-bg-3.jpg)]",
    bgPosition: "bg-left",
    footerBg: "bg-primary-light",
    title: "Your Daily Skin Ritual",
    productsCount: "122 Products",
    delay: 0.2,
  },
  {
    bgImage: "bg-[url(/images/home-2/promo-bg-4.jpg)]",
    bgPosition: "bg-left",
    footerBg: "bg-[#84A9FF]",
    title: "Where Glow Meets Care",
    productsCount: "210 Products",
    delay: 0.3,
  },
  {
    bgImage: "bg-[url(/images/home-2/promo-bg-1.jpg)]",
    bgPosition: "bg-top",
    footerBg: "bg-[#74CAFF]",
    title: "Hydrate & Shine",
    productsCount: "178 Products",
    delay: 0.4,
  },
  {
    bgImage: "bg-[url(/images/home-2/promo-bg-2.jpg)]",
    bgPosition: "bg-top",
    footerBg: "bg-warning-light",
    title: "Gentle Face Essentials",
    productsCount: "320 Products",
    delay: 0.5,
  },
  {
    bgImage: "bg-[url(/images/home-2/apply-makeup-1.jpg)]",
    bgPosition: "bg-center",
    footerBg: "bg-[#84A9FF]",
    title: "Where Glow Meets Care",
    productsCount: "210 Products",
    delay: 0.6,
  },
];

export default function FavouriteCategorySlider() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3>Category Favorites</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-x-5"
          >
            <div className="md:flex items-center justify-between gap-x-6 hidden">
              <button
                onClick={() => swiper?.slidePrev()}
                className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Previous"
              >
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-xl" />
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Next"
              >
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl" />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="home-two-category-promo-slider -mx-3 sellzy-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
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
            }}
          >
            {CATEGORY_PROMOS.map((promo, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: promo.delay }}
                  className="mx-3"
                >
                  <div
                    className={`flex flex-col justify-end text-center min-h-[520px] rounded-2xl ${promo.bgImage} ${promo.bgPosition} bg-cover bg-no-repeat`}
                  >
                    <div className={`py-10 ${promo.footerBg} rounded-b-2xl`}>
                      <h4 className="pb-2">{promo.title}</h4>
                      <p className="text-gray-900 font-semibold">
                        {promo.productsCount}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
