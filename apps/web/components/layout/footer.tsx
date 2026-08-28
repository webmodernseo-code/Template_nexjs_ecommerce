"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Careers", href: "#" },
  { label: "Latest News", href: "/blog-grid" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const ACCOUNT_LINKS = [
  { label: "Your Account", href: "/my-account" },
  { label: "Return Policies", href: "/return-policy" },
  { label: "Become a Vendor", href: "/vendor-account" },
  { label: "Wishlist", href: "/wishlist-style-v1" },
  { label: "Affiliate Program", href: "#" },
  { label: "FAQs", href: "/faq" },
];

const CATEGORIES_LINKS = [
  { label: "Healthcare", href: "/index-2" },
  { label: "Fashion", href: "/index-3" },
  { label: "Organic", href: "/index-4" },
  { label: "Beauty", href: "/index-5" },
  { label: "Groceries", href: "/" },
  { label: "Fashion", href: "/index-3" },
];

export default function Footer() {
  return (
    <>
      <footer className="md:pb-15 pb-[100px] bg-primary-darker pt-40 xl:rounded-tr-[22px] xl:rounded-tl-[22px]">
        <div className="container">
          {/* <!-- ========== Footer Top Section Start ========== --> */}
          <div className="pb-9 grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-12 col-span-12 xl:col-span-3 flex flex-col gap-y-6"
            >
              <div>
                <Link href="/">
                  <Image src="/images/footer-logo.svg" alt="logo" width={155} height={42} />
                </Link>
              </div>
              <p className="text-primary-lighter text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-4">
                <a
                  className="inline-flex items-center justify-center size-10 rounded-full bg-[rgba(145,158,171,0.16)]"
                  href="#"
                >
                  <i className="hgi hgi-stroke hgi-facebook-01 text-2xl text-white"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center size-10 rounded-full bg-[rgba(145,158,171,0.16)]"
                  href="#"
                >
                  <i className="hgi hgi-stroke hgi-instagram text-2xl text-white"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center size-10 rounded-full bg-[rgba(145,158,171,0.16)]"
                  href="#"
                >
                  <i className="hgi hgi-stroke hgi-linkedin-01 text-2xl text-white"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center size-10 rounded-full bg-[rgba(145,158,171,0.16)]"
                  href="#"
                >
                  <i className="hgi hgi-stroke hgi-pinterest text-2xl text-white"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center size-10 rounded-full bg-[rgba(145,158,171,0.16)]"
                  href="#"
                >
                  <i className="hgi hgi-stroke hgi-behance-01 text-2xl text-white"></i>
                </a>
              </div>
              <div className="flex flex-col gap-y-[15px]">
                <p className="text-base font-semibold text-primary-lighter">
                  Download Our App:
                </p>
                <div className="flex gap-x-2.5">
                  <a href="#">
                    <Image src="/images/google-play.png" alt="google-play" width={135} height={40} />
                  </a>
                  <a href="#">
                    <Image src="/images/apple-store.png" alt="apple-store" width={135} height={40} />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-6 col-span-12 xl:col-span-2"
            >
              <h5 className="text-primary-lighter pb-6 border-b border-[rgba(145,158,171,0.24)]">
                About
              </h5>
              <ul className="flex flex-col gap-y-1.5 pt-4">
                {ABOUT_LINKS.map((link, index) => (
                  <li key={index} className="py-1.5 flex items-center gap-x-2">
                    <span className="inline-flex items-center">
                      <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl text-primary-lighter"></i>
                    </span>
                    <Link
                      href={link.href}
                      className="text-primary-lighter font-semibold hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-6 col-span-12 xl:col-span-2"
            >
              <h5 className="text-primary-lighter pb-6 border-b border-[rgba(145,158,171,0.24)]">
                My Account
              </h5>
              <ul className="flex flex-col gap-y-1.5 pt-4">
                {ACCOUNT_LINKS.map((link, index) => (
                  <li key={index} className="py-1.5 flex items-center gap-x-2">
                    <span className="inline-flex items-center">
                      <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl text-primary-lighter"></i>
                    </span>
                    <Link
                      href={link.href}
                      className="text-primary-lighter font-semibold hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-6 col-span-12 xl:col-span-2"
            >
              <h5 className="text-primary-lighter pb-6 border-b border-[rgba(145,158,171,0.24)]">
                Categories
              </h5>
              <ul className="flex flex-col gap-y-1.5 pt-4">
                {CATEGORIES_LINKS.map((link, index) => (
                  <li key={index} className="py-1.5 flex items-center gap-x-2">
                    <span className="inline-flex items-center">
                      <i className="hgi hgi-stroke hgi-arrow-right-01 text-xl text-primary-lighter"></i>
                    </span>
                    <Link
                      href={link.href}
                      className="text-primary-lighter font-semibold hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="md:col-span-6 col-span-12 xl:col-span-3"
            >
              <h5 className="text-primary-lighter pb-6 border-b border-[rgba(145,158,171,0.24)]">
                Contact Information's
              </h5>
              <ul className="flex flex-col gap-y-1.5 py-4">
                <li className="flex items-center gap-x-3">
                  <span className="size-10 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.16)]">
                    <i className="hgi hgi-stroke hgi-maps-global-01 text-2xl text-primary-lighter"></i>
                  </span>
                  <p className="text-primary-lighter font-semibold">
                    2715 Ash Dr. San Jose, South Dakota 83475
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <span className="size-10 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.16)]">
                    <i className="hgi hgi-stroke hgi-call text-2xl text-primary-lighter"></i>
                  </span>
                  <p className="text-primary-lighter font-semibold">
                    Call Us: (239) 555-0108
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <span className="size-10 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.16)]">
                    <i className="hgi hgi-stroke hgi-mail-02 text-2xl text-primary-lighter"></i>
                  </span>
                  <p className="text-primary-lighter font-semibold">
                    sara.cruz@example.com
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <span className="size-10 inline-flex items-center justify-center rounded-full bg-[rgba(145,158,171,0.16)]">
                    <i className="hgi hgi-stroke hgi-printer text-2xl text-primary-lighter"></i>
                  </span>
                  <p className="text-primary-lighter font-semibold">
                    sara.cruz@example.com
                  </p>
                </li>
              </ul>
              <div>
                <Image src="/images/payment-methods.png" alt="payment-methods" width={320} height={32} className="object-contain" />
              </div>
            </motion.div>
          </div>
          {/* <!-- ========== Footer Top Section End ========== --> */}

          {/* <!-- ========== Footer Bottom Section Start ========== --> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-white bg-[url(/images/bottom-border.png)] pt-[22px] bg-center pb-px bg-no-repeat"
          >
            {new Date().getFullYear()} Copyright By Themeforest Powered By
            Createuiux
          </motion.div>
          {/* ========== Footer Bottom Section End ========== */}
        </div>
      </footer>

      <div className="w-full z-80 bg-white border-t border-gray-300 block md:hidden fixed bottom-0 left-0 pb-3">
        <div className="container">
          <ul className="flex items-center justify-between footer-bottom-nav -mt-px">
            <li className="group">
              <Link
                href="/"
                className="footer-bottom-nav-btn flex items-center flex-col gap-y-1 border-t-2 border-transparent text-sm leading-[22px] text-light-primary-text px-[9px] pt-2.5 pb-1 active"
              >
                <span className="inline-flex items-center justify-center">
                  <i className="hgi hgi-stroke hgi-home-01 text-2xl leading-6 text-light-primary-text"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="group">
              <Link
                href="/cart-single-vendor"
                className="footer-bottom-nav-btn flex items-center flex-col gap-y-1 border-t-2 border-transparent text-sm leading-[22px] text-light-primary-text px-[9px] pt-2.5 pb-1"
              >
                <span className="inline-flex items-center justify-center">
                  <i className="hgi hgi-stroke hgi-package-moving text-2xl leading-6 text-light-primary-text"></i>
                </span>
                My Order
              </Link>
            </li>
            <li className="group">
              <Link
                href="/wishlist-style-v1"
                className="footer-bottom-nav-btn flex items-center flex-col gap-y-1 border-t-2 border-transparent text-sm leading-[22px] text-light-primary-text px-[9px] pt-2.5 pb-1"
              >
                <span className="inline-flex items-center justify-center">
                  <i className="hgi hgi-stroke hgi-favourite text-2xl leading-6 text-light-primary-text"></i>
                </span>
                Wishlist
              </Link>
            </li>
            <li className="group">
              <Link
                href="/my-account"
                className="footer-bottom-nav-btn flex items-center flex-col gap-y-1 border-t-2 border-transparent text-sm leading-[22px] text-light-primary-text px-[9px] pt-2.5 pb-1"
              >
                <span className="inline-flex items-center justify-center">
                  <i className="hgi hgi-stroke hgi-user-circle text-2xl leading-6 text-light-primary-text"></i>
                </span>
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
