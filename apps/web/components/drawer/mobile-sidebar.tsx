"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  MAIN_MENU_DATA,
  type MenuItem,
  type SubMenuItem,
} from "@/components/layout/main-menu-data";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

const slideDown: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

/* ── Recursive sub-menu renderer (uses div, not ul/li, to bypass CSS hide rule) ── */
function SubMenuItems({
  items,
  currentPath,
}: {
  items: SubMenuItem[];
  currentPath: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((p) => (p === i ? null : i));

  // check if any descendant href matches current path
  const hasActiveChild = (item: SubMenuItem): boolean =>
    item.href === currentPath || (item.subItems?.some(hasActiveChild) ?? false);

  return (
    <div className="flex flex-col pt-1 pl-2 gap-y-1">
      {items.map((item, i) => {
        const active = hasActiveChild(item);
        return (
          <div key={i}>
            {item.subItems ? (
              <>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className={`flex items-center justify-between w-full text-left text-sm leading-[22px] py-1.5 ${
                    active ? "text-primary " : ""
                  }`}
                >
                  {item.label}
                  <i
                    className={`hgi hgi-stroke hgi-arrow-down-01 text-sm transition-transform duration-200 ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      key={i}
                      variants={slideDown}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: "hidden" }}
                    >
                      <SubMenuItems
                        items={item.subItems}
                        currentPath={currentPath}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.href}
                className={`block text-sm leading-[22px] py-1.5 transition-colors ${
                  currentPath === item.href
                    ? "active text-primary"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Top-level menu ── */
function MobileNav() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((p) => (p === i ? null : i));
  const currentPath = usePathname();

  // check if top-level item or any of its children matches current path
  const isItemActive = (item: MenuItem): boolean => {
    if (item.href === currentPath) return true;
    if (
      item.subItems?.some(
        (s) =>
          s.href === currentPath ||
          s.subItems?.some((c) => c.href === currentPath),
      )
    )
      return true;
    if (
      item.megaMenu?.some((section) =>
        section.items.some((i) => i.href === currentPath),
      )
    )
      return true;
    return false;
  };

  return (
    <nav className="mobile-menu">
      <ul>
        {MAIN_MENU_DATA.map((item: MenuItem, i: number) => {
          const hasChildren = !!(item.subItems || item.megaMenu);
          const isOpen = openIdx === i;

          // Flatten megaMenu sections into SubMenuItem[] for mobile
          const children: SubMenuItem[] | undefined = item.megaMenu
            ? item.megaMenu.map((section) => ({
                label: section.title,
                href: "#",
                subItems: section.items,
              }))
            : item.subItems;

          return (
            <li key={i} className={hasChildren ? "has-sub-item" : ""}>
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className={`flex items-center justify-between w-full text-left ${
                      isItemActive(item) ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                    <i
                      className={`hgi hgi-stroke hgi-arrow-down-01 text-sm transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && children && (
                      <motion.div
                        key={i}
                        variants={slideDown}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{ overflow: "hidden" }}
                      >
                        <SubMenuItems
                          items={children}
                          currentPath={currentPath}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href
                      ? "active text-primary font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ── Main sidebar drawer ── */
export default function MobileSidebar({
  isOpen,
  onClose,
  onOpenLogin,
  onOpenRegister,
}: MobileSidebarProps) {
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-sidebar"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-[350px] bg-white h-full z-91 px-4 py-6 flex flex-col gap-y-6 overflow-y-auto shadow-dark-z-24"
          id="sidebar"
        >
          {/* Header */}
          <div className="relative pb-6 border-b border-gray-300">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={30}
              className="w-[100px]"
            />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="size-7 inline-flex items-center justify-center absolute top-0 right-0 rounded-full bg-[rgba(145,158,171,0.08)] hover:bg-[rgba(145,158,171,0.2)] transition-colors"
            >
              <i className="hgi hgi-stroke hgi-multiplication-sign text-xl leading-5" />
            </button>
          </div>

          {/* Navigation — from MAIN_MENU_DATA */}
          <MobileNav />

          {/* Auth / Phone */}
          <div className="border border-gray-300 p-5 rounded-2xl">
            <div className="flex flex-col gap-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenLogin?.();
                }}
                className="flex items-center gap-x-2 text-left w-full"
              >
                <span className="inline-flex items-center justify-center bg-warning size-8 rounded-full">
                  <i className="hgi hgi-stroke hgi-lock-sync-01 text-base text-light-primary-text" />
                </span>
                Log in / Sign Up
              </button>
              <Link href="tel:888777999" className="flex items-center gap-x-2">
                <span className="inline-flex items-center justify-center bg-warning size-8 rounded-full">
                  <i className="hgi hgi-stroke hgi-call text-base text-light-primary-text" />
                </span>
                888-777-999
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3">Follow us</h4>
            <ul className="flex items-center gap-x-4">
              {[
                { icon: "hgi-facebook-01", label: "Facebook" },
                { icon: "hgi-linkedin-01", label: "LinkedIn" },
                { icon: "hgi-instagram", label: "Instagram" },
                { icon: "hgi-twitter", label: "Twitter" },
              ].map((s) => (
                <li key={s.icon}>
                  <Link
                    href="#"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center"
                  >
                    <span className="size-8 bg-primary-dark inline-flex items-center justify-center rounded-full">
                      <i
                        className={`hgi hgi-stroke ${s.icon} text-base text-white`}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
