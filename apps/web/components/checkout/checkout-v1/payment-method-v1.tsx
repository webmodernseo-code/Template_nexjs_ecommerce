"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PaymentMethodV1() {
  const [selectedMethod, setSelectedMethod] = useState<string>("bank-transfer");

  return (
    <div className="border border-gray-300 rounded-2xl">
      <div className="py-4 px-6 bg-gray-200 rounded-t-2xl">
        <h5 className="text-light-primary-text">Payment</h5>
      </div>
      {/* create account-form */}
      <div className="md:px-6 px-3 py-6">
        <div className="payment-methods flex flex-col gap-y-6">
          {/* Bank Transfer */}
          <div
            className={`border border-gray-300 w-full payment-method px-3 py-4 transition-colors duration-300 ${selectedMethod === "bank-transfer" ? "selected" : ""}`}
          >
            <div>
              <label className="flex items-center gap-x-2 cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-9 h-9 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="bank-transfer"
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      checked={selectedMethod === "bank-transfer"}
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all cursor-pointer"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all pointer-events-none" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text ">Bank Transfer</span>
              </label>
            </div>
            <AnimatePresence initial={false}>
              {selectedMethod === "bank-transfer" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="payment-content block! pt-4  text-sm text-light-secondary-text">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cash on Delivery */}
          <div
            className={`border border-gray-300 w-full payment-method px-3 py-4 transition-colors duration-300 ${selectedMethod === "cash-on-delivery" ? "selected" : ""}`}
          >
            <div>
              <label className="flex items-center gap-x-2 cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-9 h-9 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="cash-on-delivery"
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      checked={selectedMethod === "cash-on-delivery"}
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all cursor-pointer"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all pointer-events-none" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text ">
                  Cash on Delivery
                </span>
              </label>
            </div>
            <AnimatePresence initial={false}>
              {selectedMethod === "cash-on-delivery" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="payment-content block! pt-4 text-sm text-light-secondary-text">
                    Pay with cash upon delivery.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Check Payment */}
          <div
            className={`border border-gray-300 w-full payment-method px-3 py-4 transition-colors duration-300 ${selectedMethod === "check-payment" ? "selected" : ""}`}
          >
            <div>
              <label className="flex items-center gap-x-2 cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-9 h-9 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="check-payment"
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      checked={selectedMethod === "check-payment"}
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all cursor-pointer"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all pointer-events-none" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text ">Check Payment</span>
              </label>
            </div>
            <AnimatePresence initial={false}>
              {selectedMethod === "check-payment" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="payment-content block! pt-4 text-sm text-light-secondary-text">
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Credit Card */}
          <div
            className={`border border-gray-300 w-full payment-method px-3 py-4 transition-colors duration-300 ${selectedMethod === "credit-card" ? "selected" : ""}`}
          >
            <div className="flex items-center">
              <label className="flex items-center gap-x-2 cursor-pointer w-full">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-9 h-9 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="credit-card"
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      checked={selectedMethod === "credit-card"}
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all cursor-pointer"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all pointer-events-none" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text ">Credit Card</span>
              </label>
              <Image
                src="/images/visa-logo.png"
                alt="visa-logo"
                width={50}
                height={16}
                className="h-4 w-auto"
              />
            </div>
            <AnimatePresence initial={false}>
              {selectedMethod === "credit-card" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="payment-content block! pt-4 pl-2">
                    <div className="flex flex-col gap-y-6">
                      <div>
                        <div className="relative w-full">
                          <input
                            id="card_number"
                            type="number"
                            className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="Card Number"
                          />
                          <label
                            htmlFor="card_number"
                            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-white peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                          >
                            Card Number
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center flex-col md:flex-row gap-y-4 md:gap-x-4">
                        <div className="relative w-full">
                          <input
                            id="expire_date"
                            type="text"
                            className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                            placeholder="Expiration Date (MM/YY)"
                          />
                          <label
                            htmlFor="expire_date"
                            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-white peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                          >
                            Expiration Date (MM/YY)
                          </label>
                        </div>
                        <div className="relative w-full">
                          <input
                            id="security_code"
                            type="number"
                            className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            placeholder="Security Code"
                          />
                          <label
                            htmlFor="security_code"
                            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-white peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                          >
                            Security Code
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="relative w-full">
                          <input
                            id="card_on_name"
                            type="text"
                            className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                            placeholder="Card on Name"
                          />
                          <label
                            htmlFor="card_on_name"
                            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-white peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                          >
                            Card on Name
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="inline-flex items-center gap-x-2 cursor-pointer">
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              id="save_card"
                              className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-primary checked:border-none transition-all cursor-pointer"
                            />
                            <i className="hgi hgi-stroke hgi-tick-02 absolute pointer-events-none text-white opacity-0 peer-checked:opacity-100 text-sm" />
                          </div>
                          <span className="text-sm text-light-primary-text">
                            Save Credit Details
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
