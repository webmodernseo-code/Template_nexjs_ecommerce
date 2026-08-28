"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThreeColCta() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-4 lg:p-8 h-[550px] rounded-2xl bg-[url(/images/home-2/apply-facewash.jpg)] bg-center bg-no-repeat">
              <div className="p-4 bg-[#9EE872] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">Your Daily Store.</h3>
                <p className="pb-4 text-light-primary-text">
                  Essentials, deals, and more.
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
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-4 lg:p-8 h-[550px] rounded-2xl bg-[url(/images/home-2/apply-makeup-1.jpg)] bg-center bg-no-repeat">
              <div className="p-4 bg-[#FFD6EF] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">Everyday Made Simple.</h3>
                <p className="pb-4 text-light-primary-text">
                  Quick, easy, and effortless.
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 col-span-12 xl:col-span-4"
          >
            <div className="flex flex-col justify-end p-4 lg:p-8 h-[550px] rounded-2xl bg-[url(/images/home-2/apply-makeup-2.jpg)] bg-center bg-no-repeat">
              <div className="p-4 bg-[#A0E2E0] rounded-2xl">
                <div>
                  <span className="text-light-primary-text bg-warning-light px-3 py-1 rounded-full text-base font-semibold">
                    Enjoy 20% savings
                  </span>
                </div>
                <h3 className="py-1.5">Your Cart. Your Way.</h3>
                <p className="pb-4 text-light-primary-text">
                  All your favorites, in one click.
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
