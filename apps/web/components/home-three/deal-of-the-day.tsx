"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[url(/images/home-3/tomato-ketchup-bg.png)] bg-black/20 bg-blend-overlay py-[120px] text-center bg-opacity-25 bg-center rounded-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-[460px] w-full mx-auto"
          >
            <div>
              <p className="text-light-primary-text bg-warning-light py-1 px-3 inline-flex items-center rounded-full font-semibold">
                Deal of the day
              </p>
            </div>
            <h2 className="text-white pt-2.5 pb-6">
              Get up to 50% of on fresh shopping.
            </h2>
            <div className="home3-cta-section-countdown flex justify-between text-center pb-8 px-2.5 md:px-0 sellzy-countdown">
              <div>
                <h4 className="days bg-white rounded-full size-[70px] md:size-[100px] flex flex-col items-center justify-center">
                  {timeLeft.days}
                </h4>
                <p className="font-semibold pt-2">Days</p>
              </div>
              <div>
                <h4 className="hours bg-white rounded-full size-[70px] md:size-[100px] flex flex-col items-center justify-center">
                  {timeLeft.hours}
                </h4>
                <p className="font-semibold pt-2">Hours</p>
              </div>
              <div>
                <h4 className="minutes bg-white rounded-full size-[70px] md:size-[100px] flex flex-col items-center justify-center">
                  {timeLeft.minutes}
                </h4>
                <p className="font-semibold pt-2">Min</p>
              </div>
              <div>
                <h4 className="seconds bg-white rounded-full size-[70px] md:size-[100px] flex flex-col items-center justify-center">
                  {timeLeft.seconds}
                </h4>
                <p className="font-semibold pt-2">Sec</p>
              </div>
            </div>
            <Link
              href="/product-details"
              className="btn btn-primary btn-large rounded-[60px] group py-2 pl-5 pr-3"
            >
              Order Today
              <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
