"use client";

import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";

type TopProduct = {
  image: string;
  title: string;
  currentPrice: string;
  oldPrice: string;
  ratingPercentage: number;
  ratingCount: number;
};

const TOP_RATE_PRODUCTS: TopProduct[] = [
  {
    image: "/images/hand-sanitizer-2.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/mask.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/antibiotic.jpg",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/sphygmomanometer.jpg",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/vitamin-b12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/bp-machine.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
];

const TOP_ITEMS_PRODUCTS: TopProduct[] = [
  {
    image: "/images/sphygmomanometer.jpg",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/vitamin-b12.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/bp-machine.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/hand-sanitizer-2.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/mask.png",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
  {
    image: "/images/antibiotic.jpg",
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    ratingPercentage: 80,
    ratingCount: 189,
  },
];

function ProductRow({ product }: { product: TopProduct }) {
  return (
    <div className="p-3">
      <div className="p-4 bg-white rounded-2xl flex items-center flex-col md:flex-row gap-4">
        <Link
          href="/product-details"
          className="md:size-32 size-full flex-none rounded-2xl bg-gray-300"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </Link>
        <div className="flex-1 flex flex-col gap-y-[15px]">
          <p className="font-semibold text-light-primary-text hover:text-primary transition-colors duration-300">
            <Link href="/product-details">{product.title}</Link>
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-[15px]">
              <div className="rating-section flex items-center">
                <StarRating ratingPercentage={`${product.ratingPercentage}%`} />
                <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                  ({product.ratingCount})
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
    </div>
  );
}

function TopSlider({
  title,
  navClassName,
  products,
}: {
  title: string;
  navClassName: string;
  products: TopProduct[];
}) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="xl:col-span-4 col-span-12 lg:col-span-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-between pb-6 mb-7 border-b border-[rgba(145,158,171,0.24)]"
      >
        <h4>{title}</h4>
        <div
          className={`${navClassName} md:flex items-center justify-between gap-x-6 hidden`}
        >
          <button
            ref={prevRef}
            className="slider-btn size-9 rounded-full flex items-center justify-center pointer-events-auto transition-all"
            aria-label="Previous"
          >
            <i className="hgi hgi-stroke hgi-arrow-left-01 text-xl" />
          </button>
          <button
            ref={nextRef}
            className="slider-btn size-9 rounded-full flex items-center justify-center pointer-events-auto transition-all"
            aria-label="Next"
          >
            <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl" />
          </button>
        </div>
      </motion.div>
      <div className="-mx-3 sellzy-slider">
        <Swiper
          modules={[Navigation, Autoplay, Grid]}
          slidesPerView={1}
          spaceBetween={0}
          grid={{
            rows: 3,
            fill: "row",
          }}
          loop={false}
          autoplay={{ delay: 7000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductRow product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function TopSellingProducts() {
  return (
    <section className="mb-[70px]">
      <div className="lg:bg-white bg-[#FFEB69] py-12 lg:pt-0 lg:pb-[23px] text-center lg:max-w-[704px] mx-auto lg:rounded-[164px] lg:-mb-[103px] relative z-10 lg:before:bg-[#FFEB69] lg:after:bg-[#FFEB69] lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:h-full lg:before:w-[145px] lg:before:bg-[url('/images/slider-left-shape.png')] lg:before:bg-no-repeat lg:before:z-11 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-full lg:after:w-[145px] lg:after:bg-[url('/images/slider-right-shape.png')] lg:after:bg-no-repeat lg:after:z-11">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2"
        >
          Top Selling Products
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Up to 69% discount for limited time 🔥
        </motion.p>
      </div>
      <div className="xl:max-w-[1728px] w-full mx-auto relative bg-[#FFEB69] xl:rounded-5xl pb-12 lg:pt-[172px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-4xl pt-8 pb-12 px-15 xl:col-span-4 col-span-12"
            >
              <div className="mb-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative max-w-lg w-full xl:max-h-[361px] h-full mx-auto overflow-hidden rounded-2xl"
                >
                  <Image
                    alt="product-1"
                    width={512}
                    height={361}
                    className="w-full h-full object-contain mx-auto"
                    src="/images/vitamin-c.png"
                  />
                </motion.div>
              </div>
              <div className="text-center">
                <h3 className="mb-4">Stay Fit. Stay Healthy.</h3>
                <p className="text-light-primary-text mb-4">
                  Discover Vitamins, Supplements, Skincare &amp; Immunity
                  Boosters — All in One Place.
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn btn-primary btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Explore Wellness
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </motion.div>
            <TopSlider
              title="Top Rate"
              navClassName="home-one-top-rate-slider-nav"
              products={TOP_RATE_PRODUCTS}
            />
            <TopSlider
              title="Top Items"
              navClassName="home-one-top-items-slider-nav"
              products={TOP_ITEMS_PRODUCTS}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
