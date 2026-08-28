"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "1. What payment methods do you accept?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
  {
    question: "2. How can I track my order?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
  {
    question: "3. How long will it take to receive my order?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
  {
    question: "4. Do you ship internationally?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
  {
    question: "5. Can I cancel or modify my order?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
  {
    question: "6. Do I need an account to place an order?",
    answer:
      "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-[70px]">
      <div className="container">
        <div className="text-center">
          <motion.h3
            className="pb-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h3>
          <motion.p
            className="pb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Find quick answers to common questions.
          </motion.p>
        </div>
        <div className="grid grid-cols-12">
          <div className="lg:col-start-2 md:col-start-2 col-start-1 xl:col-end-12 md:col-end-12 col-end-13">
            <div className="accordion">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  className="accordion-item"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div
                    className={`accordion-header cursor-pointer select-none ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h6>{faq.question}</h6>
                    <i className="hgi hgi-stroke hgi-minus-sign" />
                    <i className="hgi hgi-stroke hgi-plus-sign" />
                  </div>
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
