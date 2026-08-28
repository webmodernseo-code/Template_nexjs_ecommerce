"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CosmeticsBrand from "./cosmetics-brand";

export default function DiscountBanner() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <CosmeticsBrand />
        <div className="grid pt-[70px]">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-6 col-span-12 xl:col-span-4"
            >
              <div className="flex flex-col justify-end p-4 lg:p-8 h-[600px] rounded-2xl bg-[url(/images/home-2/female.jpg)] bg-cover lg:bg-center bg-no-repeat">
                <div className="p-4 bg-[#FFC091] rounded-2xl">
                  <div>
                    <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                      Enjoy 20% savings
                    </span>
                  </div>
                  <h3 className="py-1.5">Unveil Your Natural Glow</h3>
                  <p className="pb-4 text-light-primary-text">
                    Transform your skincare ritual with our exclusive collection
                    for radiant results.
                  </p>
                  <Link
                    href="/shop-left-sidebar-3col"
                    className="btn btn-primary text-white font-semibold btn-large rounded-[60px] text-sm leading-6 group py-1.5 pl-3 pr-2"
                  >
                    View All Products
                    <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                      <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-6 xl:col-span-8 col-span-12"
            >
              <div className="flex flex-col justify-end p-4 lg:p-8 h-[600px] rounded-2xl bg-[url(/images/home-2/cosmetic-bg.jpg)] bg-cover bg-no-repeat">
                <div className="p-4 bg-[#A4F7CC] rounded-2xl">
                  <div>
                    <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                      Enjoy 20% savings
                    </span>
                  </div>
                  <h3 className="py-1.5">Premium Luxury Glow</h3>
                  <p className="pb-4 text-light-primary-text">
                    Upgrade your routine with our premium skincare and beauty
                    essentials.
                  </p>
                  <Link
                    href="/shop-left-sidebar-3col"
                    className="btn btn-primary text-white font-semibold btn-large rounded-[60px] text-sm leading-6 group py-1.5 pl-4 pr-2"
                  >
                    Shop Now
                    <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                      <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
