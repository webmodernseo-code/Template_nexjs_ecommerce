"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuickView } from "@/context/quick-view-context";
import StarRating from "@/components/common/star-rating";
import { Product } from "@/lib/types";

const PRODUCTS = [
  {
    id: 1,
    image: "/images/home-5/tv.png",
    title: "Smart 4k Television",
    price: 127.49,
    oldPrice: 229.99,
    rating: 189,
    category: ["view-all"],
    delay: 0.2,
  },
  {
    id: 2,
    image: "/images/home-5/samsung-phone-2.png",
    title: "Samsung Galaxy S22",
    price: 899.0,
    oldPrice: 1099.0,
    rating: 231,
    category: ["view-all", "smart-phones"],
    delay: 0.3,
  },
  {
    id: 3,
    image: "/images/home-5/headphone.png",
    title: "Sony Noise Cancelling",
    price: 249.99,
    oldPrice: 349.99,
    rating: 412,
    category: ["view-all", "headphone"],
    delay: 0.4,
  },
  {
    id: 4,
    image: "/images/home-5/iphone.png",
    title: "iPhone 14 Pro Max",
    price: 1099.99,
    oldPrice: 1199.99,
    rating: 541,
    category: ["view-all", "smart-phones"],
    delay: 0.5,
  },
  {
    id: 5,
    image: "/images/home-5/action-cam.png",
    title: "4K Action Camera Mini",
    price: 199.99,
    oldPrice: 249.99,
    rating: 310,
    category: ["view-all", "camera"],
    delay: 0.2,
  },
  {
    id: 6,
    image: "/images/home-5/earpods.png",
    title: "AirPods Pro Gen 2",
    price: 249.0,
    oldPrice: 279.0,
    rating: 980,
    category: ["view-all", "headphone"],
    delay: 0.3,
  },
  {
    id: 7,
    image: "/images/home-5/drone.png",
    title: "Pro Cinematic Drone",
    price: 799.0,
    oldPrice: 999.0,
    rating: 445,
    category: ["view-all", "camera"],
    delay: 0.4,
  },
  {
    id: 8,
    image: "/images/home-5/smart-watch-2.png",
    title: "Apple Watch Series 8",
    price: 399.0,
    oldPrice: 429.0,
    rating: 651,
    category: ["view-all"],
    delay: 0.5,
  },
  {
    id: 9,
    image: "/images/home-5/playstation.png",
    title: "PlayStation 5 Console",
    price: 499.99,
    oldPrice: 549.99,
    rating: 892,
    category: ["view-all"],
    delay: 0.6,
  },
  {
    id: 10,
    image: "/images/home-5/redmi.png",
    title: "Redmi Note 12 Pro",
    price: 299.0,
    oldPrice: 349.0,
    rating: 150,
    category: ["view-all", "smart-phones"],
    delay: 0.6,
  },
];

const TABS = [
  { id: "view-all", label: "View All" },
  { id: "smart-phones", label: "Smart Phones" },
  { id: "camera", label: "Camera" },
  { id: "headphone", label: "Headphone" },
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

const ProductCard = ({ product }: { product: Product }) => {
  const { openQuickView } = useQuickView();
  const timeLeft = useCountdown(3);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="col-span-1"
    >
      <div className="border border-gray-300 rounded-2xl product-card-1 p-4 group">
        <div className="product-image-container relative">
          <div className="product-image rounded-xl mb-4 overflow-hidden">
            <Link href="#">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="transition-all transform ease-in-out duration-300 mx-auto"
                />
              </motion.div>
            </Link>
          </div>
          <div className="product-btn-actions absolute bottom-0 right-0 left-0 flex justify-center z-9 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-3">
            <ul className="flex items-center gap-x-px">
              <li>
                <button
                  aria-label="Add to Wishlist"
                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center rounded-tl-sm rounded-bl-sm before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                >
                  <i className="hgi hgi-stroke hgi-favourite text-2xl leading-6 text-light-secondary-text" />
                </button>
              </li>
              <li>
                <button
                  aria-label="Compare"
                  className="product-btn-action-item relative size-11 bg-white inline-flex items-center justify-center before:absolute before:left-[calc(50%-8px)] before:bottom-full before:z-9 before:border-8 before:border-transparent before:border-t-black before:opacity-0 before:invisible before:-mb-3.5 hover:before:opacity-100 hover:before:visible before:transition-all before:duration-300 after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:rounded-sm after:bg-gray-800 after:whitespace-nowrap after:text-white after:text-xs after:leading-[18px] after:py-[3px] after:px-2 after:content-[attr(aria-label)] after:opacity-0 after:invisible after:transition-all after:duration-300 hover:after:opacity-100 hover:after:visible hover:after:-translate-y-2.5 hover:before:-translate-y-2.5"
                >
                  <i className="hgi hgi-stroke hgi-reload text-2xl leading-6 text-light-primary-text" />
                </button>
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
        <div className="product-content text-center">
          <div className="limited-time-product-countdown sellzy-countdown flex items-center justify-center gap-x-1 bg-[#FF4842]/12 py-[5px] px-5 rounded-[50px] text-[12px] leading-[18px] text-error-dark">
            <p className="days">{timeLeft.days}</p>
            <p>Days</p>
            <p>:</p>
            <p className="hours">{timeLeft.hours}</p>
            <p>Hours</p>
            <p>:</p>
            <p className="minutes">{timeLeft.minutes}</p>
            <p>Mins</p>
            <p>:</p>
            <p className="seconds">{timeLeft.seconds}</p>
            <p>Secs</p>
          </div>
          <h5 className="text-[20px] leading-[30px] font-bold py-3">
            <Link href="#">{product.title}</Link>
          </h5>
          <div className="rating-section flex items-center justify-center mb-3">
            <StarRating ratingPercentage={"80%"} />
            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
              ({product.rating})
            </span>
          </div>
          <div className="price-section flex items-center justify-center gap-x-3 mb-3">
            <span className="current-price text-[18px] leading-7 font-urbanist font-bold text-primary">
              ${product.price}
            </span>
            <span className="old-price text-[18px] leading-7 font-urbanist font-semibold text-light-disabled-text line-through">
              ${product.oldPrice}
            </span>
          </div>
          <div className="btn-section flex items-center gap-x-4">
            <button className="size-11 flex flex-none items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300">
              <i className="hgi hgi-stroke hgi-favourite text-xl text-light-secondary-text" />
            </button>
            <button className="btn btn-primary rounded-full font-semibold text-sm leading-6 px-6.5 py-2 flex-1">
              <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function LimitedTimeSteals() {
  const [activeTab, setActiveTab] = useState("view-all");
  const mainTimeLeft = useCountdown(10); // Main top timer

  const [displayProducts, setDisplayProducts] = useState(PRODUCTS);

  useEffect(() => {
    if (activeTab === "view-all") {
      setDisplayProducts(PRODUCTS);
    } else {
      const match = PRODUCTS.filter((product) =>
        product.category.includes(activeTab),
      );
      const other = PRODUCTS.filter(
        (product) => !product.category.includes(activeTab),
      );
      // Shuffle the other categories to fill up the exactly 10 items grid
      const shuffled = [...other].sort(() => Math.random() - 0.5);
      setDisplayProducts([...match, ...shuffled].slice(0, 10));
    }
  }, [activeTab]);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex xl:flex-row flex-col gap-y-4 items-center xl:justify-between whitespace-nowrap"
        >
          <div className="text-center xl:text-left">
            <h3 className="pb-2">Limited-Time Steals</h3>
            <p>Up to 69% discount for limited time 🔥</p>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-x-5 gap-y-5 flex-wrap">
            <div className="limited-time-countdown flex items-center gap-x-1 bg-warning-lighter py-[9px] px-6 rounded-[50px] sellzy-countdown">
              <h5 className="text-warning-dark">Ends in:</h5>
              <h5 className="days text-warning-dark">{mainTimeLeft.days}</h5>
              <h5 className="text-warning-dark">:</h5>
              <h5 className="hours text-warning-dark">{mainTimeLeft.hours}</h5>
              <h5 className="text-warning-dark">:</h5>
              <h5 className="minutes text-warning-dark">
                {mainTimeLeft.minutes}
              </h5>
              <h5 className="text-warning-dark">:</h5>
              <h5 className="seconds text-warning-dark">
                {mainTimeLeft.seconds}
              </h5>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-y-4 gap-x-4 home-five-product-filter max-w-full">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn btn-default outline btn-large py-2.5 px-[22px] rounded-full transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-white border-primary"
                      : "shadow-none"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="tab-content overflow-hidden">
          <motion.div
            layout
            className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
