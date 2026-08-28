"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogGridCard from "@/components/blog/blog-grid-card";

const LATEST_BLOGS = [
  {
    image: "/images/blog/blog-grid-5.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-details",
    delay: 0.2,
  },
  {
    image: "/images/blog/blog-grid-6.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-details",
    delay: 0.3,
  },
  {
    image: "/images/blog/blog-grid-7.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-details",
    delay: 0.4,
  },
  {
    image: "/images/blog/blog-grid-8.png",
    category: "Category Name",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-details",
    delay: 0.5,
  },
];

export default function LatestBlogTwo() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-between items-center mb-10"
        >
          <h3>Latest Blog</h3>
          <Link
            href="/blog-grid"
            className="text-light-primary-text hover:underline font-bold font-urbanist lg:text-2xl lg:leading-9 text-xl leading-[30px]"
          >
            View All
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LATEST_BLOGS.map((blog, index) => (
            <BlogGridCard
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              comments={blog.comments}
              title={blog.title}
              description={blog.description}
              href={blog.href}
              delay={blog.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
