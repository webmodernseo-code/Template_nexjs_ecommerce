"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Swiper as SwiperClass } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";
import { HorizontalProduct } from "@/lib/types";

const TOP_RATE_PRODUCTS = [
  {
    id: 1,
    image: "/images/home-2/product-image-3.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 2,
    image: "/images/home-2/product-image-2.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 3,
    image: "/images/home-2/product-image-22.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 4,
    image: "/images/home-2/product-image-15.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 5,
    image: "/images/home-2/product-image-4.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 6,
    image: "/images/home-2/product-image-12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
];

const TOP_ITEMS_PRODUCTS = [
  {
    id: 1,
    image: "/images/home-2/product-image-23.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 2,
    image: "/images/home-2/product-image-13.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 3,
    image: "/images/home-2/product-image-20.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 4,
    image: "/images/home-2/product-image-1.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 5,
    image: "/images/home-2/product-image-17.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
  {
    id: 6,
    image: "/images/home-2/product-image-16.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    rating: 189,
  },
];

export default function LimitedTimeDeals() {
  const [topRateSwiper, setTopRateSwiper] = useState<SwiperClass | null>(null);
  const [topItemsSwiper, setTopItemsSwiper] = useState<SwiperClass | null>(null);

  const renderProductItem = (product: HorizontalProduct) => (
    <div className="p-4 bg-white rounded-2xl flex items-center flex-col md:flex-row gap-4 h-full">
      <Link
        href="/product-details"
        className="md:size-32 w-full flex-none rounded-2xl bg-[#FFEFF6]"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-2xl"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-y-[15px]">
        <p className="font-semibold text-light-primary-text hover:text-primary transition-colors duration-300">
          <Link href="/product-details">{product.title}</Link>
        </p>
        <div className="flex justify-between mt-auto">
          <div className="flex flex-col gap-y-[15px]">
            <div className="rating-section flex items-center">
              <StarRating ratingPercentage={"80%"} />
              <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                ({product.rating})
              </span>
            </div>
            <div className="price-section flex items-center gap-x-3">
              <span className="current-price font-semibold text-light-primary-text">
                {product.currentPrice}
              </span>
              <span className="old-price text-sm leading-[22px] font-normal text-light-disabled-text line-through">
                {product.oldPrice}
              </span>
            </div>
          </div>
          <div className="flex items-end">
            <Link
              href="/cart-single-vendor"
              className="btn btn-primary btn-large rounded-[100px] group py-2.5 px-[22px]"
            >
              <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
              Add
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mb-[70px]">
      <div className="bg-[#92BDF5] xl:max-w-[1728px] w-full mx-auto xl:rounded-tr-5xl relative flex flex-col gap-y-4 md:gap-y-0 md:flex-row items-center justify-between pt-12 lg:pt-0">
        <div className="lg:bg-white bg-[#92BDF5] pb-0 lg:pt-0 flex-none lg:w-full lg:pb-[23px] lg:pl-12 pl-4 md:text-left text-center max-w-xl lg:rounded-tr-[164px] relative z-5 lg:after:bg-[#92BDF5] lg:before:absolute lg:before:top-full lg:before:left-0 lg:before:h-12 lg:before:w-12 lg:before:bg-[url(/images/home-2/slider-left-shape-2.png)] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url(/images/slider-right-shape.png)] lg:after:bg-no-repeat lg:after:z-11">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            Limited Time Deals
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Up to 69% discount for limited time 🔥
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex z-5 items-center gap-x-5 lg:pr-12 pr-4"
        >
          <Link
            href="/shop-left-sidebar-3col"
            className="btn btn-primary bg-white text-primary-darker font-semibold btn-large rounded-[60px] text-sm leading-6 group py-1.5 pl-3 pr-2 mt-12"
          >
            View All Products
            <span className="size-8 bg-primary inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
              <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-lighter" />
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#92BDF5] xl:rounded-bl-5xl xl:rounded-br-5xl py-12">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[32px] pt-8 pb-12 xl:col-span-4 col-span-12"
            >
              <div className="mb-3">
                <Image
                  alt="product-1"
                  className="max-w-[512px] w-full xl:max-h-[361px] h-full object-cover mx-auto"
                  src="/images/home-2/product-image-21.png"
                  width={512}
                  height={361}
                />
              </div>
              <div className="text-center px-15">
                <h3 className="mb-4">Stay Fit. Stay Healthy.</h3>
                <p className="text-light-primary-text mb-4">
                  Discover Vitamins, Supplements, Skincare &amp; Immunity
                  Boosters — All in One Place.
                </p>
                <Link
                  href="#"
                  className="btn btn-primary btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Explore Wellness
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="xl:col-span-4 col-span-12 lg:col-span-6 flex flex-col"
            >
              <div className="flex items-center justify-between pb-6 mb-7 border-b border-[rgba(145,158,171,0.24)]">
                <h4>Top Rate</h4>
                <div className="home-one-top-rate-slider-nav md:flex items-center justify-between gap-x-6 hidden">
                  <button
                    onClick={() => topRateSwiper?.slidePrev()}
                    className="bg-white/48  text-black rounded-full size-9 hover:bg-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Previous"
                  >
                    <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
                  </button>
                  <button
                    onClick={() => topRateSwiper?.slideNext()}
                    className="bg-white/48  text-black rounded-full size-9 hover:bg-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Next"
                  >
                    <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
                  </button>
                </div>
              </div>
              <div className="home-one-top-rate-slider -mx-3 sellzy-slider flex-1">
                <Swiper
                  modules={[Navigation, Autoplay, Grid]}
                  spaceBetween={0}
                  slidesPerView={1}
                  grid={{
                    rows: 3,
                    fill: "row",
                  }}
                  loop={false}
                  autoplay={{ delay: 7000 }}
                  onSwiper={setTopRateSwiper}
                  className="h-full"
                >
                  {TOP_RATE_PRODUCTS.map((product) => (
                    <SwiperSlide key={product.id} className="p-3 h-auto!">
                      {renderProductItem(product)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="xl:col-span-4 col-span-12 lg:col-span-6 flex flex-col"
            >
              <div className="flex items-center justify-between pb-6 mb-7 border-b border-[rgba(145,158,171,0.24)]">
                <h4>Top Items</h4>
                <div className="home-one-top-items-slider-nav md:flex items-center justify-between gap-x-6 hidden">
                  <button
                    onClick={() => topItemsSwiper?.slidePrev()}
                    className="bg-white/48  text-black rounded-full size-9 hover:bg-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Previous"
                  >
                    <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
                  </button>
                  <button
                    onClick={() => topItemsSwiper?.slideNext()}
                    className="bg-white/48  text-black rounded-full size-9 hover:bg-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Next"
                  >
                    <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
                  </button>
                </div>
              </div>
              <div className="home-one-top-items-slider -mx-3 sellzy-slider flex-1">
                <Swiper
                  modules={[Navigation, Autoplay, Grid]}
                  spaceBetween={0}
                  slidesPerView={1}
                  grid={{
                    rows: 3,
                    fill: "row",
                  }}
                  loop={false}
                  autoplay={{ delay: 7000 }}
                  onSwiper={setTopItemsSwiper}
                  className="h-full"
                >
                  {TOP_ITEMS_PRODUCTS.map((product) => (
                    <SwiperSlide key={product.id} className="p-3 h-auto!">
                      {renderProductItem(product)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
