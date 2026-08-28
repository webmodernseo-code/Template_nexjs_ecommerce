"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const CATEGORIES = [
  { id: 1, name: "Personal Care", image: "/images/lshop.png", link: "#" },
  {
    id: 2,
    name: "Diet & Nutrition",
    image: "/images/vitamin-c-2.png",
    link: "#",
  },
  { id: 3, name: "Diabetes Care", image: "/images/matcha.png", link: "#" },
  { id: 4, name: "Wellness", image: "/images/power-c.png", link: "#" },
  { id: 5, name: "Skincare", image: "/images/lotion-1.png", link: "#" },
  { id: 6, name: "Suppliments", image: "/images/vitamin-c.png", link: "#" },
  { id: 7, name: "Natural Care", image: "/images/cream-1.png", link: "#" },
  { id: 8, name: "Breakfast", image: "/images/orange.png", link: "#" },
  {
    id: 9,
    name: "Personal Lubricants",
    image: "/images/cream-2.png",
    link: "#",
  },
  {
    id: 10,
    name: "Dairy & Desserts",
    image: "/images/cookies-1.png",
    link: "#",
  },
  {
    id: 11,
    name: "Digestive & Vitality",
    image: "/images/temperature-gun-3.png",
    link: "#",
  },
  { id: 12, name: "Dog Foods", image: "/images/tonik.png", link: "#" },
  { id: 13, name: "Elderly Care", image: "/images/flowerbomb.png", link: "#" },
  {
    id: 14,
    name: "Gym Supplements",
    image: "/images/green-beas.png",
    link: "#",
  },
  {
    id: 15,
    name: "Health & Immunity Boosters",
    image: "/images/orange-2.png",
    link: "#",
  },
  { id: 16, name: "Haircare", image: "/images/night-serum.png", link: "#" },
  {
    id: 17,
    name: "Personal Lubricants",
    image: "/images/cream-2.png",
    link: "#",
  },
  {
    id: 18,
    name: "Dairy & Desserts",
    image: "/images/cookies-1.png",
    link: "#",
  },
  {
    id: 19,
    name: "Digestive & Vitality",
    image: "/images/temperature-gun-3.png",
    link: "#",
  },
  { id: 20, name: "Dog Foods", image: "/images/tonik.png", link: "#" },
  { id: 21, name: "Elderly Care", image: "/images/flowerbomb.png", link: "#" },
  {
    id: 22,
    name: "Gym Supplements",
    image: "/images/green-beas.png",
    link: "#",
  },
  {
    id: 23,
    name: "Health & Immunity Boosters",
    image: "/images/orange-2.png",
    link: "#",
  },
  { id: 24, name: "Haircare", image: "/images/night-serum.png", link: "#" },
  { id: 25, name: "Personal Care", image: "/images/lshop.png", link: "#" },
  {
    id: 26,
    name: "Diet & Nutrition",
    image: "/images/vitamin-c-2.png",
    link: "#",
  },
  { id: 27, name: "Diabetes Care", image: "/images/matcha.png", link: "#" },
  { id: 28, name: "Wellness", image: "/images/power-c.png", link: "#" },
  { id: 29, name: "Skincare", image: "/images/lotion-1.png", link: "#" },
  { id: 30, name: "Suppliments", image: "/images/vitamin-c.png", link: "#" },
  { id: 31, name: "Natural Care", image: "/images/cream-1.png", link: "#" },
  { id: 32, name: "Breakfast", image: "/images/orange.png", link: "#" },
];

export default function ShopByCategory() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:flex md:justify-between md:items-center mb-10"
        >
          <div className="text-center md:text-left">
            <h3 className="mb-3">Shop by Category</h3>
            <p>Up to 69% discount for limited time 🔥</p>
          </div>
          <div className="home-one-category-slider-nav md:flex items-center justify-center gap-x-6 hidden">
            <button className="category-prev size-12 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.08)] hover:bg-primary text-light-primary-text hover:text-white transition-all">
              <i className="hgi hgi-stroke hgi-arrow-left-01 text-2xl" />
            </button>
            <button className="category-next size-12 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.08)] hover:bg-primary text-light-primary-text hover:text-white transition-all">
              <i className="hgi hgi-stroke hgi-arrow-right-01 text-2xl" />
            </button>
          </div>
        </motion.div>

        <div className="category-slider-wrapper">
          <Swiper
            modules={[Navigation, Grid]}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={false} // Grid loop is tricky in Swiper
            autoplay={{ delay: 7000 }}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
            breakpoints={{
              480: { slidesPerView: 2, grid: { rows: 2 } },
              769: { slidesPerView: 4, grid: { rows: 2 } },
              1025: { slidesPerView: 4, grid: { rows: 2 } },
              1441: { slidesPerView: 8, grid: { rows: 2 } },
            }}
            className="rounded-2xl"
          >
            {CATEGORIES.map((category) => (
              <SwiperSlide key={category.id} className="pb-6">
                <div className="category-item-card">
                  <div className="border border-gray-300 rounded-2xl mb-6 overflow-hidden transition-all duration-300">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover transform transition-transform"
                    />
                  </div>
                  <p className="font-semibold text-light-primary-text text-center truncate hover:text-primary transition-colors duration-300">
                    <Link href={category.link}>{category.name}</Link>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
