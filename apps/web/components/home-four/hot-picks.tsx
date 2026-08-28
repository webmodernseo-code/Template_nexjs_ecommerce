"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuickView } from "@/context/quick-view-context";
import StarRating from "@/components/common/star-rating";
import { HotPickProduct } from "@/lib/types";

const PRODUCTS = [
  { id: 1, image: "/images/home-4/outfit-person-1.png", delay: ".3s" },
  { id: 2, image: "/images/home-4/outfit-person-2.png", delay: ".4s" },
  { id: 3, image: "/images/home-4/outfit-person-3.png", delay: ".5s" },
  { id: 4, image: "/images/home-4/outfit-person-4.png", delay: ".6s" },
  { id: 5, image: "/images/home-4/outfit-person-5.png", delay: ".7s" },
];

const ProductCard = ({ product }: { product: HotPickProduct }) => {
  const { openQuickView } = useQuickView();
  const colors = ["#D0AEFF", "#5ED9BA", "#FFE16A", "#74CAFF", "#84A9FF"];
  const [activeColor, setActiveColor] = React.useState(colors[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-3"
    >
      <div className="border border-gray-300 rounded-2xl product-card-1 p-6 group">
        <div className="product-image-container relative">
          <div className="product-image rounded-xl mb-4 overflow-hidden">
            <Link href="/product-details">
              <Image
                src={product.image}
                alt={`product-${product.id}`}
                width={300}
                height={400}
                className="w-full h-auto group-hover:scale-110 transition-all transform group-hover:-rotate-3 ease-in-out duration-300 bg-[#F4F3F5]"
              />
            </Link>
          </div>
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
          <span className="product-discount-badge inline-block relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-no-repeat after:bg-contain uppercase">
            SALES
          </span>
          <p className="py-3 text-sm leading-[22px]">Store Name/Category</p>
          <h6 className="text-[18px] leading-7 font-bold pb-3">
            <Link href="/product-details">Nebulizer Ultracare</Link>
          </h6>
          <div className="rating-section flex items-center mb-3">
            <StarRating ratingPercentage={"80%"} />
            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
              (118)
            </span>
          </div>
          <div className="price-section flex items-center gap-x-3 mb-3">
            <span className="current-price text-[16px] leading-6 font-semibold text-light-primary-text">
              $28.56
            </span>
            <span className="old-price text-sm leading-[22px] text-light-disabled-text line-through">
              $29.56
            </span>
            <span className="discount-percentage text-sm leading-[22px] font-semibold text-error">
              10% OFF
            </span>
          </div>
          <div className="variation-buttons flex gap-x-2.5 mb-3">
            {colors.map((c) => (
              <div
                key={c}
                style={{ borderColor: activeColor === c ? c : undefined }}
                className={`variation-color-item p-1 border rounded-full ${
                  activeColor === c ? "" : "border-gray-300"
                }`}
              >
                <button
                  style={{ backgroundColor: c }}
                  onClick={() => setActiveColor(c)}
                  className="size-6 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <i
                    className={`hgi hgi-stroke hgi-tick-02 text-white ${
                      activeColor === c ? "" : "hidden"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="deal-progress flex flex-col gap-y-1 mb-3">
            <div className="progress w-full h-1.5 bg-warning-lighter rounded-[50px] overflow-hidden">
              <div
                style={{ width: "60%" }}
                className="progress-bar h-full bg-warning rounded-[50px]"
              />
            </div>
            <div className="deal-stock flex items-center justify-between">
              <div className="stock-sold flex items-center gap-x-2.5">
                <p className="text-[16px] leading-6">Sold:</p>
                <p className="text-[16px] leading-6 text-light-primary-text">
                  4
                </p>
              </div>
              <div className="stock-remaining flex items-center gap-x-2.5">
                <p className="text-[16px] leading-6">Available:</p>
                <p className="text-[16px] leading-6 text-light-primary-text">
                  200
                </p>
              </div>
            </div>
          </div>
          <div className="btn-section flex items-center gap-x-4">
            <Link
              href="/wishlist-style-v1"
              className="size-11 flex flex-none items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300"
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
  );
};

export default function HotPicks() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 3;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-center mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3>Today's Hot Picks</h3>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="limited-time-countdown flex items-center justify-center gap-x-1 bg-error-lighter py-[9px] px-6 rounded-[50px] mx-auto mt-5 md:mt-0 sellzy-countdown"
            >
              <h5 className="text-error">Ends in:</h5>
              <h5 className="days text-error">{formatTime(timeLeft.days)}</h5>
              <h5 className="text-error">:</h5>
              <h5 className="hours text-error">{formatTime(timeLeft.hours)}</h5>
              <h5 className="text-error">:</h5>
              <h5 className="minutes text-error">
                {formatTime(timeLeft.minutes)}
              </h5>
              <h5 className="text-error">:</h5>
              <h5 className="seconds text-error">
                {formatTime(timeLeft.seconds)}
              </h5>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="home-four-picks-slider-nav flex items-center justify-between gap-x-6"
            >
              <button className="hot-picks-slider-nav-prev size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer pointer-events-auto bg-gray-100 hover:bg-primary text-black hover:text-white">
                <i className="hgi hgi-stroke hgi-arrow-left-01 text-2xl" />
              </button>
              <button className="hot-picks-slider-nav-next size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer pointer-events-auto bg-gray-100 hover:bg-primary text-black hover:text-white">
                <i className="hgi hgi-stroke hgi-arrow-right-01 text-2xl" />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="home-four-picks-slider -mx-3 sellzy-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              prevEl: ".hot-picks-slider-nav-prev",
              nextEl: ".hot-picks-slider-nav-next",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
              1441: { slidesPerView: 5 },
            }}
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
