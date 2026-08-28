"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
  {
    src: "/images/home-2/spa-logo.png",
    alt: "Spa & Salon",
    delay: 0.2,
  },
  {
    src: "/images/home-2/cosmetic-logo.png",
    alt: "Natural Cosmetic",
    delay: 0.3,
  },
  {
    src: "/images/home-2/beauty-logo.png",
    alt: "Beauty Spa",
    delay: 0.4,
  },
  {
    src: "/images/home-2/salon-logo.png",
    alt: "Beauty Salon",
    delay: 0.5,
  },
  {
    src: "/images/home-2/boutique-logo.png",
    alt: "Beauty Boutique",
    delay: 0.6,
  },
  {
    src: "/images/home-2/therapy-logo.png",
    alt: "Nature Therapy",
    delay: 0.7,
  },
];

export default function CosmeticsBrand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
      {BRANDS.map((brand, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: brand.delay }}
          className="mx-auto"
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={120}
            height={80}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}
