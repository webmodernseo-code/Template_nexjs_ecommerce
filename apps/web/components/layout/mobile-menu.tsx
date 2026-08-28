"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchDropdown from "./search-dropdown";

interface MobileMenuProps {
  onOpenSidebar: () => void;
  onOpenCart: () => void;
}

export default function MobileMenu({
  onOpenSidebar,
  onOpenCart,
}: MobileMenuProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`border border-gray-300 xl:border-0 sticky-header xl:hidden ${
        isSticky ? "sticky-top" : ""
      }`}
    >
      {/* Top bar: hamburger + logo + cart */}
      <div className="pb-4 pt-3">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Hamburger */}
            <button
              onClick={onOpenSidebar}
              className="btn btn-default outline shadow-none size-12 rounded-[50px]"
              aria-label="Open navigation menu"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12L10 12"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 5L4 5"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 19L4 19"
                  stroke="#212529"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="w-[120px] md:w-[150px]"
              />
            </Link>

            {/* Cart icon */}
            <button
              onClick={onOpenCart}
              className="btn bg-warning-light size-12 rounded-[50px]"
              aria-label="Open cart"
            >
              <i className="hgi hgi-stroke hgi-shopping-cart-01 text-light-primary-text text-2xl leading-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="pb-4">
        <div className="container">
          <SearchDropdown id="mobile-search" />
        </div>
      </div>
    </div>
  );
}
