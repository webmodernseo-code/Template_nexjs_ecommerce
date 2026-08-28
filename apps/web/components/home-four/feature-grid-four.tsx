"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    id: 1,
    delay: ".2s",
    bgColor: "bg-[#A0E2E0]",
    icon: "hgi-container-truck",
    title: "Free Shipping",
    description: "Enjoy the Convenience of Free Shipping on Every Order",
  },
  {
    id: 2,
    delay: ".3s",
    bgColor: "bg-[#FFEB69]",
    icon: "hgi-customer-support",
    title: "24x7 Support",
    description: "Round-the-Clock Assistance, Anytime You Need It",
  },
  {
    id: 3,
    delay: ".4s",
    bgColor: "bg-[#FFC091]",
    icon: "hgi-delivery-return-02",
    title: "30 Days Return",
    description:
      "Your Satisfaction is Our Priority: Return Any Product Within 30 Days",
  },
  {
    id: 4,
    delay: ".5s",
    bgColor: "bg-[#9EE872]",
    icon: "hgi-transaction",
    title: "Secure Payment",
    description: "Seamless Shopping Backed by Safe and Secure Payment Options",
  },
];

export default function FeatureGridFour() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: parseFloat(feature.delay),
              }}
              className="md:col-span-6 col-span-12 xl:col-span-3"
            >
              <div
                className={`p-6 border-gray-300 border rounded-2xl text-center ${feature.bgColor}`}
              >
                <span className="inline-flex items-center justify-center size-14 bg-white rounded-full">
                  <i
                    className={`hgi hgi-stroke ${feature.icon} text-3xl text-light-primary-text`}
                  />
                </span>
                <h5 className="pt-3 pb-0.5">{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
