"use client";

import { useState } from "react";
import Link from "next/link";
import SearchDropdown from "./search-dropdown";
import Image from "next/image";

interface HeaderSearchProps {
  onOpenCart: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenForgotPassword: () => void;
  onOpenSetPassword: () => void;
  onOpenOtp: () => void;
}

export default function HeaderSearch({
  onOpenCart,
  onOpenLogin,
  onOpenRegister,
  onOpenForgotPassword,
  onOpenSetPassword,
  onOpenOtp,
}: HeaderSearchProps) {
  return (
    <div className="py-4 border border-gray-300 xl:border-0 hidden xl:block header-middle">
      <div className="container">
        {/* For Desktop Screen Start */}
        <div className="xl:flex items-center hidden">
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={155} height={42} priority />
            </Link>
          </div>
          <div className="flex items-center w-full justify-end gap-x-[54px]">
            <SearchDropdown 
              id="desktop-search" 
              className="2xl:max-w-[800px] xl:max-w-[600px]" 
            />
            <div className="flex items-center gap-x-6 shrink-0">
              <ul className="flex items-center gap-x-6">
                <li className="flex items-center gap-x-4 cursor-pointer relative group">
                  <p className="flex items-center">
                    <span className="inline-flex items-center justify-center bg-warning w-12 h-12 rounded-full">
                      <i className="hgi hgi-stroke hgi-lock-sync-01 text-2xl text-light-primary-text" />
                    </span>
                  </p>
                  <p className="flex flex-col text-light-secondary-text text-sm leading-[22px]">
                    Account
                    <span className="text-base leading-6 text-light-primary-text">
                      log in
                    </span>
                  </p>
                  <span>
                    <i className="hgi hgi-stroke hgi-arrow-down-01 text-2xl text-light-primary-text" />
                  </span>
                  <ul className="absolute right-0 top-full py-2 z-10 w-[250px] max-w-[250px] bg-white rounded-lg shadow-dark-z-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <li className="px-4 group/item">
                      <button
                        type="button"
                        onClick={onOpenLogin}
                        className="login-page-btn flex items-center py-2 gap-x-2 w-full text-left text-light-primary-text group-hover/item:text-primary"
                      >
                        <span className="w-8 h-8 bg-[#F0F0F0] group-hover/item:bg-[rgba(0,171,85,0.08)] inline-flex items-center justify-center rounded-full">
                          <i className="hgi hgi-stroke hgi-lock-sync-01 text-base text-light-primary-text group-hover/item:text-primary" />
                        </span>
                        Login
                      </button>
                    </li>
                    <li className="px-4 group/item">
                      <button
                        type="button"
                        onClick={onOpenRegister}
                        className="register-page-btn flex items-center py-2 gap-x-2 w-full text-left text-light-primary-text group-hover/item:text-primary"
                      >
                        <span className="w-8 h-8 bg-[#F0F0F0] group-hover/item:bg-[rgba(0,171,85,0.08)] inline-flex items-center justify-center rounded-full">
                          <i className="hgi hgi-stroke hgi-id text-base text-light-primary-text group-hover/item:text-primary" />
                        </span>
                        Register
                      </button>
                    </li>
                    <li className="px-4 group/item">
                      <button
                        type="button"
                        onClick={onOpenForgotPassword}
                        className="forgot-password-page-btn flex items-center py-2 gap-x-2 w-full text-left text-light-primary-text group-hover/item:text-primary"
                      >
                        <span className="w-8 h-8 bg-[#F0F0F0] group-hover/item:bg-[rgba(0,171,85,0.08)] transition-colors duration-300 inline-flex items-center justify-center rounded-full">
                          <i className="hgi hgi-stroke hgi-access text-base text-light-primary-text group-hover/item:text-primary" />
                        </span>
                        Forget Password
                      </button>
                    </li>
                    <li className="px-4 group/item">
                      <button
                        type="button"
                        onClick={onOpenSetPassword}
                        className="reset-password-page-btn flex items-center py-2 gap-x-2 w-full text-left text-light-primary-text group-hover/item:text-primary"
                      >
                        <span className="w-8 h-8 bg-[#F0F0F0] group-hover/item:bg-[rgba(0,171,85,0.08)] transition-colors duration-300 inline-flex items-center justify-center rounded-full">
                          <i className="hgi hgi-stroke hgi-password-validation text-base text-light-primary-text group-hover/item:text-primary" />
                        </span>
                        Set Password
                      </button>
                    </li>
                    <li className="px-4 group/item">
                      <button
                        type="button"
                        onClick={onOpenOtp}
                        className="otp-verification-page-btn flex items-center py-2 gap-x-2 w-full text-left text-light-primary-text group-hover/item:text-primary"
                      >
                        <span className="w-8 h-8 bg-[#F0F0F0] group-hover/item:bg-[rgba(0,171,85,0.08)] transition-colors duration-300 inline-flex items-center justify-center rounded-full">
                          <i className="hgi hgi-stroke hgi-mobile-protection text-base text-light-primary-text group-hover/item:text-primary" />
                        </span>
                        OTP Verification
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center">
                  {/* Cart Drawer Button */}
                  <button
                    onClick={onOpenCart}
                    className="flex items-center gap-x-4 cursor-pointer cart-sidebar-btn"
                    aria-label="Open cart"
                  >
                    <span className="inline-flex items-center justify-center bg-warning w-12 h-12 rounded-full">
                      <i className="hgi hgi-stroke hgi-shopping-cart-02 text-2xl text-light-primary-text" />
                    </span>
                    <span className="flex flex-col items-start text-sm leading-[22px] text-light-secondary-text">
                      Cart
                      <span className="text-base leading-6 text-light-primary-text">
                        0- Items
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* FOr Desktop Screen End */}
      </div>
    </div>
  );
}
