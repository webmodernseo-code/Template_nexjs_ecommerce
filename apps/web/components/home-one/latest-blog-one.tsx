import BlogGridCard from "@/components/blog/blog-grid-card";
import Link from "next/link";

const BLOGS = [
  {
    image: "/images/blog/blog-grid-1.png",
    category: "Gadgets",
    date: "09 Feb 2027",
    comments: 10,
    title: "The Future of Industrial Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/1",
    delay: 0.2,
  },
  {
    image: "/images/blog/blog-grid-2.png",
    category: "Technology",
    date: "09 Feb 2027",
    comments: 15,
    title: "The Evolution of Workspace Design",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/2",
    delay: 0.3,
  },
  {
    image: "/images/blog/blog-grid-3.png",
    category: "Design",
    date: "09 Feb 2027",
    comments: 20,
    title: "Creative Solutions for Modern Living",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/3",
    delay: 0.4,
  },
  {
    image: "/images/blog/blog-grid-4.png",
    category: "Industrial",
    date: "09 Feb 2027",
    comments: 25,
    title: "Sustainable Architecture Trends",
    description:
      "So you have heard about this site or you have been to it, but you cannot figure out.",
    href: "/blog-grid/4",
    delay: 0.5,
  },
];

export default function LatestBlogOne() {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h3>Latest Blog</h3>
          <Link
            href="/blog-grid"
            className="text-light-primary-text hover:underline font-bold font-urbanist lg:text-2xl lg:leading-9 text-xl leading-[30px]"
          >
            View All
          </Link>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {BLOGS.map((blog, index) => (
            <BlogGridCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
