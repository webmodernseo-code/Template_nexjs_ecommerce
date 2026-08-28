"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const LOGOS = [
  { id: 1, src: "/images/home-5/content-logo-1.png", delay: 0.2 },
  { id: 2, src: "/images/home-5/content-logo-2.png", delay: 0.3 },
  { id: 3, src: "/images/home-5/content-logo-3.png", delay: 0.4 },
  { id: 4, src: "/images/home-5/content-logo-4.png", delay: 0.5 },
  { id: 5, src: "/images/home-5/content-logo-5.png", delay: 0.6 },
  { id: 6, src: "/images/home-5/content-logo-6.png", delay: 0.7 },
];

export default function DealCoutdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set a target date 15 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    const countDownDate = targetDate.getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      });
    };

    updateTimer(); // Initial call to avoid hydration mismatch delay
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="pb-[50px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[url(/images/home-5/countdown-bg.png)] lg:py-[70px] py-10 bg-cover rounded-5xl"
        >
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:bg-white bg-transparent text-center lg:p-[60px] p-10 rounded-5xl"
            >
              <h2>Hurry! Limited Deals</h2>
              <p className="pt-3 pb-10 text-light-primary-text">
                Cases you love, prices you'll love more.
              </p>
              <div className="limited-deal-countdown flex flex-wrap md:flex-nowrap gap-3 pb-10 sellzy-countdown">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-[#9EE872] py-6 md:min-w-[140px] w-full rounded-2xl"
                >
                  <p>Days</p>
                  <h3 className="days">{timeLeft.days}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-[#FFEB69] py-6 md:min-w-[140px] w-full rounded-2xl"
                >
                  <p>Hours</p>
                  <h3 className="hours">{timeLeft.hours}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="bg-[#FFD6EF] py-6 md:min-w-[140px] w-full rounded-2xl"
                >
                  <p>Mins</p>
                  <h3 className="minutes">{timeLeft.minutes}</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="bg-[#A0E2E0] py-6 md:min-w-[140px] w-full rounded-2xl"
                >
                  <p>Secs</p>
                  <h3 className="seconds">{timeLeft.seconds}</h3>
                </motion.div>
              </div>
              <Link
                className="btn btn-primary text-white font-semibold btn-large rounded-[60px] group py-2 pl-5 pr-3"
                href="/shop-left-sidebar"
              >
                Shop Now
                <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
                  <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-5 py-5">
          {LOGOS.map((logo) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: logo.delay }}
              className="col-span-6 md:col-span-4 xl:col-span-2 mx-auto"
            >
              <Image src={logo.src} alt="Ipsum Logo" width={120} height={40} className="h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
