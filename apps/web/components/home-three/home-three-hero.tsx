"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import HomeThreeCategoryMenu from "../category-menu/home-three-category-menu";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/home-3/hero-1.png",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: "Eat Fresh, Live Healthy",
    description: "Organic produce and daily essentials at the best prices.",
    href: "/shop-left-sidebar-3col",
  },
  {
    id: 2,
    image: "/images/home-3/hero-2.png",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Fresh Groceries, <br className="lg:block hidden" />
        Delivered Fast
      </>
    ),
    description: (
      <>
        From vegetables to daily essentials — everything you
        <br className="lg:block hidden" />
        need at your doorstep.
      </>
    ),
    href: "/shop-left-sidebar-3col",
  },
  {
    id: 3,
    image: "/images/home-3/hero-3.png",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Bringing Shine and <br className="lg:block hidden" />
        Freshness to Home
      </>
    ),
    description:
      "Best prices on cleaning supplies, detergents & home essentials.",
    href: "/shop-left-sidebar-3col",
  },
  {
    id: 4,
    image: "/images/home-3/hero-4.png",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        100% Farm-Fresh <br className="lg:block hidden" />
        Produce Vegetable
      </>
    ),
    description: (
      <>
        Handpicked fruits and vegetables with guaranteed
        <br className="lg:block hidden" />
        freshness.
      </>
    ),
    href: "/shop-left-sidebar-3col",
  },
  {
    id: 5,
    image: "/images/home-3/hero-5.png",
    offer: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Fast Fresh Groceries <br className="lg:block hidden" />
        Delivered Daily
      </>
    ),
    description: (
      <>
        From breakfast items to fresh ingredients, get quality
        <br className="lg:block hidden" />
        groceries quickly and conveniently.
      </>
    ),
    href: "/shop-left-sidebar-3col",
  },
];

export default function HomeThreeHero() {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <HomeThreeCategoryMenu />
          <div className="lg:col-span-9 col-span-12">
            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 7000 }}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".home-three-hero-next",
                  prevEl: ".home-three-hero-prev",
                }}
                className="home-five-hero-slider rounded-3xl relative md:bg-transparent bg-primary-darker sellzy-slider"
              >
                {HERO_SLIDES.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div
                      className="lg:p-0 p-8 pb-15 bg-left sm:bg-center bg-no-repeat bg-cover rounded-3xl xl:pl-[112px] lg:pl-[100px] single-hero-slider-item flex! items-center md:h-[600px]! h-[500px]!"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      {/* Content Section */}
                      <motion.div
                        className="single-hero-slider-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-x-2">
                          <h6 className="text-white">{slide.offer}</h6>
                          <span className="px-2 py-px text-black text-xs leading-[18px] bg-warning-light rounded-[100px]">
                            {slide.discount}
                          </span>
                        </div>
                        <h2 className="py-3 text-white">{slide.title}</h2>
                        <p className="text-white mb-6">{slide.description}</p>
                        <Link
                          href={slide.href}
                          className="btn btn-primary text-white btn-large rounded-[60px] group py-2 pl-5 pr-3 gap-x-3 inline-flex items-center"
                        >
                          Shop Now
                          <span className="size-8 bg-white glass-bg inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                            <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full items-center justify-between px-6 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex hidden">
                <button className="home-three-hero-prev bg-white/20 size-12 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto backdrop-blur-md">
                  <i className="hgi hgi-stroke hgi-arrow-left-01 text-2xl" />
                </button>
                <button className="home-three-hero-next bg-white/20 size-12 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto backdrop-blur-md">
                  <i className="hgi hgi-stroke hgi-arrow-right-01 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
