"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    image: "/images/home-4/hero-1.png",
    subtitle: "Get up to 30% of on your first $150 purchase",
    titleStart: "Discover the ",
    titleEnd: "Season's Newest Styles",
    titleBreak: true,
    descStart:
      "Explore a fresh collection of trends, colors, and silhouettes curated to ",
    descEnd: "elevate your everyday look.",
    descBreak: true,
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 2,
    image: "/images/home-4/hero-2.png",
    subtitle: "Get up to 30% of on your first $150 purchase",
    titleStart: "Stay Warm for Less",
    titleEnd: "",
    titleBreak: false,
    descStart:
      "Grab exclusive deals on sweaters, hoodies, coats, and cold-weather ",
    descEnd: "must-haves before the season ends.",
    descBreak: true,
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 3,
    image: "/images/home-4/hero-3.png",
    subtitle: "Get up to 30% of on your first $150 purchase",
    titleStart: "Fashion for the ",
    titleEnd: "Modern Elite",
    titleBreak: true,
    descStart:
      "Experience luxury craftsmanship, timeless silhouettes, and high-quality ",
    descEnd: "fabrics made for a refined wardrobe.",
    descBreak: true,
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 4,
    image: "/images/home-4/hero-4.png",
    subtitle: "Get up to 30% of on your first $150 purchase",
    titleStart: "Wrap Yourself ",
    titleEnd: "in Winter Elegance",
    titleBreak: true,
    descStart: "Handcrafted designs & premium fabrics for a timeless look.",
    descEnd: "",
    descBreak: false,
    link: "/shop-left-sidebar-3col",
  },
  {
    id: 5,
    image: "/images/home-4/hero-5.png",
    subtitle: "Get up to 30% of on your first $150 purchase",
    titleStart: "Big Savings, Bigger Style",
    titleEnd: "",
    titleBreak: false,
    descStart:
      "Grab your favorite fashion picks at incredible prices — limited stock on bestselling designs.",
    descEnd: "",
    descBreak: false,
    link: "/shop-left-sidebar-3col",
  },
];

export default function HeroFour() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="pt-6">
      <div className="container">
        <div className="relative home-four-hero-slider">
          <div className=" rounded-3xl relative md:bg-transparent bg-[#FFEB69] sellzy-slider">
            <Swiper
              modules={[Navigation, Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop={true}
              navigation={{ prevEl, nextEl }}
              pagination={{
                clickable: true,
              }}
              className="rounded-3xl"
            >
              {SLIDES.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className="lg:p-0 p-8 pb-15 bg-left sm:bg-center bg-no-repeat bg-cover rounded-3xl xl:pl-[177px] lg:pl-[100px] single-hero-slider-item flex! items-center md:h-[600px]! h-[500px]!"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    {/* Content Section */}
                    <div className="single-hero-slider-content">
                      <div className="flex items-center gap-x-2">
                        <h6 className="text-black">{slide.subtitle}</h6>
                      </div>
                      <h2 className="py-3 text-black">
                        {slide.titleStart}
                        {slide.titleBreak && <br className="hidden lg:block" />}
                        {slide.titleEnd}
                      </h2>
                      <p className="text-black mb-6">
                        {slide.descStart}
                        {slide.descBreak && <br className="hidden lg:block" />}
                        {slide.descEnd}
                      </p>
                      <Link
                        href={slide.link}
                        className="btn btn-primary text-white btn-large rounded-[60px] group py-2 pl-5 pr-3"
                      >
                        Shop Now
                        <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                          <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="home-four-hero-slider-nav absolute top-1/2 z-10 -translate-y-1/2 right-0 w-full hidden lg:flex items-center justify-between px-6 pointer-events-none">
              <button
                ref={setPrevEl}
                className="slider-btn text-white hero-four-prev size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer pointer-events-auto bg-white/50 hover:bg-primary  hover:text-white"
              >
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-2xl" />
              </button>
              <button
                ref={setNextEl}
                className="slider-btn hero-four-next size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn text-white cursor-pointer pointer-events-auto bg-white/50 hover:bg-primary hover:text-white"
              >
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
