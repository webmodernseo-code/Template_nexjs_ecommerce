import React from "react";

export type SubMenuItem = {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
};

export type MegaMenuSection = {
  title: string;
  items: SubMenuItem[];
};

export type MenuItem = {
  label: string;
  href: string;
  isActive?: boolean;
  subItems?: SubMenuItem[];
  megaMenu?: MegaMenuSection[];
};

export const MAIN_MENU_DATA: MenuItem[] = [
  {
    label: "Home",
    href: "#",
    isActive: true,
    subItems: [
      { label: "Healthcare", href: "/" },
      { label: "Beauty", href: "/index-2" },
      { label: "Grocery", href: "/index-3" },
      { label: "Fashion", href: "/index-4" },
      { label: "Electronics", href: "/index-5" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Shop",
    href: "#",
    subItems: [
      {
        label: "Product Details",
        href: "#",
        subItems: [
          { label: "Product Details Version 1", href: "/product-details" },
          { label: "Product Details Version 2", href: "/product-details-2" },
          { label: "Product Details Version 3", href: "/product-details-3" },
          { label: "Product Details Version 4", href: "/product-details-4" },
          { label: "Product Details Version 5", href: "/product-details-5" },
          { label: "Product Details Version 6", href: "/product-details-6" },
        ],
      },
      {
        label: "Shop - Wishlist",
        href: "#",
        subItems: [
          { label: "Shop - Wishlist", href: "/wishlist-style-v1" },
          {
            label: "Shop - Wishlist Version 2",
            href: "/wishlist-style-v2",
          },
        ],
      },
      {
        label: "Shop - Cart",
        href: "#",
        subItems: [
          { label: "Shop - Cart", href: "/cart-single-vendor" },
          { label: "Shop - Cart Multi Vendor", href: "/cart-multi-vendor" },
        ],
      },
      {
        label: "Shop - Checkout",
        href: "#",
        subItems: [
          { label: "Shop - Checkout Version 1", href: "/checkout" },
          { label: "Shop - Checkout Version 2", href: "/checkout-v2" },
        ],
      },
      { label: "Shop - Order Success", href: "/order-successful" },
      { label: "Shop - Compare", href: "/compare" },
    ],
  },
  {
    label: "Sellers",
    href: "#",
    subItems: [
      { label: "Seller Grid", href: "/vendors-grid" },
      { label: "Seller List", href: "/vendors-list" },
      {
        label: "Seller Market Place v1",
        href: "/vendor-left-sidebar-marketplace",
      },
      { label: "Seller Market Place v2", href: "/vendor-left-top-marketplace" },
      { label: "Seller Account", href: "/vendor-account" },
      { label: "Seller Dashboard", href: "/vendor-dashboard" },
    ],
  },
  {
    label: "Mega Menu",
    href: "#",
    megaMenu: [
      {
        title: "SHOP GRID",
        items: [
          { label: "3 Columns (Left Filter)", href: "/shop-left-sidebar-3col" },
          { label: "4 Columns (Left Filter)", href: "/shop-left-sidebar-4col" },
          { label: "5 Columns (Left Filter)", href: "/shop-left-sidebar-5col" },
        ],
      },
      {
        title: "GRID WITH BANNER",
        items: [
          {
            label: "3 Columns (Left Filter)",
            href: "/banner-left-sidebar-3col",
          },
          {
            label: "4 Columns (Left Filter)",
            href: "/banner-left-sidebar-4col",
          },
          {
            label: "5 Columns (Left Filter)",
            href: "/banner-left-sidebar-5col",
          },
        ],
      },
      {
        title: "FULL WIDTH LAYOUT",
        items: [
          { label: "Grid - 3 Columns (Banner)", href: "/full-banner-3col" },
          { label: "Grid - 4 Columns (Banner)", href: "/full-banner-4col" },
          { label: "Grid - 5 Columns (Banner)", href: "/full-banner-5col" },
          { label: "Grid - 6 Columns (Banner)", href: "/full-banner-6col" },
        ],
      },
      {
        title: "Horizontal filter",
        items: [
          {
            label: "Grid - 3 Columns (Banner)",
            href: "/banner-with-horizontal-filter-3col",
          },
          {
            label: "Grid - 4 Columns (Banner)",
            href: "/banner-with-horizontal-filter-4col",
          },
          {
            label: "Grid - 5 Columns (Banner)",
            href: "/banner-with-horizontal-filter-5col",
          },
          {
            label: "Grid - 6 Columns (Banner)",
            href: "/banner-with-horizontal-filter-6col",
          },
        ],
      },
      {
        title: "Top Banner",
        items: [
          {
            label: "Grid - 3 Columns (Left Filter)",
            href: "/top-banner-left-sidebar-3col",
          },
          {
            label: "Grid - 4 Columns (Left Filter)",
            href: "/top-banner-left-sidebar-4col",
          },
          {
            label: "Grid - 5 Columns (Left Filter)",
            href: "/top-banner-left-sidebar-5col",
          },
          {
            label: "List - 1 Column (Left Filter)",
            href: "/banner-list-with-sidebar",
          },
          {
            label: "List - 2 Columns (Left Filter)",
            href: "/banner-list-without-sidebar-2col",
          },
        ],
      },
      {
        title: "Banner with filter",
        items: [
          {
            label: "Grid - 3 Columns (Banner)",
            href: "/banner-category-filter-3col",
          },
          {
            label: "Grid - 4 Columns (Banner)",
            href: "/banner-category-filter-4col",
          },
          {
            label: "Grid - 5 Columns (Banner)",
            href: "/banner-category-filter-5col",
          },
          {
            label: "Grid - 6 Columns (Banner)",
            href: "/banner-category-filter-6col",
          },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "#",
    subItems: [
      { label: "Blog Grid", href: "/blog-grid" },
      { label: "Blog List", href: "/blog-list" },
      { label: "Blog Details", href: "/blog-grid/2" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    subItems: [
      { label: "404 Page", href: "/404" },
      { label: "Coming Soon Page", href: "/coming-soon" },
      { label: "FAQ", href: "/faq" },
      { label: "My Account", href: "/my-account" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
