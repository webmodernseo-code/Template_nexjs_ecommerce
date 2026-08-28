"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    image: "/images/home-5/hero-1.png",
    subtitle: "Exclusive offer",
    discount: "25% OFF",
    title: "Smart Living Starts",
    desc: (
      <>
        From refrigerators to air conditioners — quality appliances that make{" "}
        <br className="lg:block hidden" />
        your life easier, healthier, and more efficient.
      </>
    ),
  },
  {
    id: 2,
    image: "/images/home-5/hero-2.png",
    subtitle: "Exclusive offer",
    discount: "25% OFF",
    title: "Play Beyond Limits",
    desc: (
      <>
        Gaming consoles, high-refresh monitors, accessories, and everything you{" "}
        <br className="lg:block hidden" />
        need to create the perfect gaming setup.
      </>
    ),
  },
  {
    id: 3,
    image: "/images/home-5/hero-3.png",
    subtitle: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Unleash Power. Maximize <br className="lg:block hidden" />
        Productivity.
      </>
    ),
    desc: (
      <>
        Explore a wide range of laptops, gaming PCs, and accessories built for{" "}
        <br className="lg:block hidden" />
        professionals, gamers, and creators.
      </>
    ),
  },
  {
    id: 4,
    image: "/images/home-5/hero-4.png",
    subtitle: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Experience a Smarter, More <br className="lg:block hidden" />
        Convenient Home.
      </>
    ),
    desc: (
      <>
        Smart lights, security systems, speakers, and IoT devices designed to{" "}
        <br className="lg:block hidden" />
        bring convenience and intelligence to your everyday life.
      </>
    ),
  },
  {
    id: 5,
    image: "/images/home-5/hero-5.png",
    subtitle: "Exclusive offer",
    discount: "25% OFF",
    title: (
      <>
        Gadgets That <br className="lg:block hidden" />
        Make Life Easier
      </>
    ),
    desc: "Find the latest tech, accessories, and smart devices in one place.",
  },
];

export default function HeroFive() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <section className="pt-6 pb-[70px]">
      <div className="container">
        <div className="relative">
          <div className="home-five-hero-slider rounded-3xl relative md:bg-transparent bg-[#8EBDD1] sellzy-slider">
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
                    className="lg:p-0 p-8 pb-15 md:bg-center bg-no-repeat bg-cover rounded-3xl xl:pl-[177px] lg:pl-[100px] single-hero-slider-item flex! items-center md:h-[600px]! h-[500px]!"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    {/* Content Section */}
                    <div className="single-hero-slider-content">
                      <div className="flex items-center gap-x-2">
                        <h6 className="text-white">{slide.subtitle}</h6>
                        <span className="px-2 py-px text-black text-xs leading-[18px] bg-success-light rounded-[100px]">
                          {slide.discount}
                        </span>
                      </div>
                      <h2 className="py-3 text-white">{slide.title}</h2>
                      <p className="text-white mb-6">{slide.desc}</p>
                      <Link
                        href="/shop-left-sidebar"
                        className="btn bg-warning-light text-black btn-large rounded-[60px] group py-2 pl-5 pr-3"
                      >
                        Shop Now
                        <span className="size-8 bg-white glass-bg inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                          <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="home-five-hero-slider-nav absolute top-1/2 -translate-y-1/2 right-0 w-full hidden lg:flex items-center justify-between px-6 z-10 pointer-events-none">
              <button
                ref={setPrevEl}
                className="slider-btn hero-five-prev size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer pointer-events-auto bg-white/50 text-white hover:bg-primary hover:text-white"
              >
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
              </button>
              <button
                ref={setNextEl}
                className="slider-btn hero-five-next size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer pointer-events-auto text-white bg-white/50 hover:bg-primary hover:text-white"
              >
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
