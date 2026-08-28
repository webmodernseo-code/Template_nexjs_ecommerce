"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThreeColDiscountGrid() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-8 h-[528px] rounded-3xl bg-[url('/images/home-5/promo-grid-1.jpg')] bg-center">
              <div>
                <div>
                  <span className="text-light-primary-text bg-[#84A9FF] px-3 py-1 rounded-full text-base font-semibold">
                    Start From $120.00
                  </span>
                </div>
                <h3 className="py-1.5 text-white">Audio Essentials</h3>
                <p className="pb-4 text-white">Hear every beat, every time.</p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-8 h-[528px] rounded-3xl bg-[url('/images/home-5/promo-grid-2.jpg')] bg-center">
              <div>
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Up to 30% off
                  </span>
                </div>
                <h3 className="py-1.5 text-white">New Smart Watch</h3>
                <p className="pb-4 text-white">
                  Track your fitness, calls, and more.
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-8 h-[528px] rounded-3xl bg-[url('/images/home-5/promo-grid-3.jpg')] bg-center">
              <div>
                <div>
                  <span className="text-light-primary-text bg-[#AAF27F] px-3 py-1 rounded-full text-base font-semibold">
                    New Arrivals
                  </span>
                </div>
                <h3 className="py-1.5 text-white">Smart Mobile Devices</h3>
                <p className="pb-4 text-white">
                  Smart devices for every lifestyle.
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
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
    </section>
  );
}
