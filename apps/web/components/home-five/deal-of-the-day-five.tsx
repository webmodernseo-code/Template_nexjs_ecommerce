"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";
import { Deal } from "@/lib/types";

const DEALS = [
  {
    id: 1,
    image: "/images/home-5/iphone-2.png",
    discount: "15% OFF",
    title: "iPhone 17 Pro Max",
    rating: 189,
    variants: ["#D0AEFF", "#5ED9BA", "#FFE16A", "#74CAFF", "#84A9FF"],
    sold: 4,
    available: 200,
    progress: 60,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    daysOut: 5,
  },
  {
    id: 2,
    image: "/images/home-5/macbook.png",
    discount: "15% OFF",
    title: "MacBook Pro",
    rating: 189,
    variants: ["#D0AEFF", "#5ED9BA", "#FFE16A", "#74CAFF", "#84A9FF"],
    sold: 4,
    available: 200,
    progress: 60,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    daysOut: 7,
  },
  {
    id: 3,
    image: "/images/home-5/iphone-2.png",
    discount: "15% OFF",
    title: "iPhone 17 Pro Max",
    rating: 189,
    variants: ["#D0AEFF", "#5ED9BA", "#FFE16A", "#74CAFF", "#84A9FF"],
    sold: 4,
    available: 200,
    progress: 60,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    daysOut: 2,
  },
  {
    id: 4,
    image: "/images/home-5/macbook.png",
    discount: "15% OFF",
    title: "MacBook Pro",
    rating: 189,
    variants: ["#D0AEFF", "#5ED9BA", "#FFE16A", "#74CAFF", "#84A9FF"],
    sold: 4,
    available: 200,
    progress: 60,
    currentPrice: "$27.49",
    oldPrice: "$29.99",
    daysOut: 4,
  },
];

const useCountdown = (daysOut = 10) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysOut);
    const countDownDate = targetDate.getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [daysOut]);

  return timeLeft;
};

const DealCard = ({ deal }: { deal: Deal }) => {
  const timeLeft = useCountdown(deal.daysOut);
  const [selectedColor, setSelectedColor] = useState(deal.variants[0]);

  return (
    <div className="flex flex-col md:flex-row border border-error rounded-3xl divide-y md:divide-y-0 md:divide-x divide-gray-300">
      <div className="product-image md:w-1/2 w-full p-6 max-h-[400px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full h-full flex items-center justify-center"
        >
          <Image
            src={deal.image}
            alt={deal.title}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
      <div className="px-6 py-[31px] md:w-1/2 w-full">
        <span className="product-discount-badge relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:right-0 after:translate-x-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-contain">
          {deal.discount}
        </span>
        <h4 className="py-2">{deal.title}</h4>

        <div className="rating-section flex items-center mb-4">
          <StarRating ratingPercentage={"80%"} />
          <span className="text-sm leading-[22px] font-normal inline-block ml-1">
            ({deal.rating})
          </span>
        </div>

        <div className="variation-buttons flex gap-x-2.5 mb-4">
          {deal.variants.map((color: string, index: number) => (
            <div
              key={index}
              className={`variation-color-item p-1 border rounded-full transition-colors ${selectedColor === color ? "border-primary" : "border-gray-300"}`}
            >
              <button
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className="size-6 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
              >
                <i
                  className={`hgi hgi-stroke hgi-tick-02 text-white ${selectedColor === color ? "" : "hidden"}`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="home-five-deal-of-the-day-countdown flex items-center gap-2 mb-4 sellzy-countdown">
          <div className="bg-gray-200 rounded-xl w-20 h-[60px] flex flex-col items-center justify-center">
            <p className="text-xs leading-[18px] font-normal">Days</p>
            <p className="text-sm leading-[22px] font-medium text-light-primary-text days">
              {timeLeft.days}
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl w-20 h-[60px] flex flex-col items-center justify-center">
            <p className="text-xs leading-[18px] font-normal">Hours</p>
            <p className="text-sm leading-[22px] font-medium text-light-primary-text hours">
              {timeLeft.hours}
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl w-20 h-[60px] flex flex-col items-center justify-center">
            <p className="text-xs leading-[18px] font-normal">Minutes</p>
            <p className="text-sm leading-[22px] font-medium text-light-primary-text minutes">
              {timeLeft.minutes}
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl w-20 h-[60px] flex flex-col items-center justify-center">
            <p className="text-xs leading-[18px] font-normal">Seconds</p>
            <p className="text-sm leading-[22px] font-medium text-light-primary-text seconds">
              {timeLeft.seconds}
            </p>
          </div>
        </div>

        <div className="deal-progress flex flex-col gap-y-1 mb-4">
          <div className="progress w-full h-1.5 bg-warning-lighter rounded-[50px] overflow-hidden">
            <div
              style={{ width: `${deal.progress}%` }}
              className="progress-bar h-full bg-warning rounded-[50px]"
            />
          </div>
          <div className="deal-stock flex items-center justify-between">
            <div className="stock-sold flex items-center gap-x-2.5">
              <p className="text-xs leading-[18px]">Sold:</p>
              <p className="text-xs leading-[18px] text-light-primary-text">
                {deal.sold}
              </p>
            </div>
            <div className="stock-remaining flex items-center gap-x-2.5">
              <p className="text-xs leading-[18px]">Available:</p>
              <p className="text-xs leading-[18px] text-light-primary-text">
                {deal.available}
              </p>
            </div>
          </div>
        </div>

        <div className="gap-x-2 flex flex-wrap gap-y-3 sm:flex-nowrap items-center justify-between">
          <div className="price-section flex items-center gap-x-3">
            <span className="current-price text-lg leading-7 font-bold text-light-primary-text font-urbanist">
              {deal.currentPrice}
            </span>
            <span className="old-price text-lg leading-7 font-semibold text-light-disabled-text line-through font-urbanist">
              {deal.oldPrice}
            </span>
          </div>
          <Link
            href="/cart-single-vendor"
            className="btn btn-primary rounded-full font-semibold text-sm leading-6 py-1.5 px-[32.5px] whitespace-nowrap"
          >
            <span>
              <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
            </span>
            <span>Add to Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function DealOfTheDayFive() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-12 text-center"
        >
          Deals of the day
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="home-five-deal-of-the-day-slider sellzy-slider"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1025: {
                slidesPerView: 2,
              },
            }}
          >
            {DEALS.map((deal) => (
              <SwiperSlide key={deal.id}>
                <DealCard deal={deal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
