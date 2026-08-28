"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top btn btn-primary size-10 rounded-[50px] z-50 inline-flex items-center justify-center fixed md:right-8 md:bottom-8 right-[15px] bottom-[85px] transition-all duration-400 ease-in-out ${
        isVisible ? "active" : "hide"
      }`}
    >
      <i className="hgi hgi-stroke hgi-arrow-up-01 leading-6 text-2xl"></i>
    </button>
  );
}
