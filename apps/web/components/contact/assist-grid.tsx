"use client";

import { motion } from "framer-motion";

const ASSIST_ITEMS = [
  {
    icon: "hgi-mail-02",
    title: "Email",
    content: "support@example.com",
  },
  {
    icon: "hgi-customer-support",
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: "hgi-location-06",
    title: "Address",
    content: "123 Innovation Street, Suite 456, San Francisco, CA 94107, USA",
  },
  {
    icon: "hgi-internet",
    title: "Website",
    content: "www.createuiux.com",
  },
];

export default function AssistGrid() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="text-center">
          <motion.h3
            className="pb-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We are happy to assist you
          </motion.h3>
          <motion.p
            className="pb-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Here to help, anytime you need us.
          </motion.p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {ASSIST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="md:col-span-6 col-span-12 xl:col-span-3 border-gray-300 border p-6 rounded-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div>
                <span className="inline-flex items-center justify-center size-12 bg-[#919EAB14] rounded-full">
                  <i
                    className={`hgi hgi-stroke ${item.icon} text-2xl text-light-primary-text`}
                  />
                </span>
                <p className="pt-4 pb-0.5 font-semibold text-light-primary-text">
                  {item.title}
                </p>
                <p>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
