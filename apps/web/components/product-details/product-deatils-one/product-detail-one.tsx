"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "@/components/common/star-rating";

const IMAGES = [
  "/images/product-details/product-details-slider-1.png",
  "/images/product-details/product-details-slider-2.png",
  "/images/product-details/product-details-slider-3.png",
  "/images/product-details/product-details-slider-4.png",
  "/images/product-details/product-details-slider-5.png",
  "/images/product-details/product-details-slider-6.png",
  "/images/product-details/product-details-slider-1.png",
  "/images/product-details/product-details-slider-1.png",
];

const COLORS = [
  {
    id: "green",
    hex: "#088178",
    img: "/images/product-details/color-selector-1.png",
    label: "Green",
  },
  {
    id: "blue",
    hex: "#3366FF",
    img: "/images/product-details/color-selector-2.png",
    label: "Blue",
  },
  {
    id: "yellow",
    hex: "#FFC107",
    img: "/images/product-details/color-selector-3.png",
    label: "Yellow",
  },
  {
    id: "red",
    hex: "#CB0233",
    img: "/images/product-details/color-selector-4.png",
    label: "Red",
  },
];

const SIZES = ["S", "M", "L", "XL", "XXL", "XXXL"];

export default function ProductDetailOne() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isXl, setIsXl] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("green");
  const [selectedSize, setSelectedSize] = useState<string>("S");
  const [quantity, setQuantity] = useState<number>(1);

  // Track xl breakpoint for thumb swiper direction
  useEffect(() => {
    const check = () => setIsXl(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity((q) => q + 1);
    else if (type === "dec" && quantity > 1) setQuantity((q) => q - 1);
  };

  const selectedColorLabel =
    COLORS.find((c) => c.id === selectedColor)?.label || "Green";

  return (
    <section>
      <div className="container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Image Sliders */}
          <div className="xl:col-span-7 lg:col-span-6">
            <div className="flex gap-x-6 xl:flex-row flex-col gap-y-4 xl:gap-y-0 xl:gap-x-6">
              {/* Thumbnails — horizontal strip on mobile, vertical column on xl */}
              <div className="xl:w-[114px] w-full order-2 xl:order-1 flex-none overflow-hidden h-[80px] sm:h-[90px] xl:h-[700px]">
                <Swiper
                  key={isXl ? "thumb-v" : "thumb-h"}
                  onSwiper={setThumbsSwiper}
                  direction={isXl ? "vertical" : "horizontal"}
                  spaceBetween={isXl ? 16 : 10}
                  slidesPerView={isXl ? 6 : 4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={
                    isXl
                      ? undefined
                      : {
                          480: { slidesPerView: 5 },
                          640: { slidesPerView: 6 },
                          768: { slidesPerView: 7 },
                        }
                  }
                  className="h-full w-full"
                >
                  {IMAGES.map((img, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="cursor-pointer overflow-hidden rounded-lg opacity-60 [&.swiper-slide-thumb-active]:opacity-100 transition-opacity"
                    >
                      <div className="h-full w-full bg-gray-100 flex items-center justify-center rounded-lg">
                        <Image
                          width={112}
                          height={112}
                          src={img}
                          alt={`thumbnail-${idx}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Big Slider */}
              <div className="w-full xl:flex-1 order-1 xl:order-2 overflow-hidden relative aspect-square sm:aspect-4/3 xl:aspect-auto xl:h-[700px]">
                <Swiper
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="h-full w-full rounded-3xl"
                >
                  {IMAGES.map((img, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="rounded-3xl overflow-hidden  flex items-center justify-center"
                    >
                      <Image
                        fill
                        src={img}
                        alt={`product-large-${idx}`}
                        className="w-full h-auto object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Nav Arrows built specifically to match the old design constraints visually if needed */}
                <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-primary transition disabled:opacity-50">
                  <i className="hgi hgi-stroke hgi-arrow-left-01 text-xl" />
                </button>
                <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-primary transition disabled:opacity-50">
                  <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Product Form */}
          <div className="xl:col-span-5 lg:col-span-6 mt-6 lg:mt-0">
            <div className="rounded-3xl border border-gray-300 p-6">
              <span className="product-discount-badge inline-block mb-6 uppercase relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-shape.png)] after:bg-contain after:bg-no-repeat">
                Sales
              </span>
              <p className="uppercase text-info text-xs leading-[18px] font-bold new-arrival-badge mb-6">
                New Arrival
              </p>

              <div className="product-title-section flex items-center justify-between mb-6">
                <h3 className="line-clamp-1">
                  VitaLife Omega-3 Softgels Heart Support Max Strength
                </h3>
                <Link
                  href="/wishlist-style-v1"
                  className="size-10 inline-flex flex-none items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300"
                >
                  <i className="hgi hgi-stroke hgi-favourite text-xl text-light-secondary-text" />
                </Link>
              </div>

              <div className="rating-section flex items-center mb-4">
                <StarRating ratingPercentage={"80%"} />
                <span className="font-normal inline-block ml-1">
                  (11.78k reviews)
                </span>
              </div>

              <div className="price-section flex items-center gap-x-3 mb-6">
                <span className="current-price text-2xl leading-9 font-bold text-light-primary-text relative after:absolute after:h-6 after:w-px after:bg-gray-300 after:right-0 after:top-1/2 after:-translate-y-1/2 pr-3 inline-block">
                  $62.97
                </span>
                <span className="old-price text-2xl leading-9 font-normal text-light-disabled-text line-through">
                  $39.99
                </span>
                <span className="product-discount-badge uppercase relative bg-warning text-black font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url(/images/discount-warning-shape.png)] after:bg-contain after:bg-no-repeat">
                  15% OFF
                </span>
              </div>

              <div className="product-add-to-cart-section py-6 border-y border-dashed border-gray-300">
                {/* Colors */}
                <div className="color-variation-section mb-6">
                  <div className="color-variation-section-title mb-4">
                    <p className="font-semibold flex items-center gap-x-2.5">
                      Color:
                      <span className="font-normal capitalize text-light-primary-text">
                        {selectedColorLabel}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {COLORS.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`relative flex items-center justify-center rounded-full size-10 border transition-transform hover:bg-[rgba(145,158,171,0.08)]
                          ${selectedColor === color.id ? "border-primary" : "border-gray-300"} 
                        `}
                      >
                        <Image
                          src={color.img}
                          alt={`color-${color.id}`}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="size-variation-section mb-6">
                  <div className="size-variation-section-title mb-4 flex items-center justify-between">
                    <p className="font-semibold flex items-center gap-x-2.5">
                      Size:
                      <span className="font-normal capitalize text-light-primary-text">
                        {selectedSize}
                      </span>
                    </p>
                    <Link
                      href="#"
                      className="text-sm hover:underline text-light-primary-text font-medium"
                    >
                      Size Guide
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap xl:flex-nowrap">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`text-sm font-semibold px-6 lg:px-4 xl:px-8 py-1.5 rounded-[100px] border transition-colors
                          ${selectedSize === size ? "border-primary bg-primary text-white" : "border-gray-300 text-light-primary-text hover:bg-[rgba(145,158,171,0.08)]"}
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="product-add-to-cart-btn-section">
                  <p className="font-semibold text-light-primary-text mb-4">
                    Quantity:
                  </p>
                  <div className="flex items-center justify-between gap-x-4 gap-y-4 flex-wrap md:flex-nowrap md:gap-y-0">
                    <div className="quantity-section flex-1 max-w-[185px] border border-gray-300 rounded-[80px] px-4 py-[11px] flex items-center justify-between">
                      <button
                        onClick={() => handleQuantityChange("dec")}
                        className="quantity-btn inline-flex items-center justify-center hover:text-primary"
                      >
                        <i className="hgi hgi-stroke hgi-minus-sign text-xl leading-5" />
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(
                            Math.max(1, parseInt(e.target.value) || 1),
                          )
                        }
                        className="quantity-input text-center w-full focus:outline-none font-semibold text-base leading-6 text-light-primary-text"
                      />
                      <button
                        onClick={() => handleQuantityChange("inc")}
                        className="quantity-btn inline-flex items-center justify-center hover:text-primary"
                      >
                        <i className="hgi hgi-stroke hgi-plus-sign text-xl leading-5" />
                      </button>
                    </div>

                    <button className="btn btn-warning btn-large rounded-[80px] flex-1">
                      Buy Now
                    </button>
                    <button className="btn btn-primary btn-large rounded-[80px] flex-1 flex items-center justify-center">
                      <i className="hgi hgi-stroke hgi-shopping-cart-add-02 leading-6 text-2xl text-white pr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-share-and-compare-section flex items-center gap-x-4 mt-6">
                <Link
                  href="#"
                  className="product-share-btn text-info inline-flex items-center gap-x-2.5 pr-4 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-px after:h-3 after:bg-gray-300"
                >
                  <i className="hgi hgi-stroke hgi-share-05 text-xl leading-5" />
                  <span>Share</span>
                </Link>
                <Link
                  href="/compare"
                  className="product-compare-btn text-info inline-flex items-center gap-x-2.5"
                >
                  <i className="hgi hgi-stroke hgi-git-compare text-xl leading-5" />
                  <span>Compare</span>
                </Link>
              </div>

              <div className="product-extra-info-section flex flex-col gap-y-4 mt-6">
                <div className="product-extra-info-item flex items-center gap-x-4 gap-y-4 flex-wrap md:flex-nowrap md:gap-y-0">
                  <p className="font-semibold text-light-primary-text">
                    Free Shipping:
                  </p>
                  <p>Estimated Delivery Time 5-7 Days</p>
                </div>
                <div className="product-extra-info-item flex items-center gap-x-4 gap-y-4 flex-wrap md:flex-nowrap md:gap-y-0">
                  <p className="font-semibold text-light-primary-text">SKU:</p>
                  <p>SKU-001</p>
                </div>
                <div className="product-extra-info-item flex items-center gap-x-4 gap-y-4 flex-wrap md:flex-nowrap md:gap-y-0">
                  <p className="font-semibold text-light-primary-text">
                    Categories:
                  </p>
                  <p>Electronics, Computers, Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
