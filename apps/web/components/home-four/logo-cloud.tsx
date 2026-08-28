"use client";

import { motion } from "framer-motion";

export default function LogoCloud() {
  return (
    <div className="pb-[70px]">
      <div className="container">
        <div className="flex flex-wrap justify-center xl:justify-between gap-y-8">
          <div className="w-1/2 md:w-1/3 xl:w-auto flex justify-center">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/images/home-4/cowshed.png"
              alt="Cowshed"
            />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-auto flex justify-center">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src="/images/home-4/ninoa.png"
              alt="Ninoa"
            />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-auto flex justify-center">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="/images/home-4/claudia.png"
              alt="Claudia"
            />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-auto flex justify-center">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src="/images/home-4/minut.png"
              alt="Minut"
            />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-auto flex justify-center">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              src="/images/home-4/orchard.png"
              alt="Orchard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
