"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import StarRating from "@/components/common/star-rating";
import { ProductWithImages } from "@/lib/types";

const PRODUCTS = [
  {
    id: 1,
    images: [
      "/images/home-4/outfit-person-3.png",
      "/images/home-4/outfit-person-6.png",
      "/images/home-4/outfit-person-5.png",
      "/images/home-4/outfit-person-2.png",
    ],
    title: "Bali Underware Bra",
    price: 27.46,
    oldPrice: 29.99,
    discount: "10% OFF",
    delay: "0.2s",
  },
  {
    id: 2,
    images: [
      "/images/home-4/outfit-person-1.png",
      "/images/home-4/outfit-person-11.png",
      "/images/home-4/outfit-person-18.png",
      "/images/home-4/outfit-person-17.png",
    ],
    title: "Bali Underware Bra",
    price: 27.46,
    oldPrice: 29.99,
    discount: "10% OFF",
    delay: "0.3s",
  },
  {
    id: 3,
    images: [
      "/images/home-4/outfit-person-6.png",
      "/images/home-4/outfit-person-15.png",
      "/images/home-4/outfit-person-8.png",
      "/images/home-4/outfit-person-19.png",
    ],
    title: "Bali Underware Bra",
    price: 27.46,
    oldPrice: 29.99,
    discount: "10% OFF",
    delay: "0.4s",
  },
  {
    id: 4,
    images: [
      "/images/home-4/outfit-person-17.png",
      "/images/home-4/outfit-person-11.png",
      "/images/home-4/outfit-person-18.png",
      "/images/home-4/outfit-person-1.png",
    ],
    title: "Bali Underware Bra",
    price: 27.46,
    oldPrice: 29.99,
    discount: "10% OFF",
    delay: "0.5s",
  },
];

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["#D0AEFF", "#5ED9BA", "bg-warning-light", "#74CAFF", "#84A9FF"];

const ProductCard = ({ product }: { product: ProductWithImages }) => {
  const [activeSize, setActiveSize] = useState("S");
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="xl:col-span-3 md:col-span-6 col-span-12"
    >
      <div className="border border-gray-300 rounded-2xl product-card-1 p-6 group">
        <div className="mb-3 -mx-3 home-four-hand-picked-big-slider-1 sellzy-slider">
          <Swiper
            spaceBetween={10}
            // @ts-ignore
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product.images.map((img: string, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="mx-3">
                  <Image src={img} className="bg-[#F4F3F5] rounded-2xl" alt={`product-${idx}`} width={400} height={400} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mb-3 -mx-1.5 home-four-hand-picked-small-slider-1 sellzy-slider h-[90px]">
          <Swiper
            // @ts-ignore
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper h-full"
          >
            {product.images.map((img: string, idx: number) => (
              <SwiperSlide
                key={idx}
                className="cursor-pointer opacity-60 [&.swiper-slide-thumb-active]:opacity-100"
              >
                <div className="mx-1.5 h-full">
                  <Image
                    src={img}
                    alt="product"
                    width={90}
                    height={90}
                    className="bg-[#F4F3F5] rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="product-content">
          <h5 className="text-[20px] leading-[30px] font-bold pb-4">
            <Link href="/product-details">{product.title}</Link>
          </h5>
          <div className="rating-section flex items-center mb-4">
            <StarRating ratingPercentage={"80%"} />
            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
              (189)
            </span>
          </div>
          <div className="size-variation-section mb-4">
            <div className="size-variation-items flex items-center gap-3 2xl:flex-nowrap flex-wrap">
              {sizes.map((s) => (
                <div key={s} className="size-variation-item">
                  <button
                    onClick={() => setActiveSize(s)}
                    className={`cursor-pointer flex items-center justify-center text-sm leading-[26px] px-4 py-[7px] font-semibold border rounded-lg transition-colors text-[16px] ${
                      activeSize === s
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 text-light-primary-text hover:bg-[rgba(145,158,171,0.08)]"
                    }`}
                  >
                    {s}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="variation-buttons flex gap-x-2.5 mb-4">
            {colors.map((c) => (
              <div
                key={c}
                style={{
                  borderColor:
                    activeColor === c && !c.includes("bg-") ? c : undefined,
                }}
                className={`variation-color-item p-1 border rounded-full ${
                  activeColor === c
                    ? !c.includes("bg-")
                      ? ""
                      : "border-primary"
                    : "border-gray-300"
                }`}
              >
                <button
                  onClick={() => setActiveColor(c)}
                  style={{ backgroundColor: c.includes("bg-") ? undefined : c }}
                  className={`size-6 rounded-full flex items-center justify-center cursor-pointer ${
                    c.includes("bg-") ? c : ""
                  }`}
                >
                  <i
                    className={`hgi hgi-stroke hgi-tick-02 text-white ${activeColor === c ? "" : "hidden"}`}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="price-section flex items-center gap-x-3 mb-4">
            <span className="current-price text-[20px] font-urbanist leading-[30px] font-bold text-light-primary-text">
              ${product.price}
            </span>
            <span className="old-price text-[20px] font-urbanist font-medium leading-[30px] text-light-disabled-text line-through">
              ${product.oldPrice}
            </span>
            <span className="discount-percentage text-[20px] font-urbanist font-medium leading-[30px] text-error">
              {product.discount}
            </span>
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

export default function HandPicked() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center pb-12"
        >
          Hand picked Just for You
        </motion.h2>
        <div className="grid grid-cols-12 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
