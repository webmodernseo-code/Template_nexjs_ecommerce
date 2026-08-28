"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TwoColBannerGridThree() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 col-span-12"
          >
            <div className="md:items-center flex flex-col md:flex-row md:gap-x-2.5 py-5.5 pl-8.5 pr-10 bg-[#9EE872] rounded-2xl">
              <div className="order-2 md:order-1">
                <p className="font-semibold text-light-primary-text pb-4">
                  Premium
                </p>
                <h3 className="pb-4">
                  Healthy Eating &amp; Nutritional Wellness
                </h3>
                <p className="font-semibold text-light-primary-text pb-4">
                  Get Extra 50% Off
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
              <div className="order-1 md:order-2 md:max-w-80 w-full">
                <Image src="/images/home-3/avocado.png" alt="Avocado" width={320} height={320} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 col-span-12"
          >
            <div className="md:items-center flex flex-col md:flex-row md:gap-x-2.5 py-5.5 pl-8.5 pr-10 bg-[#A0E2E0] rounded-2xl">
              <div className="order-2 md:order-1">
                <p className="font-semibold text-light-primary-text pb-4">
                  Premium
                </p>
                <h3 className="pb-4">Healthy Food Habits for Everyday</h3>
                <p className="font-semibold text-light-primary-text pb-4">
                  Get Extra 50% Off
                </p>
                <Link
                  href="/shop-left-sidebar-3col"
                  className="btn bg-primary text-white font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                >
                  Shop Now
                  <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                    <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                  </span>
                </Link>
              </div>
              <div className="order-1 md:order-2 md:max-w-80 w-full">
                <Image src="/images/home-3/watermelon.png" alt="Watermelon" width={320} height={320} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
