"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/common/star-rating";

const CART_ITEMS = [
  {
    id: 1,
    image: "/images/ground-nuts-oil.png",
    name: "Morning Brew Instant Coffee",
    attributes: "Color: Black, Size:250 ML",
    available: 2,
    ratingWidth: "80%",
    reviews: 118,
    currentPrice: "$27.49",
    oldPrice: "$29.95",
    quantity: 1,
    totalPrice: "$27.49",
  },
  {
    id: 2,
    image: "/images/baked-beans.png",
    name: "Morning Brew Instant Coffee",
    attributes: "Color: Black, Size:250 ML",
    available: 2,
    ratingWidth: "80%",
    reviews: 118,
    currentPrice: "$27.49",
    oldPrice: "$29.95",
    quantity: 1,
    totalPrice: "$27.49",
  },
  {
    id: 3,
    image: "/images/temperature-gun-2.png",
    name: "Morning Brew Instant Coffee",
    attributes: "Color: Black, Size:250 ML",
    available: 2,
    ratingWidth: "80%",
    reviews: 118,
    currentPrice: "$27.49",
    oldPrice: "$29.95",
    quantity: 1,
    totalPrice: "$27.49",
  },
  {
    id: 4,
    image: "/images/apple-juice.png",
    name: "Morning Brew Instant Coffee",
    attributes: "Color: Black, Size:250 ML",
    available: 2,
    ratingWidth: "80%",
    reviews: 118,
    currentPrice: "$27.49",
    oldPrice: "$29.95",
    quantity: 1,
    totalPrice: "$27.49",
  },
];

export default function CartOneTable() {
  return (
    <div className="wishlist-table-wrapper border-gray-300 rounded-2xl border overflow-x-auto">
      <table className="w-full wishlist-table">
        <thead className="bg-gray-200">
          <tr>
            <th className="product text-left font-semibold pl-4">
              <p className="product-name">Product</p>
            </th>
            <th className="product-price text-left py-2.5 font-semibold">
              Price
            </th>
            <th className="product-quantity text-left py-2.5 font-semibold">
              Quantity
            </th>
            <th className="product-total-price text-left py-2.5 font-semibold">
              Total Price
            </th>
            <th className="product-actions text-center py-2.5 font-semibold pr-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {CART_ITEMS.map((item) => (
            <CartRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CartRow({ item }: { item: (typeof CART_ITEMS)[0] }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <tr className="py-4 border-b border-gray-300 last:border-b-0">
      <td data-title="Product " className="py-4 px-3 lg:px-4 product">
        <div className="flex items-end md:items-start gap-x-4 flex-col md:flex-row gap-y-4">
          <div className="product-thumbnail max-w-[120px] h-[120px] rounded-2xl bg-[#F4F3F5]">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-end md:items-start text-left">
            <Link
              href="/product-details"
              className="product-name text-light-primary-text font-semibold truncate hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
            <p className="text-sm leading-[22px] font-normal text-light-secondary-text inline-flex items-center gap-x-2.5">
              {item.attributes}
              <Link href="#" className="inline-flex items-center justify-center">
                <i className="hgi hgi-stroke hgi-edit-02 text-base leading-4" />
              </Link>
            </p>
            <p className="text-sm leading-[22px] font-normal text-light-secondary-text inline-flex items-center gap-x-2.5">
              Available: {item.available}
            </p>
            <div className="rating-section flex items-center">
              <StarRating ratingPercentage={item.ratingWidth} />
              <span className="text-sm leading-[22px] font-normal inline-block ml-1">
                ({item.reviews})
              </span>
            </div>
          </div>
        </div>
      </td>
      <td
        data-title="Price "
        className="capitalize py-4 px-3 lg:px-0 product-price"
      >
        <div className="flex items-center gap-x-3 justify-end lg:justify-start">
          <span className="text-light-primary-text font-semibold">
            {item.currentPrice}
          </span>
          <span className="line-through text-light-disabled-text font-normal">
            {item.oldPrice}
          </span>
        </div>
      </td>
      <td
        data-title="Quantity "
        className="capitalize py-4 px-3 lg:px-0 product-quantity"
      >
        <div className="border border-gray-300 inline-flex items-center justify-center rounded-[80px] max-w-[108px] py-2.5 px-4 ml-auto lg:ml-0">
          <button
            className="inline-flex items-center justify-center hover:text-primary"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <i className="hgi hgi-stroke hgi-remove-circle text-xl leading-6" />
          </button>
          <input
            type="text"
            readOnly
            value={quantity}
            className="border-0 w-full grow text-center focus:outline-none font-semibold text-light-primary-text bg-transparent"
          />
          <button
            className="inline-flex items-center justify-center hover:text-primary"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <i className="hgi hgi-stroke hgi-add-circle text-xl leading-6" />
          </button>
        </div>
      </td>
      <td
        data-title="Total Price "
        className="capitalize py-4 px-3 lg:px-0 product-total-price"
      >
        <p className="font-semibold text-light-primary-text text-right lg:text-left">
          {item.totalPrice}
        </p>
      </td>
      <td
        data-title="Action "
        className="capitalize py-4 px-3 lg:px-4 product-actions"
      >
        <div className="flex items-center justify-end lg:justify-center gap-x-2 md:gap-x-6">
          <button className="inline-flex items-center justify-center product-add-to-favourite">
            <i className="hgi hgi-stroke hgi-favourite text-2xl leading-6 text-light-primary-text" />
          </button>
          <button className="inline-flex items-center justify-center product-remove">
            <i className="hgi hgi-stroke hgi-delete-01 text-2xl leading-6 text-light-primary-text" />
          </button>
        </div>
      </td>
    </tr>
  );
}
