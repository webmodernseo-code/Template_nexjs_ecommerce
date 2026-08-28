"use client";

import { motion } from "framer-motion";

export default function NewsLetter() {
  return (
    <section className="px-4 md:px-0 max-w-[932px] mx-auto text-center lg:pb-6 pb-[70px] lg:rounded-[164px] -mb-[100px] relative z-10 bg-white xl:before:absolute xl:before:bottom-0 xl:before:left-[-23px] xl:before:h-[100px] xl:before:w-[145px] xl:before:bg-[url(/images/footer-left-shape.png)] xl:before:bg-no-repeat xl:before:z-11 xl:after:absolute xl:after:bottom-0 xl:after:right-[-23px] xl:after:h-[100px] xl:after:w-[145px] xl:after:bg-[url(/images/footer-right-shape.png)] xl:after:bg-no-repeat xl:after:z-11">
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        Subscribe to our newsletter
      </motion.h3>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 text-dark-secondary-text"
      >
        Stay updated! Subscribe to our mailing list for news, updates, and
        exclusive offers.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="input-group medium w-full md:max-w-[420px] mx-auto pl-4 py-1.5 pr-2.5 rounded-[100px]"
      >
        <div
          className="input-group-addon inline-flex items-center"
          data-align="inline-start"
        >
          <i className="hgi hgi-stroke hgi-mail-02 text-2xl" />
        </div>
        <input
          type="text"
          className="peer form-control placeholder-transparent focus:placeholder-transparent"
          placeholder="Enter your email"
          name="email"
          id="email"
        />
        <label
          className="absolute left-12 peer-focus:left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-[14px] bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
          htmlFor="email"
        >
          Enter your email
        </label>
        <div className="input-group-addon" data-align="inline-end">
          <button className="btn btn-primary btn-medium rounded-3xl">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}
