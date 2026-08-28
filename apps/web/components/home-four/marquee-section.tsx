"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="pb-12"
    >
      <div className="xl:max-w-[1728px] w-full mx-auto px-4 xl:px-0">
        <div className="flex items-center overflow-x-hidden bg-primary-lighter py-8">
          {/* ========== Marquee Text Start ========== */}
          <div className="flex items-center justify-center animate-marquee gap-x-15 pr-[30px]">
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
          </div>
          <div className="flex items-center justify-center animate-marquee gap-x-15 pl-[30px]">
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
            <div className="flex items-center gap-x-15 whitespace-nowrap">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0L16.6738 9.36891L26.1244 7L19.3475 14L26.1244 21L16.6738 18.6311L14 28L11.3262 18.6311L1.87564 21L8.65248 14L1.87564 7L11.3262 9.36891L14 0Z"
                  fill="#04535C"
                />
              </svg>
              <h5 className="text-primary-darker">Free shipment</h5>
            </div>
          </div>
          {/* ========== Marquee Text End ========== */}
        </div>
      </div>
    </motion.section>
  );
}
