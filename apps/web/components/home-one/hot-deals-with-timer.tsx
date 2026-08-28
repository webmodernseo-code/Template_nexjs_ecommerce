"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuickView } from "@/context/quick-view-context";
import StarRating from "@/components/common/star-rating";

const PRODUCTS = [
  {
    image: "/images/combat.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: "80%",
    ratingCount: "189",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    badgeText: "15% OFF",
    deliveryText: "12-48 hours",
    storeName: "Store Name/ Category",
    delay: ".2s",
  },
  {
    image: "/images/temperature-gun-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: "80%",
    ratingCount: "189",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    badgeText: "15% OFF",
    deliveryText: "12-48 hours",
    storeName: "Store Name/ Category",
    delay: ".3s",
  },
  {
    image: "/images/power-c.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: "80%",
    ratingCount: "189",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    badgeText: "15% OFF",
    deliveryText: "12-48 hours",
    storeName: "Store Name/ Category",
    delay: ".4s",
  },
  {
    image: "/images/bp-machine.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: "80%",
    ratingCount: "189",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    badgeText: "15% OFF",
    deliveryText: "12-48 hours",
    storeName: "Store Name/ Category",
    delay: ".5s",
  },
  {
    image: "/images/bp-machine.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    ratingPercentage: "80%",
    ratingCount: "189",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    badgeText: "15% OFF",
    deliveryText: "12-48 hours",
    storeName: "Store Name/ Category",
    delay: ".6s",
  },
];

export default function HotDealsWithTimer() {
  const { openQuickView } = useQuickView();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
      });

      if (difference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-x-10 xl:gap-x-[76px] items-center gap-y-12">
          <motion.div
            className="lg:col-span-4 col-span-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hot-deal-content">
              <h5 className="text-primary">Limited Time Offer</h5>
              <h2 className="my-4">Hot Deals This Week</h2>
              <p className="mb-4">
                Weekly deals are back and better than ever, bringing fresh new
                offers. Your daily routine and elevate your beauty experience.
                Don't miss out on these limited-time savings!
              </p>
              <div className="home-one-hot-deal-countdown flex items-center justify-between mb-10 gap-x-3 sellzy-countdown">
                <div className="countdown-item flex flex-col items-center justify-center w-[90px] h-[86px] bg-white shadow-light-z-12 text-center">
                  <h5 className="days text-error">{timeLeft.days}</h5>
                  <p className="pt-2">Days</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="countdown-item flex flex-col items-center justify-center w-[90px] h-[86px] bg-white shadow-light-z-12 text-center">
                  <h5 className="hours text-error">{timeLeft.hours}</h5>
                  <p className="pt-2">Hours</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="countdown-item flex flex-col items-center justify-center w-[90px] h-[86px] bg-white shadow-light-z-12 text-center">
                  <h5 className="minutes text-error">{timeLeft.minutes}</h5>
                  <p className="pt-2">Min</p>
                </div>
                <p className="font-semibold">:</p>
                <div className="countdown-item flex flex-col items-center justify-center w-[90px] h-[86px] bg-white shadow-light-z-12 text-center">
                  <h5 className="seconds text-error">{timeLeft.seconds}</h5>
                  <p className="pt-2">Sec</p>
                </div>
              </div>
              <Link
                href="/shop-left-sidebar"
                className="btn btn-large btn-primary rounded-[60px] group py-2 pl-5 pr-3"
              >
                View All Products
                <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                  <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                </span>
              </Link>
            </div>
          </motion.div>
          <div className="lg:col-span-8 col-span-12">
            <div className="home-one-hot-deals-slider -mx-4 sellzy-slider relative">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7000 }}
                pagination={{
                  type: "progressbar",
                  el: ".home-one-hot-deals-slider .swiper-pagination",
                }}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  769: { slidesPerView: 2 },
                  1025: { slidesPerView: 2 },
                  1200: { slidesPerView: 4 },
                  1441: { slidesPerView: 4 },
                }}
              >
                {PRODUCTS.map((product, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="single-hot-deal-item"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: parseFloat(product.delay) || 0,
                      }}
                    >
                      <div className="rounded-2xl product-card-1 p-4 group bg-white">
                        <div className="product-image-container relative">
                          <div className="product-image rounded-xl bg-[#F4F3F5] mb-4 overflow-hidden">
                            <Link href="/product-details">
                              <Image
                                src={product.image}
                                alt={`product-${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-auto group-hover:scale-110 transition-all transform group-hover:-rotate-3 ease-in-out duration-300"
                              />
                            </Link>
                          </div>
                          <span className="product-discount-badge absolute top-[11px] left-0 bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-contain">
                            {product.badgeText}
                          </span>
                          <div className="product-btn-actions absolute bottom-0 right-0 left-0 flex justify-center z-9 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-3">
                            <ul className="flex items-center gap-x-px">
                              <li>
                                <Link
                                  aria-label="Add to Wishlist"
                                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center rounded-tl-sm rounded-bl-sm before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                                  href="/wishlist-style-v1"
                                >
                                  <i className="hgi hgi-stroke hgi-favourite text-2xl leading-6 text-light-secondary-text" />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  aria-label="Compare"
                                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                                  href="/compare"
                                >
                                  <i className="hgi hgi-stroke hgi-reload text-2xl leading-6 text-light-primary-text" />
                                </Link>
                              </li>
                              <li>
                                <button
                                  onClick={() => openQuickView(product)}
                                  aria-label="Quick view"
                                  className="quick-view-sidebar-btn product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center rounded-tr-sm rounded-br-sm before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                                >
                                  <i className="hgi hgi-stroke hgi-view text-2xl leading-6 text-light-primary-text" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-content">
                          <p className="inline-flex items-center gap-x-1 px-1 py-0.5 bg-gray-200 rounded-sm mb-4">
                            <i className="hgi hgi-stroke hgi-delivery-truck-02 text-base text-light-secondary-text" />
                            <span className="text-sm leading-[18px]">
                              {product.deliveryText}
                            </span>
                          </p>
                          <p className="text-sm leading-[22px] mb-4">
                            {product.storeName}
                          </p>
                          <h5 className="text-base leading-6 font-semibold font-dm-sans mb-4 min-h-[48px]">
                            <Link
                              href="/product-details"
                              className="line-clamp-2"
                            >
                              {product.title}
                            </Link>
                          </h5>
                          <div className="rating-section flex items-center mb-4">
                            <StarRating ratingPercentage={product.ratingPercentage} />
                            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                              ({product.ratingCount})
                            </span>
                          </div>
                          <div className="price-section flex items-center gap-x-3 mb-2">
                            <span className="current-price text-base font-semibold text-light-primary-text">
                              {product.currentPrice}
                            </span>
                            <span className="old-price text-sm leading-[22px] font-normal text-light-disabled-text line-through">
                              {product.oldPrice}
                            </span>
                            <span className="discount-percentage text-sm leading-[22px] font-semibold text-error">
                              {product.discount}
                            </span>
                          </div>
                          <div className="btn-section flex items-center gap-x-4">
                            <Link
                              href="/wishlist-style-v1"
                              className="size-10 shrink-0 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 border border-gray-300"
                            >
                              <i className="hgi hgi-stroke hgi-favourite text-xl text-light-secondary-text" />
                            </Link>
                            <Link
                              href="/cart-single-vendor"
                              className="btn btn-primary rounded-full font-semibold text-sm leading-6 px-6.5 py-2 flex-1"
                            >
                              <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
                              <span>Add to Cart</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
