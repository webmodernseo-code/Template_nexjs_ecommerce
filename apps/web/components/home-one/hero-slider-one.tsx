"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_SLIDES = [
  {
    id: 1,
    bgImage: "url(/images/home-1/hero-1.png)",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: "Everything you need for wellness in one place.",
    description:
      "Discover your favorite brands, latest trends, and exclusive discounts in one place.",
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 2,
    bgImage: "url(/images/home-1/hero-3.png)",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: "Boost your health with trusted supplements.",
    description:
      "Discover your favorite brands, latest trends, and exclusive discounts in one place.",
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 3,
    bgImage: "url(/images/home-1/hero-2.png)",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: "Top brands for skincare, haircare, and more.",
    description:
      "Discover your favorite brands, latest trends, and exclusive discounts in one place.",
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 4,
    bgImage: "url(/images/home-1/hero-4.png)",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: "BP monitors, glucometers, nebulizers & more device.",
    description:
      "Discover your favorite brands, latest trends, and exclusive discounts in one place.",
    link: "/shop-left-sidebar-3col",
  },
];

export default function HeroSliderOne() {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 7000 }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".hero-slider-next",
              prevEl: ".hero-slider-prev",
            }}
            className="home-one-hero-slider rounded-3xl"
          >
            {HERO_SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="lg:p-0 p-8 pb-15 md:bg-transparent bg-primary-darker bg-left sm:bg-center bg-no-repeat bg-cover rounded-3xl xl:pl-[177px] lg:pl-[100px] flex items-center md:h-[600px] h-[500px]"
                  style={{ backgroundImage: slide.bgImage }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="single-hero-slider-content max-w-xl"
                  >
                    <div className="flex items-center gap-x-2">
                      <h6 className="text-white">{slide.offer}</h6>
                      <span className="px-2 py-px text-black text-xs leading-[18px] bg-warning rounded-[100px]">
                        {slide.discount}
                      </span>
                    </div>
                    <h2 className="py-3 text-white">
                      {slide.title
                        .split('<br className="hidden lg:block" />')
                        .map((text, i) => (
                          <React.Fragment key={i}>
                            {text}
                            {i === 0 && <br className="hidden lg:block" />}
                          </React.Fragment>
                        ))}
                    </h2>
                    <p className="text-white mb-6 max-w-md">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.link}
                      className="btn btn-primary text-white btn-large rounded-[60px] group py-2 pl-5 pr-3"
                    >
                      Shop Now
                      <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300 ml-3">
                        <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 z-10 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="hero-slider-prev bg-[rgba(145,158,171,0.08)] size-12 rounded-full  hover:bg-primary backdrop-blur-md flex items-center justify-center text-white pointer-events-auto transition-all">
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-2xl" />
            </button>
            <button className="hero-slider-next bg-[rgba(145,158,171,0.08)] size-12 rounded-full  hover:bg-primary backdrop-blur-md flex items-center justify-center text-white pointer-events-auto transition-all">
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
