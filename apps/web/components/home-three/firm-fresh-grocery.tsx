"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CustomFloatingSelect from "@/components/common/custom-floating-select";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuickView } from "@/context/quick-view-context";
import StarRating from "@/components/common/star-rating";

interface SliderProduct {
  id: number;
  image: string;
  alt: string;
  title: string;
  currentPrice: string;
  oldPrice: string;
  ratingCount: string;
  ratingPercentage: number;
  packId: string;
  delay: string;
}

const PACK_OPTIONS = [
  { value: "", label: "500g pack" },
  { value: "1", label: "400g pack" },
  { value: "2", label: "300g pack" },
  { value: "3", label: "200g pack" },
  { value: "4", label: "100g pack" },
];

const SLIDER_PRODUCTS: SliderProduct[] = [
  {
    id: 1,
    image: "/images/home-3/apple-juice.png",
    alt: "product-1",
    title: "Creamy Milk Bites",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-74",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/home-3/greek-yogurt.png",
    alt: "product-2",
    title: "Silky Smooth Bar",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-75",
    delay: "0.2s",
  },
  {
    id: 3,
    image: "/images/home-3/lime-chips.png",
    alt: "product-3",
    title: "Rich Milk Fudge",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-76",
    delay: "0.3s",
  },
  {
    id: 4,
    image: "/images/home-3/watermelon.png",
    alt: "product-4",
    title: "Sweet Milk Delights",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-77",
    delay: "0.3s",
  },
  {
    id: 5,
    image: "/images/home-3/veggie-pops.png",
    alt: "product-5",
    title: "Creamy Milk Bites",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-78",
    delay: "0.4s",
  },
  {
    id: 6,
    image: "/images/home-3/chicken-meat.png",
    alt: "product-6",
    title: "Silky Smooth Bar",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-79",
    delay: "0.4s",
  },
  {
    id: 7,
    image: "/images/home-3/halo-top.png",
    alt: "product-7",
    title: "Rich Milk Fudge",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-80",
    delay: "0.5s",
  },
  {
    id: 8,
    image: "/images/home-3/whole-chicken.png",
    alt: "product-8",
    title: "Sweet Milk Delights",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-81",
    delay: "0.5s",
  },
  {
    id: 9,
    image: "/images/home-3/loose-eggs.png",
    alt: "product-9",
    title: "Rich Milk Fudge",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-82",
    delay: "0.6s",
  },
  {
    id: 10,
    image: "/images/home-3/apple-juice-small.png",
    alt: "product-10",
    title: "Sweet Milk Delights",
    currentPrice: "$27.46",
    oldPrice: "$29.99",
    ratingCount: "189",
    ratingPercentage: 80,
    packId: "sorting-pack-83",
    delay: "0.6s",
  },
];

// Pair products into groups of 2 (top row + bottom row per column)
const PAIRED_PRODUCTS = Array.from(
  { length: Math.ceil(SLIDER_PRODUCTS.length / 2) },
  (_, i) => SLIDER_PRODUCTS.slice(i * 2, i * 2 + 2),
);

function ProductCard({ product }: { product: SliderProduct }) {
  const { openQuickView } = useQuickView();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: parseFloat(product.delay) }}
      className="p-3"
    >
      <div className="border border-gray-300 rounded-2xl product-card-1 p-4 group">
        <div className="product-image-container relative">
          <div className="product-image rounded-xl mb-4 overflow-hidden h-[220px]">
            <Link href="/product-details">
              <Image
                src={product.image}
                alt={product.alt}
                width={300}
                height={220}
                className="w-full h-auto group-hover:scale-110 transition-all transform group-hover:-rotate-3 ease-in-out duration-300 bg-gray-200 h-full w-full object-cover"
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
        <div className="flex flex-col flex-wrap gap-y-3 product-content">
          <div className="rating-section flex items-center">
            <StarRating ratingPercentage={`${product.ratingPercentage}%`} />
            <span className="text-sm leading-[22px] font-normal inline-block ml-1">
              ({product.ratingCount})
            </span>
          </div>
          <Link
            href="/product-details"
            className="font-semibold text-light-primary-text group-hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
          >
            {product.title}
          </Link>
          <div className="price-section flex items-center gap-x-3">
            <span className="current-price font-semibold text-light-primary-text">
              {product.currentPrice}
            </span>
            <span className="old-price font-normal text-light-disabled-text line-through">
              {product.oldPrice}
            </span>
          </div>
          <p className="text-primary text-xs leading-[18px]">In stock</p>
          <div className="relative flex mb-1">
            <CustomFloatingSelect
              options={PACK_OPTIONS}
              label="Select Pack"
              className="flex-1"
            />
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
}

export default function FirmFreshGrocery() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-center mb-10 pb-4 border-b border-b-gray-300">
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-light-primary-text"
            >
              Farm Fresh Grocery
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="farm-fresh-grocery-nav md:flex items-center justify-between gap-x-6 hidden"
          >
            <button
              ref={prevRef}
              aria-label="Previous"
              className="swiper-btn-prev bg-[rgba(145,158,171,0.08)] todays-top-deal-next size-12 rounded-full flex items-center justify-center text-light-primary-text hover:bg-primary hover:text-white transition-all"
            >
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-[22px]" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="swiper-btn-next bg-[rgba(145,158,171,0.08)] todays-top-deal-next size-12 rounded-full flex items-center justify-center text-light-primary-text hover:bg-primary hover:text-white transition-all"
            >
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-[22px]" />
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Featured Product - Left Column */}
          <div className="xl:col-span-4 col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:p-6 p-4 border-2 border-gray-300 rounded-2xl hover:border-warning transition-all duration-300 ease-in-out cursor-pointer group"
            >
              <div className="w-full md:h-[702px] h-[400px] mb-4">
                <Image
                  src="/images/home-3/nuts.png"
                  alt="nuts image"
                  width={600}
                  height={702}
                  className="w-full h-full object-cover xl:object-top-left rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-y-4 overflow-hidden product-content">
                <div className="flex flex-col gap-y-4">
                  <div className="rating-section flex items-center">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      (189)
                    </span>
                  </div>
                  <h5 className="text-light-primary-text group-hover:text-primary transition-all duration-300 ease-in-out">
                    <Link href="/product-details">
                      Cadbury Dairy Milk Dream White Chocolate
                    </Link>
                  </h5>
                  <div className="flex items-center gap-x-3">
                    <h5 className="font-bold text-light-primary-text">
                      $28.56
                    </h5>
                    <h5 className="font-bold line-through text-light-disabled-text">
                      $29.56
                    </h5>
                  </div>
                  <p className="text-primary font-semibold">In stock</p>
                </div>
                <div className="deal-progress flex flex-col gap-y-2 mb-4">
                  <div className="progress w-full h-2 bg-warning-lighter rounded-[50px] overflow-hidden">
                    <div
                      style={{ width: "60%" }}
                      className="progress-bar h-full bg-warning rounded-[50px]"
                    />
                  </div>
                  <div className="deal-stock flex items-center justify-between">
                    <div className="stock-sold flex items-center gap-x-2.5">
                      <p>Sold:</p>
                      <p className="text-light-primary-text">4</p>
                    </div>
                    <div className="stock-remaining flex items-center gap-x-2.5">
                      <p>Available:</p>
                      <p className="text-light-primary-text">200</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div className="relative flex-1!">
                    <CustomFloatingSelect
                      options={PACK_OPTIONS}
                      label="Select Pack"
                      className="w-full! flex-1"
                    />
                  </div>
                  <Link
                    href="/cart-single-vendor"
                    className="btn btn-primary px-3 py-2 rounded-[80px] text-base product-add-to-cart flex-1"
                  >
                    <span className="inline-flex items-center justify-center">
                      <i className="hgi hgi-stroke hgi-shopping-cart-02 text-[20px] leading-5" />
                    </span>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Swiper Slider - Right Column (2 cards per slide, stacked) */}
          <div className="xl:col-span-8 col-span-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: SwiperType) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              breakpoints={{
                480: { slidesPerView: 2 },
                1441: { slidesPerView: 4 },
              }}
              className="-m-3"
            >
              {PAIRED_PRODUCTS.map((pair, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col">
                    {pair.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
