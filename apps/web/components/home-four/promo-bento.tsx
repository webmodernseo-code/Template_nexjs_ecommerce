"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoBento() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 col-span-12 xl:col-span-6"
          >
            <div className="flex flex-col justify-end text-center min-h-[844px] rounded-2xl bg-[url(/images/home-4/man-woman.png)] bg-[#FFF5FB] bg-top bg-cover bg-no-repeat">
              <div className="py-12 bg-[#FFD6EF] rounded-b-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">From Runway to Your Closet</h3>
                <p className="pb-4 text-light-primary-text">
                  Explore top picks and must-have fashion essentials today.
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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col text-center rounded-2xl bg-[#FFF9D3] bg-bottom bg-no-repeat">
              <div className="py-[33px] lg:px-[66px] px-11 bg-[#FFEB69] rounded-t-2xl">
                <div>
                  <span className="text-light-primary-text bg-[#FFD6EF] px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">Women's Clothing</h3>
                <p className="pb-4 text-light-primary-text">
                  Shop exclusive collections and express your unique style.
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
              <div className="min-h-[578px] bg-[url(/images/home-4/black-dress-woman.png)] bg-no-repeat bg-position-[70px_70px]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col justify-end text-center min-h-[844px] rounded-2xl bg-[url(/images/home-4/kid-with-skateboard.jpg)] bg-center bg-cover bg-no-repeat">
              <div className="py-[33px] lg:px-11 px-[22px] bg-[#A0E2E0] rounded-b-2xl">
                <div>
                  <span className="text-light-primary-text bg-[#FFEB69] px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">Kids &amp; Baby Clothing</h3>
                <p className="pb-4 text-light-primary-text">
                  Shop exclusive collections and express your unique style.
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
        </div>
      </div>
    </section>
  );
}
