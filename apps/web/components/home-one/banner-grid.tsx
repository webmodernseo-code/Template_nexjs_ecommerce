"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerGrid() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="lg:items-center flex flex-col lg:flex-row lg:gap-x-2.5 py-12 pl-8 pr-8.5 bg-[#FFD6EF] rounded-2xl">
              <div className="order-2 lg:order-1 mb-6 lg:mb-0">
                <h4 className="pb-3">Your Health, Our Priority</h4>
                <p className="pb-6">
                  Comprehensive Healthcare Solutions Delivered with Care and
                  Precision
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn bg-primary-lighter text-black font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
              <div className="order-1 lg:order-2 lg:max-w-40 w-full lg:pb-0 pb-6">
                <Image src="/images/vitamin-c.png" alt="Vitamin C" width={160} height={160} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="lg:items-center flex flex-col lg:flex-row lg:gap-x-2.5 py-12 pl-8 pr-8.5 bg-[#FFEB69] rounded-2xl">
              <div className="order-2 lg:order-1 mb-6 lg:mb-0">
                <h4 className="pb-3">Your Partner in Wellness</h4>
                <p className="pb-6">
                  Comprehensive Healthcare Solutions Delivered with Care and
                  Precision
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn bg-primary-lighter text-black font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
              <div className="order-1 lg:order-2 lg:max-w-40 w-full lg:pb-0 pb-6">
                <Image src="/images/vitamin-c-2.png" alt="Vitamin C" width={160} height={160} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="lg:items-center flex flex-col lg:flex-row lg:gap-x-2.5 py-12 pl-8 pr-8.5 bg-[#9EE872] rounded-2xl">
              <div className="order-2 lg:order-1 mb-6 lg:mb-0">
                <h4 className="pb-3">Health Made Simple</h4>
                <p className="pb-6">
                  Comprehensive Healthcare Solutions Delivered with Care and
                  Precision
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn bg-primary-lighter text-black font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
              <div className="order-1 lg:order-2 lg:max-w-40 w-full lg:pb-0 pb-6">
                <Image
                  src="/images/bp-machine-3.png"
                  alt="Blood Pressure Machine"
                  width={160}
                  height={160}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
