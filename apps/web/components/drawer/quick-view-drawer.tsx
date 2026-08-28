"use client";

import { useQuickView } from "@/context/quick-view-context";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import QuickViewAccordion from "@/components/drawer/quick-view-accordion";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";

interface QuickViewDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function QuickViewDrawer({ isOpen: propIsOpen, onClose: propOnClose }: QuickViewDrawerProps) {
  const { isOpen: contextIsOpen, selectedProduct, closeQuickView } = useQuickView();
  const isOpen = propIsOpen !== undefined ? propIsOpen : contextIsOpen;
  const handleClose = propOnClose || closeQuickView;
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("green");
  const [selectedSize, setSelectedSize] = useState("S");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Reset state when drawer opens with a new product
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelectedColor("green");
      setSelectedSize("S");
    }
  }, [isOpen, selectedProduct]);

  // Outside click close
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  const colors = [
    {
      id: "green",
      name: "Green",
      code: "#088178",
      image: "/images/product-details/color-selector-1.png",
    },
    {
      id: "blue",
      name: "Blue",
      code: "#3366FF",
      image: "/images/product-details/color-selector-2.png",
    },
    {
      id: "yellow",
      name: "Yellow",
      code: "#FFC107",
      image: "/images/product-details/color-selector-3.png",
    },
    {
      id: "red",
      name: "Red",
      code: "#CB0233",
      image: "/images/product-details/color-selector-4.png",
    },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-99"
          />

          {/* Drawer */}
          <motion.div
            key="quick-view-drawer"
            ref={drawerRef}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.645, 0.045, 0.355, 1] }}
            className="quick-view-sidebar fixed xl:top-[30px] xl:right-[22px] right-0 top-0 xl:h-[calc(100vh-52px)] h-full z-99 max-w-[950px] w-full bg-white xl:rounded-2xl rounded-none shadow-dark-z-24 overflow-hidden"
          >
            {/* Header */}
            <div className="quick-view-sidebar-header px-6 py-[15px] border-b border-gray-300 relative flex items-center justify-between">
              <h5 className="font-urbanist font-bold">Quick View</h5>
              <button
                onClick={handleClose}
                className="close-sidebar-btn cursor-pointer inline-flex items-center justify-center size-9 rounded-full bg-[rgba(145,158,171,0.08)] hover:bg-[rgba(145,158,171,0.2)] transition-colors"
              >
                <i className="hgi hgi-stroke hgi-multiplication-sign text-xl leading-5 text-light-primary-text" />
              </button>
            </div>

            {/* Content */}
            <div className="quick-view-sidebar-content lg:flex lg:flex-row p-6 gap-x-6 gap-y-6 lg:gap-y-0 w-full lg:h-[calc(100%-60px)] h-[calc(100%-60px)] overflow-y-auto custom-scrollbar">
              {/* Product Images */}
              <div className="product-images-wrapper lg:max-w-[350px] w-full lg:flex-none lg:overflow-y-auto h-auto mb-6 lg:mb-0">
                <div className="space-y-4">
                  {selectedProduct?.image ? (
                    <Image
                      className="max-h-[300px] w-full rounded-xl object-cover"
                      src={selectedProduct.image}
                      alt={selectedProduct?.title || "Product"}
                      width={400}
                      height={300}
                    />
                  ) : null}
                  <Image
                    className="max-h-[300px] w-full rounded-xl object-cover"
                    src="/images/product-details/product-details-18.png"
                    alt="product-image"
                    width={400}
                    height={300}
                  />
                  <Image
                    className="max-h-[300px] w-full rounded-xl object-cover"
                    src="/images/product-details/product-details-16.png"
                    alt="product-image"
                    width={400}
                    height={300}
                  />
                  <Image
                    className="max-h-[300px] w-full rounded-xl object-cover"
                    src="/images/product-details/product-details-17.png"
                    alt="product-image"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="product-details-wrapper w-full lg:flex-1 lg:overflow-y-auto h-auto pr-4 @container/quick-view-product-details">
                <span className="product-discount-badge inline-block mb-4 uppercase relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat">
                  Sales
                </span>
                <p className="uppercase text-info text-xs leading-[18px] font-bold new-arrival-badge mb-4">
                  New Arrival
                </p>
                <h4 className="line-clamp-2 mb-4 font-urbanist font-bold">
                  {selectedProduct?.title || "Product Title"}
                </h4>

                <div className="rating-section flex items-center mb-4">
                  <StarRating ratingPercentage={"80%"} />
                  <span className="font-normal inline-block ml-1 text-sm">
                    (11.78k reviews)
                  </span>
                </div>

                <div className="price-section flex items-center gap-x-3 mb-6">
                  <span className="current-price text-2xl leading-9 font-bold text-light-primary-text relative after:absolute after:h-6 after:w-px after:bg-gray-300 after:right-0 after:top-1/2 after:-translate-y-1/2 pr-3 inline-block">
                    {selectedProduct?.currentPrice || selectedProduct?.price || "$0.00"}
                  </span>
                  {selectedProduct?.oldPrice && (
                    <span className="old-price text-2xl leading-9 font-normal text-light-disabled-text line-through">
                      {selectedProduct.oldPrice}
                    </span>
                  )}
                  <span className="product-discount-badge uppercase relative bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain after:bg-no-repeat ml-2">
                    15% OFF
                  </span>
                </div>

                <div className="product-add-to-cart-section py-6 border-b border-dashed border-gray-300 border-t">
                  {/* Color Variation */}
                  <div className="color-variation-section mb-6">
                    <div className="color-variation-section-title mb-4">
                      <p className="font-semibold text-light-primary-text flex items-center gap-x-2.5">
                        Color:
                        <span className="text-light-primary-text font-normal capitalize">
                          {colors.find((c) => c.id === selectedColor)?.name}
                        </span>
                      </p>
                    </div>
                    <div className="color-variation-items flex items-center gap-x-2">
                      {colors.map((color) => (
                        <div key={color.id} className="color-variation-item">
                          <button
                            onClick={() => setSelectedColor(color.id)}
                            className={cn(
                              "cursor-pointer flex items-center justify-center rounded-full size-10 border transition-all",
                              selectedColor === color.id
                                ? "border-primary"
                                : "border-gray-300 hover:bg-[rgba(145,158,171,0.08)]",
                            )}
                          >
                            <Image
                              src={color.image}
                              alt={color.name}
                              width={20}
                              height={20}
                              className="size-5"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Size Variation */}
                  <div className="size-variation-section mb-6">
                    <div className="size-variation-section-title mb-4 flex items-center justify-between">
                      <p className="font-semibold text-light-primary-text flex items-center gap-x-2.5">
                        Size:
                        <span className="text-light-primary-text font-normal capitalize">
                          {selectedSize}
                        </span>
                      </p>
                    </div>
                    <div className="size-variation-items flex items-center gap-2 flex-wrap">
                      {sizes.map((size) => (
                        <div key={size} className="size-variation-item">
                          <button
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                              "cursor-pointer flex items-center justify-center text-sm leading-6 px-6 py-1.5 font-semibold border rounded-[100px] transition-all min-w-[70px]",
                              selectedSize === size
                                ? "border-primary bg-primary text-white"
                                : "border-gray-300 text-light-primary-text hover:bg-[rgba(145,158,171,0.08)]",
                            )}
                          >
                            {size}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity and Buttons */}
                  <div className="product-add-to-cart-btn-section">
                    <p className="font-semibold text-light-primary-text mb-4">
                      Quantity:
                    </p>
                    <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                      <div className="quantity-section flex-1 max-w-[126px] border border-gray-300 rounded-[80px] px-4 py-[11px] flex items-center justify-between">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="quantity-btn inline-flex items-center justify-center hover:text-primary transition-colors"
                        >
                          <i className="hgi hgi-stroke hgi-minus-sign text-xl leading-5" />
                        </button>
                        <input
                          type="text"
                          className="quantity-input text-center w-full focus:outline-none font-semibold text-base leading-6 text-light-primary-text bg-transparent"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value) || 1)
                          }
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="quantity-btn inline-flex items-center justify-center hover:text-primary transition-colors"
                        >
                          <i className="hgi hgi-stroke hgi-plus-sign text-xl leading-5" />
                        </button>
                      </div>
                      <div className="flex-1">
                        <Link
                          href="/shop-left-sidebar"
                          className="btn btn-warning btn-large rounded-[80px] w-full"
                        >
                          Buy Now
                        </Link>
                      </div>
                      <div className="flex-1">
                        <button className="btn btn-primary btn-large rounded-[80px] w-full">
                          <i className="hgi hgi-stroke hgi-shopping-cart-add-02 text-2xl leading-6 text-white" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra Info */}
                <div className="product-extra-info-section flex flex-col gap-y-4 my-6">
                  <div className="product-extra-info-item flex items-center gap-x-4 gap-y-2 flex-wrap">
                    <p className="font-semibold text-light-primary-text">
                      Free Shipping:
                    </p>
                    <p className="text-light-secondary-text">
                      Estimated Delivery Time 5-7 Days
                    </p>
                  </div>
                  <div className="product-extra-info-item flex items-center gap-x-4 gap-y-2 flex-wrap">
                    <p className="font-semibold text-light-primary-text">
                      SKU:
                    </p>
                    <p className="text-light-secondary-text">SKU-001</p>
                  </div>
                  <div className="product-extra-info-item flex items-center gap-x-4 gap-y-2 flex-wrap">
                    <p className="font-semibold text-light-primary-text">
                      Categories:
                    </p>
                    <p className="text-light-secondary-text">
                      Electronics, Computers, Accessories
                    </p>
                  </div>
                </div>

                {/* Accordion */}
                <QuickViewAccordion />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
