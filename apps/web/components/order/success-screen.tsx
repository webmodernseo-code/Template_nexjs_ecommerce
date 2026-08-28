"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SuccessScreen() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Image
              src="/images/order-success-Illustration.png"
              alt="order-success-image"
              width={340}
              height={340}
              priority
            />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            Thanks For You Order
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-[390px] w-[96%] text-center mb-6"
          >
            We're excited to let you know that we've received your order and
            it's now being processed.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/"
              className="btn btn-primary btn-large rounded-[80px] px-[19px] py-[11px]"
            >
              Back To Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
