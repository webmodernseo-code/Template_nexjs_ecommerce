"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import Image from "next/image";

const CATEGORIES = [
  {
    img: "/images/home-2/category-bg-1.png",
    title: "Moisturizers",
    delay: 0.2,
  },
  { img: "/images/home-2/category-bg-2.png", title: "Skin Serums", delay: 0.3 },
  { img: "/images/home-2/category-bg-3.png", title: "Foundations", delay: 0.4 },
  {
    img: "/images/home-2/category-bg-4.png",
    title: "Blush & Bronzers",
    delay: 0.5,
  },
  {
    img: "/images/home-2/category-bg-5.png",
    title: "Lipsticks & Lip Glosses",
    delay: 0.6,
  },
  {
    img: "/images/home-2/category-bg-6.png",
    title: "Hair Oils & Serums",
    delay: 0.7,
  },
  {
    img: "/images/home-2/category-bg-7.png",
    title: "Highlighters",
    delay: 0.8,
  },
  {
    img: "/images/home-2/category-bg-8.png",
    title: "Nail Polishes",
    delay: 0.9,
  },
  {
    img: "/images/home-2/category-bg-6.png",
    title: "Hair Oils & Serums",
    delay: 1.0,
  },
];

export default function ShopByCategoryTwo() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="py-[70px]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="pb-3">Shop By Category</h3>
            <p>Up to 69% discount for limited time 🔥</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="home-two-category-slider-nav md:flex items-center justify-between gap-x-6 hidden"
          >
            <button
              onClick={() => swiper?.slidePrev()}
              className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary transition-all duration-300"
              aria-label="Previous"
            >
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-xl" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="bg-[rgba(145,158,171,0.08)] hover:text-white rounded-full size-12 hover:bg-primary"
              aria-label="Next"
            >
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl" />
            </button>
          </motion.div>
        </div>

        <div className="home-two-category-slider -mx-3 sellzy-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={8}
            loop={true}
            autoplay={{ delay: 7000 }}
            onSwiper={setSwiper}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 8,
              },
            }}
          >
            {CATEGORIES.map((category, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: category.delay }}
                  className="mx-3"
                >
                  <div className="overflow-hidden rounded-full cursor-pointer">
                    <Image
                      src={category.img}
                      alt={category.title}
                      width={200}
                      height={200}
                      className="rounded-full transition-transform duration-300 ease-in-out hover:scale-[1.15] w-full h-auto"
                    />
                  </div>
                  <p className="text-center pt-6 font-semibold text-light-primary-text hover:text-primary cursor-pointer line-clamp-1">
                    {category.title}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
