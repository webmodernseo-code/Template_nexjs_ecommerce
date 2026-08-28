"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCardOne from "@/components/card/product-card-one";
import { motion } from "framer-motion";

const RELATED_PRODUCTS = [
  {
    id: 1,
    img: "/images/vitamin-c.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.1,
  },
  {
    id: 2,
    img: "/images/vitamin-c-2.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.2,
  },
  {
    id: 3,
    img: "/images/bp-machine-2.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.3,
  },
  {
    id: 4,
    img: "/images/temperature-gun-1.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.4,
  },
  {
    id: 5,
    img: "/images/bp-machine.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.5,
  },
  {
    id: 6,
    img: "/images/nutrageinz.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.6,
  },
  {
    id: 7,
    img: "/images/temperature-gun-1.png",
    name: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    rating: 80,
    ratingCount: 189,
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    discount: "10% OFF",
    delay: 0.7,
  },
];

export default function RelatedProductsOne() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Related Products
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="related-products-slider-nav flex items-center gap-x-6"
          >
            <button
              ref={prevRef}
              className="slider-btn bg-[rgba(145,158,171,0.08)] slider-prev size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 hover:text-white hover:bg-primary group/slider-btn cursor-pointer"
            >
              <i className="hgi hgi-stroke text-[22px] hgi-arrow-left-01" />
            </button>
            <button
              ref={nextRef}
              className="slider-btn hover:bg-primary hover:text-white bg-[rgba(145,158,171,0.08)] slider-next size-12 rounded-full inline-flex items-center justify-center transition-colors duration-300 group/slider-btn cursor-pointer "
            >
              <i className="hgi hgi-stroke text-[22px] hgi-arrow-right-01" />
            </button>
          </motion.div>
        </div>

        <div className="related-products-slider -mx-3">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={6}
            loop={true}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              769: { slidesPerView: 3 },
              1025: { slidesPerView: 4 },
              1441: { slidesPerView: 6 },
            }}
          >
            {RELATED_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCardOne
                  image={product.img}
                  title={product.name}
                  ratingPercentage={product.rating}
                  ratingCount={product.ratingCount}
                  currentPrice={product.currentPrice}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  variant="gray"
                  badgeVariant="default"
                  delay={product.delay}
                  className="related-product-item bg-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
