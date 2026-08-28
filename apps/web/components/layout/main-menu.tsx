"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_MENU_DATA } from "./main-menu-data";
import CategoryMenu from "./category-menu";

export default function MainMenu() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`border border-gray-300 hidden xl:flex header-bottom sticky-header border-r-0 border-l-0 ${
        isSticky ? "sticky-top" : ""
      }`}
    >
      <div className="container">
        <div className="hidden relative items-center justify-between xl:flex">
          <CategoryMenu />
          <nav className="main-menu">
            <ul>
              {MAIN_MENU_DATA.map((item, index) => (
                <li
                  key={index}
                  className={
                    item.subItems || item.megaMenu ? "has-sub-item" : ""
                  }
                >
                  <Link
                    href={item.href}
                    className={
                      item.isActive
                        ? "active flex items-center gap-1"
                        : "flex items-center gap-1"
                    }
                  >
                    {item.label}
                    {(item.subItems || item.megaMenu) && (
                      <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl leading-none" />
                    )}
                  </Link>

                  {/* Standard Submenu */}
                  {item.subItems && !item.megaMenu && (
                    <ul>
                      {item.subItems.map((sub, sIdx) => (
                        <li
                          key={sIdx}
                          className={sub.subItems ? "has-sub-item" : ""}
                        >
                          <Link
                            href={sub.href}
                            className="flex items-center justify-between w-full"
                          >
                            {sub.label}
                            {sub.subItems && (
                              <i className="hgi hgi-stroke hgi-arrow-down-01 text-xl leading-none" />
                            )}
                          </Link>
                          {sub.subItems && (
                            <ul>
                              {sub.subItems.map((child, cIdx) => (
                                <li key={cIdx}>
                                  <Link href={child.href}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Mega Menu */}
                  {item.megaMenu && (
                    <div className="mega-menu">
                      <div className="p-10">
                        <div className="grid grid-cols-6 gap-x-4 divide-x divide-[rgba(145,158,171,0.24)]">
                          {item.megaMenu.map((section, secIdx) => (
                            <div
                              key={secIdx}
                              className={`flex flex-col ${secIdx < item.megaMenu!.length - 1 ? "gap-y-1.5 pr-4" : "gap-y-1.5"}`}
                            >
                              <h5 className="text-sm leading-[22px] uppercase font-semibold">
                                {section.title}
                              </h5>
                              <ul className="flex flex-col gap-y-2">
                                {section.items.map((link, lIdx) => (
                                  <li key={lIdx}>
                                    <Link href={link.href}>{link.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="xl:flex lg:items-center gap-x-4 hidden">
              <span className="size-12 inline-flex items-center justify-center rounded-full transition-colors duration-300 bg-[rgba(145,158,171,0.08)]">
                <i className="hgi hgi-stroke hgi-customer-support text-2xl text-light-primary-text" />
              </span>
              <span className="flex flex-col text-sm leading-[22px]">
                24/7 Support
                <span className="text-base leading-6 text-light-primary-text">
                  888-777-999
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
