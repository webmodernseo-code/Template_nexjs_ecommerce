"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const DISCOUNTS = [
  {
    id: 1,
    colSpan: "xl:col-span-6",
    delay: 0.2,
    bgStyles:
      "bg-[url(/images/home-4/2-women-red-dress.png)] bg-[#D5FFFC] bg-no-repeat bg-center bg-position[0px_0px]",
    containerPadding: "p-4 lg:p-8",
    cardBgInfo: "p-6 bg-[#9EE872]",
    badgeClass: "bg-warning-light",
    badgeText: "Enjoy 50% savings",
    isMainTitle: true,
    titleText: "Style That Speaks You",
    description: "Discover the latest trends and elevate your wardrobe today.",
  },
  {
    id: 2,
    colSpan: "xl:col-span-3",
    delay: 0.3,
    bgStyles:
      "bg-[url(/images/home-4/pink-dress-girl.png)] bg-[#FFF0F9] bg-center bg-size-[180%] bg-no-repeat",
    containerPadding: "p-4 lg:pb-8 lg:px-6",
    cardBgInfo: "py-4 bg-[#FFD6EF]",
    badgeClass: "bg-warning-light",
    badgeText: "Enjoy 25% savings",
    isMainTitle: false,
    titleText: "Fresh Looks, Every Season",
    description: "Shop curated collections for every occasion and mood.",
  },
  {
    id: 3,
    colSpan: "xl:col-span-3",
    delay: 0.4,
    bgStyles:
      "bg-[url(/images/home-4/yellow-dress-girl.png)] bg-[#FFF8CC] bg-center bg-size-[150%] bg-no-repeat",
    containerPadding: "p-4 lg:pb-8 lg:px-6",
    cardBgInfo: "py-4 bg-[#FFEB69]",
    badgeClass: "bg-success-light",
    badgeText: "Enjoy 30% savings",
    isMainTitle: false,
    titleText: "Fresh Looks, Every Season",
    description: "Shop curated collections for every occasion and mood.",
  },
];

export default function DiscountGridFour() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {DISCOUNTS.map((discount) => (
            <motion.div
              key={discount.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: discount.delay }}
              className={`md:col-span-6 col-span-12 ${discount.colSpan}`}
            >
              <div
                className={`flex flex-col justify-end text-center min-h-[532px] rounded-2xl ${discount.containerPadding} ${discount.bgStyles}`}
              >
                <div className={`${discount.cardBgInfo} rounded-2xl`}>
                  <div>
                    <span
                      className={`text-light-primary-text ${discount.badgeClass} px-3 py-1 rounded-full text-base font-semibold`}
                    >
                      {discount.badgeText}
                    </span>
                  </div>
                  {discount.isMainTitle ? (
                    <h3 className="py-3">{discount.titleText}</h3>
                  ) : (
                    <h4 className="py-1.5">{discount.titleText}</h4>
                  )}
                  <p className="pb-4 text-light-primary-text">
                    {discount.description}
                  </p>
                  <Link
                    href="/shop-left-sidebar-3col"
                    className="btn btn-primary text-white font-semibold btn-large rounded-[60px] text-sm leading-6 group py-1.5 pl-4 pr-2"
                  >
                    Shop Now
                    <span className="size-8 ml-0.5 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                      <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
