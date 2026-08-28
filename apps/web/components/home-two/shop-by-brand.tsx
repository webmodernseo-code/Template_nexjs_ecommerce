"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
  { src: "/images/merck.png", alt: "Merck", delay: 0.2 },
  { src: "/images/norton.png", alt: "Norton", delay: 0.3 },
  { src: "/images/abbott.png", alt: "Abbott", delay: 0.4 },
  { src: "/images/davita.png", alt: "Davita", delay: 0.5 },
  { src: "/images/merck.png", alt: "Merck", delay: 0.6 },
  { src: "/images/abbott.png", alt: "Abbott", delay: 0.7 },
  { src: "/images/abbott.png", alt: "Abbott", delay: 0.2 },
  { src: "/images/davita.png", alt: "Davita", delay: 0.3 },
  { src: "/images/merck.png", alt: "Merck", delay: 0.4 },
  { src: "/images/abbott.png", alt: "Abbott", delay: 0.5 },
  { src: "/images/davita.png", alt: "Davita", delay: 0.6 },
  { src: "/images/norton.png", alt: "Norton", delay: 0.7 },
];

export default function ShopByBrand() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pb-10"
        >
          Shop By Brands
        </motion.h3>
        <div className="grid grid-cols-12 gap-6">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: brand.delay }}
              className="border border-[#919EAB3D] rounded-2xl py-6 px-[51px] mx-auto col-span-6 md:col-span-4 xl:col-span-2 lg:col-span-3 flex items-center justify-center w-full"
            >
              <Image src={brand.src} alt={brand.alt} width={120} height={40} className="h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
