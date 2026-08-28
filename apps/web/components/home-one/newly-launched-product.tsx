"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCardOne from "../card/product-card-one";
import { motion } from "framer-motion";
import Link from "next/link";

const NEW_PRODUCTS = [
  {
    image: "/images/vitamin-b12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.2,
  },
  {
    image: "/images/apple-juice.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.3,
  },
  {
    image: "/images/ground-nuts-oil.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.4,
  },
  {
    image: "/images/baked-beans.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.5,
  },
  {
    image: "/images/aacka.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.6,
  },
  {
    image: "/images/vitamin-b12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.7,
  },
  {
    image: "/images/aooca.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    ratingPercentage: 80,
    ratingCount: 189,
    badgeText: "10% OFF",
    delay: 0.8,
  },
];

export default function NewlyLaunchedProduct() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="mb-[70px]">
      <div className="lg:bg-white bg-[#A0E2E0] py-12 lg:pt-0 lg:pb-[23px] text-center lg:max-w-[704px] mx-auto lg:rounded-[164px] lg:-mb-[103px] relative z-10 lg:before:bg-[#A0E2E0] lg:after:bg-[#A0E2E0] lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:h-full lg:before:w-[145px] lg:before:bg-[url(/images/slider-left-shape.png)] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url(/images/slider-right-shape.png)] lg:after:bg-no-repeat lg:after:z-11">
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
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#A0E2E0] xl:rounded-5xl pb-12 lg:pt-[172px]">
        <div className="container overflow-hidden">
          <div className="home-one-newly-launched-products-slider -mx-3 sellzy-slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 7000 }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                480: { slidesPerView: 1 },
                769: { slidesPerView: 2 },
                1025: { slidesPerView: 4 },
                1441: { slidesPerView: 4 },
                1600: { slidesPerView: 6 },
              }}
            >
              {NEW_PRODUCTS.map((prod, index) => (
                <SwiperSlide key={index} className="p-3">
                  <ProductCardOne {...prod} className="bg-white mx-0" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex md:justify-between justify-center items-center pt-9"
          >
            <div className="home-one-newly-launched-products-slider-nav items-center gap-x-4 hidden md:flex">
              <button
                ref={prevRef}
                className="size-12 rounded-full bg-white/50 hover:text-white hover:bg-primary backdrop-blur-md flex items-center justify-center  pointer-events-auto transition-all"
                aria-label="Previous"
              >
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-xl" />
              </button>
              <button
                ref={nextRef}
                className="size-12 rounded-full bg-white/50 hover:text-white hover:bg-primary backdrop-blur-md flex items-center justify-center  pointer-events-auto transition-all"
                aria-label="Next"
              >
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl" />
              </button>
            </div>
            <Link
              href="/shop-left-sidebar-3col"
              className="bg-white text-primary-darker rounded-[60px] group py-2 pl-5 pr-3 inline-flex items-center gap-x-2 font-semibold text-base leading-[26px]"
            >
              View All Products
              <span className="size-6 bg-primary inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                <i className="hgi hgi-stroke hgi-arrow-right-02 text-lg text-primary-lighter" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
