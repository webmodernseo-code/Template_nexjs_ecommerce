"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FourColumnPromoBanner() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col justify-end p-4 lg:py-8 lg:px-6 h-[600px] rounded-2xl bg-[url('/images/home-5/promo-bg-1.png')] bg-cover bg-position-[-350px_0] bg-no-repeat">
              <div className="py-4 px-3 bg-[#9EE872] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h4 className="py-1.5">Samsung QLED 4K Smart TV</h4>
                <p className="pb-4 text-light-primary-text">
                  Free Shipping or over $89
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-1.5 pl-5 pr-3"
                >
                  See More Products
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col p-4 lg:py-8 lg:px-6 h-[600px] rounded-2xl bg-[url('/images/home-5/promo-bg-2.jpg')] bg-cover bg-center bg-no-repeat">
              <div className="py-4 px-3 bg-[#FFEB69] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-[#C0F2DC] px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h4 className="py-1.5">Sony Bravia 55" Heater</h4>
                <p className="pb-4 text-light-primary-text">
                  Free Shipping or over $150
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-1.5 pl-5 pr-3"
                >
                  See More Products
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col justify-end p-4 lg:py-8 lg:px-6 h-[600px] rounded-2xl bg-[url('/images/home-5/promo-bg-3.jpg')] bg-cover bg-center bg-no-repeat">
              <div className="py-4 px-3 bg-[#FFD6EF] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h4 className="py-1.5">iPhone 18 Pro Max Plus</h4>
                <p className="pb-4 text-light-primary-text">
                  Free Shipping or over $250
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-1.5 pl-5 pr-3"
                >
                  See More Products
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="flex flex-col p-4 lg:py-8 lg:px-6 h-[600px] rounded-2xl bg-[url('/images/home-5/promo-bg-4.png')] bg-cover bg-position-[-350px_0] bg-no-repeat">
              <div className="py-4 px-3 bg-[#92BDF5] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h4 className="py-1.5">Samsung Smart Oven</h4>
                <p className="pb-4 text-light-primary-text">
                  Free Shipping or over $120
                </p>
                <Link
                  href="/shop-left-sidebar"
                  className="btn btn-primary text-white text-sm leading-6 font-semibold btn-large rounded-[60px] group py-1.5 pl-5 pr-3"
                >
                  See More Products
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
