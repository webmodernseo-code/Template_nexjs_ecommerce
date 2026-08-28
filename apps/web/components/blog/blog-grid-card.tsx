"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface BlogGridCardProps {
  image: string;
  category: string;
  date: string;
  comments: number;
  title: string;
  description: string;
  href: string;
  delay?: number;
  className?: string;
}


export default function BlogGridCard({
  image,
  category,
  date,
  comments,
  title,
  description,
  href,
  className,
  delay = 0.2,
}: BlogGridCardProps) {

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className={cn(className)}
    >

      <div className="border border-gray-300 rounded-2xl p-6 hover:transform hover:-translate-y-[5px] hover:transition-all hover:ease-[cubic-bezier(0.02,0.01,0.47,1)] hover:duration-250 transition-all ease-[cubic-bezier(0.02,0.01,0.47,1)] duration-250 h-full flex flex-col">
        <div className="mb-6 h-[250px] relative w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="mb-4">
          <span className="text-warning-dark bg-[rgba(255,193,7,0.16)] px-2 py-px inline-flex rounded-full text-xs leading-[18px]">
            {category}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row divide-x-0 lg:divide-x divide-[rgba(145,158,171,0.24)] items-start justify-start lg:gap-y-0 gap-y-4">
          <p className="text-light-secondary-text text-sm leading-[22px] inline-flex items-center gap-x-2 lg:pr-4 pr-0">
            <span className="inline-flex items-center justify-center">
              <i className="hgi hgi-stroke hgi-calendar-03 text-base leading-4 text-light-secondary-text" />
            </span>
            <span>{date}</span>
          </p>
          <p className="text-light-secondary-text text-sm leading-[22px] inline-flex items-center gap-x-2 pl-0 lg:pl-4">
            <span className="inline-flex items-center justify-center">
              <i className="hgi hgi-stroke hgi-chatting-01 text-base leading-4 text-light-secondary-text" />
            </span>
            <span>Comment</span>
            <span>({comments})</span>
          </p>
        </div>
        <Link href={href}>
          <h6 className="mt-4 mb-3 hover:text-primary">{title}</h6>
        </Link>
        <p className="mb-4 grow">{description}</p>
        <div>
          <Link
            href={href}
            className="btn btn-primary btn-large rounded-[60px] group py-2 pl-5 pr-3 gap-x-[18px] inline-flex"
          >
            Read More
            <span className="size-8 bg-white inline-flex items-center justify-center rounded-full rotate-[-40deg] transform group-hover:rotate-0 transition-all duration-300">
              <i className="hgi hgi-stroke hgi-arrow-right-02 text-xl text-primary-darker" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
