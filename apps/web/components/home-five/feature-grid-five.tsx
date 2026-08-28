"use client";

import { motion } from "framer-motion";

export default function FeatureGridFive() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="p-6 rounded-2xl text-center bg-[#A0E2E0]">
              <span className="inline-flex items-center justify-center size-14 bg-white rounded-full">
                <i className="hgi hgi-stroke hgi-container-truck text-3xl text-light-primary-text" />
              </span>
              <h5 className="pt-3 pb-0.5">Free Shipping</h5>
              <p>Enjoy the Convenience of Free Shipping on Every Order</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="p-6 rounded-2xl text-center bg-[#FFEB69]">
              <span className="inline-flex items-center justify-center size-14 bg-white rounded-full">
                <i className="hgi hgi-stroke hgi-customer-support text-3xl text-light-primary-text" />
              </span>
              <h5 className="pt-3 pb-0.5">24x7 Support</h5>
              <p>Round-the-Clock Assistance, Anytime You Need It</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="p-6 rounded-2xl text-center bg-[#FFC091]">
              <span className="inline-flex items-center justify-center size-14 bg-white rounded-full">
                <i className="hgi hgi-stroke hgi-delivery-return-02 text-3xl text-light-primary-text" />
              </span>
              <h5 className="pt-3 pb-0.5">30 Days Return</h5>
              <p>
                Your Satisfaction is Our Priority: Return Any Product Within 30
                Days
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-6 col-span-12 xl:col-span-3"
          >
            <div className="p-6 rounded-2xl text-center bg-[#9EE872]">
              <span className="inline-flex items-center justify-center size-14 bg-white rounded-full">
                <i className="hgi hgi-stroke hgi-transaction text-3xl text-light-primary-text" />
              </span>
              <h5 className="pt-3 pb-0.5">Secure Payment</h5>
              <p>Seamless Shopping Backed by Safe and Secure Payment Options</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
