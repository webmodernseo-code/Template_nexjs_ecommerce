"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_SLIDES = [
  {
    image: "/images/home-2/hero-1.png",
    title: (
      <>
        Discover Your Ultimate <br className="lg:block hidden" />
        Beauty Destination
      </>
    ),
    description: (
      <>
        Experience the joy of effortless beauty with our curated collection{" "}
        <br className="lg:block hidden" />
        of must-have products for every day and every mood.
      </>
    ),
  },
  {
    image: "/images/home-2/hero-2.png",
    title: (
      <>
        Shop smarter, glow <br className="lg:block hidden" />
        better, live beautifully.
      </>
    ),
    description: (
      <>
        All your favorite beauty essentials, thoughtfully curated to save{" "}
        <br className="lg:block hidden" />
        you time and make your self-care effortless and enjoyable.
      </>
    ),
  },
  {
    image: "/images/home-2/hero-3.png",
    title: (
      <>
        Beauty That Elevates <br className="lg:block hidden" />
        Your Everyday
      </>
    ),
    description: (
      <>
        Simplify your beauty routine with our handpicked essentials,
        <br className="lg:block hidden" />
        designed to keep you glowing from morning to night.
      </>
    ),
  },
  {
    image: "/images/home-2/hero-4.png",
    title: (
      <>
        Your daily beauty <br className="lg:block hidden" />
        essentials, simplified.
      </>
    ),
    description: (
      <>
        From skincare to makeup, discover everything you
        <br className="lg:block hidden" />
        need to look and feel your best every single day.
      </>
    ),
  },
  {
    image: "/images/home-2/hero-5.png",
    title: (
      <>
        Your Everyday <br className="lg:block hidden" />
        Shopping, Simplified
      </>
    ),
    description: (
      <>
        Enjoy a seamless shopping experience with fast
        <br className="lg:block hidden" />
        delivery and unbeatable prices.
      </>
    ),
  },
];

export default function HeroTwo() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="pt-6">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="xl:col-span-8 col-span-12">
            <div className="relative">
              <div className="home-five-hero-slider rounded-3xl relative md:bg-transparent bg-[#FFD6EF] sellzy-slider">
                <Swiper
                  modules={[Navigation, Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 7000 }}
                  pagination={{ clickable: true }}
                  onSwiper={setSwiper}
                  className="rounded-3xl"
                >
                  {HERO_SLIDES.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`lg:p-0 p-8 pb-15 bg-left sm:bg-center bg-no-repeat bg-cover rounded-3xl xl:pl-[112px] lg:pl-20 single-hero-slider-item flex! items-center md:h-[600px]! h-[500px]!`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                      >
                        {/* Content Section */}
                        <div className="single-hero-slider-content">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-x-2"
                          >
                            <span className="px-2 py-px text-black text-xs leading-[18px] bg-success-light rounded-[100px]">
                              25% OFF
                            </span>
                            <h6 className="text-light-primary-text">
                              Exclusive offer
                            </h6>
                          </motion.div>
                          <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="py-3"
                          >
                            {slide.title}
                          </motion.h2>
                          <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-6"
                          >
                            {slide.description}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <Link
                              href="/shop-left-sidebar-3col"
                              className="btn btn-primary text-white btn-large rounded-[60px] group py-2 pl-5 pr-3 inline-flex items-center"
                            >
                              Shop Now
                              <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300 ml-2">
                                <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                              </span>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full items-center justify-between px-6 z-20 pointer-events-none hidden lg:flex">
                <button
                  onClick={() => swiper?.slidePrev()}
                  className="bg-[rgba(145,158,171,0.08)] text-white hover:text-black hover:bg-white size-12 rounded-full pointer-events-auto flex items-center justify-center transition-all duration-300"
                  aria-label="Previous"
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
                </button>
                <button
                  onClick={() => swiper?.slideNext()}
                  className="bg-[rgba(145,158,171,0.08)] text-white hover:text-black hover:bg-white size-12 rounded-full pointer-events-auto flex items-center justify-center transition-all duration-300"
                  aria-label="Next"
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="flex lg:flex-row xl:flex-col flex-col lg:gap-x-6 xl:gap-x-0 gap-y-[22px]">
              <div className="w-full max-h-[289px] pl-8 py-[78px] rounded-3xl bg-[url(/images/home-2/hero-promo-1.png)] bg-[#AAEBFE] lg:bg-position-[70px_-90px] md:bg-position-[276px_-90px] bg-position-[15px_-90px] bg-no-repeat lg:w-1/2 xl:w-full">
                <h3 className="pb-1.5">Your Daily Store.</h3>
                <p className="pb-4 text-light-primary-text">
                  Essentials, deals, and more.
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn btn-primary text-white font-semibold btn-large rounded-[60px] text-sm leading-[22px] group py-1.5 pl-4 pr-2 inline-flex items-center"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300 ml-2">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
              <div className="pl-8 py-[78px] max-h-[289px] rounded-3xl bg-[url(/images/home-2/hero-promo-2.png)] bg-[#FFD4D4] lg:bg-position-[70px_-100px] md:bg-position-[275px_-120px] bg-position-[0px_-110px] bg-no-repeat w-full lg:w-1/2 xl:w-full">
                <h3 className="pb-1.5">Click. Shop. Smile.</h3>
                <p className="pb-4 text-light-secondary-text">
                  Easy shopping for every lifestyle.
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn btn-primary text-white font-semibold btn-large rounded-[60px] text-sm leading-[22px] group py-1.5 pl-4 pr-2 inline-flex items-center"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300 ml-2">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
