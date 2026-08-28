"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIMILAR_PRODUCTS = [
  {
    id: 1,
    image: "/images/vitamin-c.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
  {
    id: 2,
    image: "/images/apple-juice.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
  {
    id: 3,
    image: "/images/ground-nuts-oil.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
  {
    id: 4,
    image: "/images/vitamin-c-2.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
  {
    id: 5,
    image: "/images/temperature-gun-2.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
  {
    id: 6,
    image: "/images/aooca.png",
    title: "Fresh Bask Basket Fruits",
    shopName: "Shop Name",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    onSale: true,
  },
];

const CART_PRODUCTS = [
  {
    id: 1,
    image: "/images/home-3/watermelon.png",
    title: "Fresh Bask Basket Fruits",
    color: "Black",
    size: "250 ML",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    quantity: 1,
  },
  {
    id: 2,
    image: "/images/home-3/avocado.png",
    title: "Fresh Bask Basket Fruits",
    color: "Black",
    size: "250 ML",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    quantity: 1,
  },
  {
    id: 3,
    image: "/images/home-3/pouch-mockup.png",
    title: "Fresh Bask Basket Fruits",
    color: "Black",
    size: "250 ML",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    quantity: 1,
    outOfStock: true,
  },
  {
    id: 4,
    image: "/images/home-3/strawberry-snacks.png",
    title: "Fresh Bask Basket Fruits",
    color: "Black",
    size: "250 ML",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    quantity: 1,
  },
  {
    id: 5,
    image: "/images/home-3/pomegranate.png",
    title: "Fresh Bask Basket Fruits",
    color: "Black",
    size: "250 ML",
    currentPrice: "$27.49",
    oldPrice: "$39.99",
    quantity: 1,
  },
];

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const pathname = usePathname();

  // Close cart drawer on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cart-drawer"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="cart-sidebar flex fixed xl:top-[30px] xl:right-[22px] right-0 top-0 xl:h-[calc(100vh-52px)] h-full z-99 max-w-[1101px] w-full bg-white xl:rounded-2xl rounded-none shadow-dark-z-24"
        >
          <div className="similar-products max-w-[500px] w-full h-full border-r border-gray-300 xl:block hidden">
            <div className="similar-products-header pt-6 px-6 pb-4 border-b border-gray-300 flex flex-col gap-y-1">
              <h5>Similar Products</h5>
              <p>You May Also Like</p>
            </div>
            <div className="similar-products-content p-6 flex flex-col gap-y-4 overflow-y-auto h-[calc(100%-100px)]">
              {SIMILAR_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="similar-product-item flex items-center gap-x-4 p-4 border border-gray-300 rounded-2xl"
                >
                  <Link
                    href="/product-details"
                    className="similar-product-item-image sm:w-[102px] sm:h-[102px] rounded-xl bg-[#F4F3F5] overflow-hidden relative"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={102}
                      height={102}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {product.onSale && (
                      <span className="product-discount-badge absolute top-[11px] left-0 bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain">
                        Sale
                      </span>
                    )}
                  </Link>
                  <div className="similar-product-item-content flex flex-col gap-y-2 flex-1">
                    <h6 className="text-base font-semibold">
                      <Link href="/product-details">{product.title}</Link>
                    </h6>
                    <p className="text-sm leading-[22px]">{product.shopName}</p>
                    <div className="flex items-center justify-between">
                      <div className="price-section flex items-center gap-x-3">
                        <span className="current-price text-base font-semibold text-light-primary-text">
                          {product.currentPrice}
                        </span>
                        <span className="old-price text-base text-light-disabled-text line-through">
                          {product.oldPrice}
                        </span>
                      </div>
                      <Link
                        href="/cart-single-vendor"
                        className="btn btn-primary btn-medium rounded-full font-semibold text-sm leading-6 px-4 py-2"
                      >
                        <span>
                          <i className="hgi hgi-stroke hgi-shopping-cart-02 text-xl text-white" />
                        </span>
                        <span>Add</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-products xl:max-w-[600px] w-full h-full flex flex-col justify-between">
            <div className="cart-products-header pt-6 px-6 pb-4 border-b border-gray-300 flex flex-col gap-y-1 relative">
              <h5>Cart Products</h5>
              <p>{CART_PRODUCTS.length} Items in Cart</p>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="close-sidebar-btn absolute top-6 right-6 cursor-pointer inline-flex items-center justify-center size-9 rounded-full bg-[rgba(145,158,171,0.08)] hover:bg-[rgba(145,158,171,0.2)] transition-colors"
              >
                <i className="hgi hgi-stroke hgi-multiplication-sign text-xl leading-5 text-light-primary-text" />
              </button>
            </div>
            <div className="cart-products-content p-6 flex flex-col gap-y-4 overflow-y-auto h-[calc(100%-250px)]">
              {CART_PRODUCTS.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="cart-products-footer p-6 border-t border-gray-300 flex flex-col gap-y-4">
              <div className="cart-subtotal flex items-center justify-between">
                <h5>Subtotal</h5>
                <h5>$27.49</h5>
              </div>
              <div className="cart-buttons flex items-center gap-x-4">
                <Link
                  href="/cart-single-vendor"
                  onClick={onClose}
                  className="btn btn-default outline btn-large rounded-[80px] flex-1 shadow-none"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="btn btn-primary btn-large rounded-[80px] flex-1"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CartItem({ product }: { product: (typeof CART_PRODUCTS)[0] }) {
  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <div className="cart-product-item flex flex-col sm:flex-row items-center sm:gap-x-4 gap-y-2 sm:gap-y-0 p-4 border border-gray-300 rounded-2xl">
      <Link
        href="/product-details"
        className="cart-product-item-image w-full sm:w-[102px] sm:h-[102px] rounded-xl bg-[#F4F3F5] overflow-hidden relative"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={102}
          height={102}
          className="w-full h-full object-cover rounded-xl"
        />
        {product.outOfStock && (
          <span className="product-discount-badge absolute top-1/2 -translate-y-1/2 left-0 bg-error text-warning-lighter font-medium text-sm leading-[22px] px-1 after:absolute after:top-0 after:left-full after:z-10 after:w-1 after:h-full after:bg-[url('/images/discount-shape.png')] after:bg-contain">
            Out of Stock
          </span>
        )}
      </Link>
      <div className="cart-product-item-content flex flex-col gap-y-2 flex-1 w-full">
        <div className="flex items-center justify-between gap-x-2">
          <h6 className="text-base font-semibold">
            <Link href="/product-details">{product.title}</Link>
          </h6>
          <div className="cart-edit-remove flex items-center gap-x-3">
            <button>
              <i className="hgi hgi-stroke hgi-edit-02 text-xl text-light-primary-text" />
            </button>
            <button>
              <i className="hgi hgi-stroke hgi-delete-01 text-xl text-light-primary-text" />
            </button>
          </div>
        </div>
        <p className="text-sm leading-[22px]">
          Color: {product.color}, Size: {product.size}
        </p>
        <div className="flex items-center justify-between">
          <div className="price-section flex items-center gap-x-3">
            <span className="current-price text-base font-semibold text-light-primary-text">
              {product.currentPrice}
            </span>
            <span className="old-price text-base text-light-disabled-text line-through">
              {product.oldPrice}
            </span>
          </div>
          <div className="border border-gray-300 inline-flex items-center justify-center rounded-[80px] max-w-[108px] py-2.5 px-4">
            <button
              className="inline-flex items-center justify-center hover:text-primary"
              onClick={() => setQuantity((q: number) => Math.max(1, q - 1))}
            >
              <i className="hgi hgi-stroke hgi-remove-circle text-2xl leading-6" />
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="border-0 w-full grow text-center focus:outline-none font-semibold"
            />
            <button
              className="inline-flex items-center justify-center hover:text-primary"
              onClick={() => setQuantity((q: number) => q + 1)}
            >
              <i className="hgi hgi-stroke hgi-add-circle text-2xl leading-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
