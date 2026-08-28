"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogGridCard from "../blog/blog-grid-card";
import Link from "next/link";

const BLOGS = [
  {
    image: "/images/home-3/nuts.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/1",
  },
  {
    image: "/images/home-3/tomato-ketchup.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/2",
  },
  {
    image: "/images/home-3/corn-can.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/3",
  },
  {
    image: "/images/home-3/strawberry-yogurt.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/4",
  },
];

export default function LatestBlogThree() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          className="flex justify-between items-center mb-10 pb-3 border-b border-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Latest Blog</h3>
          <Link
            href="/blog-grid"
            className="text-light-primary-text hover:underline font-bold font-urbanist lg:text-2xl lg:leading-9 text-xl leading-[30px]"
          >
            View All
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          {BLOGS.map((blog, index) => (
            <BlogGridCard
              className="xl:col-span-3"
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              comments={blog.comments}
              title={blog.title}
              description={blog.description}
              href={blog.href}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
