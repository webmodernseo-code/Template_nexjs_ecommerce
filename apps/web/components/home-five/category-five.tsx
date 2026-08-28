"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    id: 1,
    image: "/images/home-5/drone.png",
    alt: "Drone",
    title: "Drones & Accessories",
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    image: "/images/home-5/samsung-phone-1.png",
    alt: "Samsung Phone",
    title: "Phones, Tablets & Accessories",
    link: "#",
    delay: 0.3,
  },
  {
    id: 3,
    image: "/images/home-5/tablet.png",
    alt: "Tablet",
    title: "Laptops & Computers",
    link: "#",
    delay: 0.4,
  },
  {
    id: 4,
    image: "/images/home-5/power-bank.png",
    alt: "Power Bank",
    title: "Power Banks & Chargers",
    link: "#",
    delay: 0.5,
  },
  {
    id: 5,
    image: "/images/home-5/ipad-2.png",
    alt: "iPad",
    title: "Apple Products",
    link: "#",
    delay: 0.6,
  },
  {
    id: 6,
    image: "/images/home-5/action-cam.png",
    alt: "Action Cam",
    title: "Wearable Cameras & Action Cams",
    link: "#",
    delay: 0.7,
  },
  {
    id: 7,
    image: "/images/home-5/game-pad.png",
    alt: "Game Pad",
    title: "Gaming Consoles",
    link: "#",
    delay: 0.2, // resetting delay for second row visually if wanted, or stagger staggerChildren but we'll stick to original staggered wow behaviors mapped to framer-motion delay
  },
  {
    id: 8,
    image: "/images/home-5/washing-machine.png",
    alt: "Washing Machine",
    title: "Home Appliances",
    link: "#",
    delay: 0.3,
  },
  {
    id: 9,
    image: "/images/home-5/tv.png",
    alt: "Television",
    title: "Televisions & Home Theater",
    link: "#",
    delay: 0.4,
  },
  {
    id: 10,
    image: "/images/home-5/playstation.png",
    alt: "Playstation",
    title: "Game Controller",
    link: "#",
    delay: 0.5,
  },
  {
    id: 11,
    image: "/images/home-5/storage.png",
    alt: "Storage Device",
    title: "Storage & Digital Devices",
    link: "#",
    delay: 0.6,
  },
  {
    id: 12,
    image: "/images/home-5/earpods.png",
    alt: "Earpods",
    title: "Audio Equipment's",
    link: "#",
    delay: 0.7,
  },
];

export default function CategoryFive() {
  return (
    <div className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
              className="hover:border-primary border border-gray-300 rounded-2xl col-span-6 md:col-span-4 xl:col-span-2 lg:col-span-3 p-3 transition-all duration-300 group"
            >
              <a
                href={category.link}
                className="flex md:flex-row flex-col items-center justify-center gap-3 h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="max-w-[100px] flex items-center justify-center w-full shrink-0"
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={100}
                    height={100}
                    className="max-w-full object-contain"
                  />
                </motion.div>
                <p className="font-semibold text-light-primary-text group-hover:text-primary text-center md:text-left transition-all duration-300">
                  {category.title}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
