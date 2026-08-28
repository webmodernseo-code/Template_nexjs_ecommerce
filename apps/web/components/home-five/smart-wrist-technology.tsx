"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";

export default function SmartWristTechnology() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pb-12"
        >
          Smart technology on your wrist.
        </motion.h3>
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:col-span-4 md:col-span-6 col-span-12 md:row-start-1 row-start-auto"
          >
            <div className="flex flex-col gap-y-6">
              <Link
                className="flex flex-col lg:flex-row border-gray-300 border rounded-2xl group hover:border-primary transition-all duration-300"
                href="/product-details"
              >
                <motion.div className="p-4 lg:border-r border-b lg:border-b-0 border-gray-300 lg:max-w-[190px] flex items-center justify-center w-full shrink-0">
                  <Image
                    src="/images/home-5/macbook.png"
                    alt="MacBook"
                    width={150}
                    height={150}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <div className="py-[29px] px-6 flex-1">
                  <span className="product-discount-badge relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full uppercase after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat">
                    15% OFF
                  </span>
                  <h6 className="py-3 group-hover:text-primary transition-all duration-300">
                    MacBook Pro
                  </h6>
                  <div className="rating-section flex items-center mb-3">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      (189)
                    </span>
                  </div>
                  <div className="price-section flex items-center gap-x-3 mb-2">
                    <span className="current-price text-base font-semibold text-primary">
                      $27.49
                    </span>
                    <span className="old-price text-base leading-[22px] font-normal text-light-disabled-text line-through">
                      $29.99
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                className="flex flex-col lg:flex-row border-gray-300 border rounded-2xl group hover:border-primary transition-all duration-300"
                href="/product-details"
              >
                <motion.div className="p-4 lg:border-r border-b lg:border-b-0 border-gray-300 lg:max-w-[190px] flex items-center justify-center w-full shrink-0">
                  <Image
                    src="/images/home-5/redphone.png"
                    alt="Red Phone"
                    width={150}
                    height={150}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <div className="py-[29px] pl-6 flex-1">
                  <span className="product-discount-badge relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full uppercase after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat">
                    15% OFF
                  </span>
                  <h6 className="py-3 group-hover:text-primary transition-all duration-300">
                    iPhone 15 Pro Max
                  </h6>
                  <div className="rating-section flex items-center mb-3">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      (189)
                    </span>
                  </div>
                  <div className="price-section flex items-center gap-x-3 mb-2">
                    <span className="current-price text-base font-semibold text-primary">
                      $27.49
                    </span>
                    <span className="old-price text-base leading-[22px] font-normal text-light-disabled-text line-through">
                      $29.99
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="xl:col-span-4 col-span-12 xl:row-start-1"
          >
            <Link
              className="border border-gray-300 rounded-2xl group hover:border-primary transition-all duration-300 flex flex-col"
              href="/product-details"
            >
              <motion.div className="max-w-[528px] flex items-center justify-center w-full mx-auto p-6">
                <Image
                  src="/images/home-5/smart-watch-1.png"
                  alt="Smart Watch"
                  width={500}
                  height={500}
                  className="max-w-full object-contain"
                />
              </motion.div>
              <div className="p-6">
                <h4 className="pb-3 group-hover:text-primary transition-all duration-300">
                  Samsung Galaxy Watch 6
                </h4>
                <div className="price-section flex items-center gap-x-3">
                  <span className="current-price text-xl leading-[30px] font-bold text-primary">
                    $28.56
                  </span>
                  <span className="old-price text-[18px] leading-7 font-normal text-light-disabled-text line-through">
                    $29.56
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="xl:col-span-4 md:col-span-6 col-span-12 md:row-start-1 row-start-auto"
          >
            <div className="flex flex-col gap-y-6">
              <Link
                href="/product-details"
                className="flex flex-col lg:flex-row border-gray-300 border rounded-2xl group hover:border-primary transition-all duration-300"
              >
                <motion.div className="p-4 lg:border-r border-b lg:border-b-0 border-gray-300 lg:max-w-[190px] flex items-center justify-center w-full shrink-0">
                  <Image
                    src="/images/home-5/ipad-1.png"
                    alt="iPad"
                    width={150}
                    height={150}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <div className="py-[29px] px-6 flex-1">
                  <span className="product-discount-badge relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full uppercase after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat">
                    15% OFF
                  </span>
                  <h6 className="py-3 group-hover:text-primary transition-all duration-300">
                    iPad Pro
                  </h6>
                  <div className="rating-section flex items-center mb-3">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      (189)
                    </span>
                  </div>
                  <div className="price-section flex items-center gap-x-3 mb-2">
                    <span className="current-price text-base font-semibold text-primary">
                      $27.49
                    </span>
                    <span className="old-price text-base leading-[22px] font-normal text-light-disabled-text line-through">
                      $39.99
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/product-details"
                className="flex flex-col lg:flex-row border-gray-300 border rounded-2xl group hover:border-primary transition-all duration-300"
              >
                <motion.div className="p-4 lg:border-r border-b lg:border-b-0 border-gray-300 lg:max-w-[190px] flex items-center justify-center w-full shrink-0">
                  <Image
                    src="/images/home-5/samsung-phone-2.png"
                    alt="Samsung Phone"
                    width={150}
                    height={150}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <div className="py-[29px] pl-6 flex-1">
                  <span className="product-discount-badge relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full uppercase after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat">
                    15% OFF
                  </span>
                  <h6 className="py-3 group-hover:text-primary transition-all duration-300">
                    Samsung Galaxy S24 Ultra
                  </h6>
                  <div className="rating-section flex items-center mb-3">
                    <StarRating ratingPercentage={"80%"} />
                    <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                      (189)
                    </span>
                  </div>
                  <div className="price-section flex items-center gap-x-3 mb-2">
                    <span className="current-price text-base font-semibold text-primary">
                      $27.49
                    </span>
                    <span className="old-price text-base leading-[22px] font-normal text-light-disabled-text line-through">
                      $39.99
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
