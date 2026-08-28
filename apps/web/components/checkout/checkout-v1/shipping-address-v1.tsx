"use client";

import { useState } from "react";
import FloatingSelect from "@/components/checkout/floating-select";

export default function ShippingAddressV1() {
  const [country, setCountry] = useState<string | number>("");
  return (
    <div className="border border-gray-300 rounded-2xl">
      <div className="py-4 px-6 bg-gray-200 rounded-t-2xl">
        <h5>Shipping Address</h5>
      </div>
      <div className="md:px-6 px-3 py-6">
        <form className="flex flex-col gap-y-6">
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-x-0 gap-y-6">
            <div className="xl:col-span-1 md:col-span-1 col-span-1">
              <div className="relative w-full">
                <input
                  type="text"
                  id="first_name"
                  className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                  placeholder="First Name"
                />
                <label
                  htmlFor="first_name"
                  className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                >
                  First Name
                </label>
              </div>
            </div>
            <div className="xl:col-span-1 md:col-span-1 col-span-1">
              <div className="relative w-full">
                <input
                  type="text"
                  id="last_name"
                  className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                  placeholder="Last Name"
                />
                <label
                  htmlFor="last_name"
                  className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                >
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-x-0 gap-y-6">
            <div className="xl:col-span-1 md:col-span-1 col-span-1">
              <div className="relative w-full">
                <input
                  type="tel"
                  id="phone_number"
                  className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                  placeholder="Phone Number"
                />
                <label
                  htmlFor="phone_number"
                  className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                >
                  Phone Number
                </label>
              </div>
            </div>
            <div className="xl:col-span-1 md:col-span-1 col-span-1">
              <div className="relative w-full">
                <input
                  type="email"
                  id="email_address"
                  className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                  placeholder="Email Address (Optional)"
                />
                <label
                  htmlFor="email_address"
                  className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                >
                  Email Address (Optional)
                </label>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 lg:grid-cols-2 grid-cols-1 md:gap-x-4 gap-x-0 gap-y-6 w-full">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6 w-full col-span-6">
              <div className="md:col-span-6 col-span-12">
                <FloatingSelect
                  id="country_region"
                  label="Country / Region"
                  value={country}
                  onChange={(v) => setCountry(v)}
                  options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "au", label: "Australia" },
                    { value: "nz", label: "New Zealand" },
                    { value: "za", label: "South Africa" },
                    { value: "in", label: "India" },
                    { value: "pk", label: "Pakistan" },
                    { value: "bd", label: "Bangladesh" },
                    { value: "lk", label: "Sri Lanka" },
                  ]}
                />
              </div>
              <div className="md:col-span-6 col-span-12">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="city"
                    className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                    placeholder="City"
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                  >
                    City
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-4 gap-y-6 w-full col-span-6">
              <div className="md:col-span-6 col-span-12">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="state"
                    className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                    placeholder="State"
                  />
                  <label
                    htmlFor="state"
                    className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                  >
                    State
                  </label>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12">
                <div className="relative w-full">
                  <input
                    type="tel"
                    id="zip_code"
                    className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                    placeholder="Zip Code"
                  />
                  <label
                    htmlFor="zip_code"
                    className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                  >
                    Zip Code
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <textarea
              id="address_comment"
              className="form-control peer input-group medium rounded-[20px] ps-4 pe-6 resize-none placeholder-transparent focus:placeholder-transparent focus:outline-none"
              rows={4}
              placeholder="Apartments, suit, unit, etc ( Optional)"
              defaultValue={""}
            />
            <label
              htmlFor="address_comment"
              className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-6 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
            >
              Apartments, suit, unit, etc ( Optional)
            </label>
          </div>
          <div className="pb-6 border-b border-b-gray-300">
            <p className="font-semibold text-light-disabled-text mb-2">
              Delivery Time
            </p>
            {/* CheckBoxs */}
            <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4">
              <label className="flex items-center cursor-pointer">
                {/* custom checkbox */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-none border-gray-300 rounded-sm bg-white checked:bg-primary transition-all"
                    />
                    {/* checkbox tick icon */}
                    <span className="absolute inset-0 inline-flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-all">
                      <i className="hgi hgi-stroke hgi-tick-02 text-[18px] leading-[18px]" />
                    </span>
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  08:00 AM - 11:00 AM
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom checkbox */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-none border-gray-300 rounded-sm bg-white checked:bg-primary transition-all"
                    />
                    {/* checkbox tick icon */}
                    <span className="absolute inset-0 inline-flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-all">
                      <i className="hgi hgi-stroke hgi-tick-02 text-[18px] leading-[18px]" />
                    </span>
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  11:00 AM - 02:00 PM
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom checkbox */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-none border-gray-300 rounded-sm bg-white checked:bg-primary transition-all"
                    />
                    {/* checkbox tick icon */}
                    <span className="absolute inset-0 inline-flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-all">
                      <i className="hgi hgi-stroke hgi-tick-02 text-[18px] leading-[18px]" />
                    </span>
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  02:00 PM - 04:00 PM
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom checkbox */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-none border-gray-300 rounded-sm bg-white checked:bg-primary transition-all"
                    />
                    {/* checkbox tick icon */}
                    <span className="absolute inset-0 inline-flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-all">
                      <i className="hgi hgi-stroke hgi-tick-02 text-[18px] leading-[18px]" />
                    </span>
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  04:00 PM - 06:00 PM
                </span>
              </label>
            </div>
          </div>
          {/* shipment type */}
          <div className="pb-6 border-b border-b-gray-300">
            <p className="font-semibold text-light-disabled-text mb-2">
              Shipment Type
            </p>
            {/* Radio */}
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-4">
              <label className="flex items-center cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="shipping-method"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  Flat Rate Shipment
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="shipping-method"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  Free Shipment
                </span>
              </label>
            </div>
          </div>
          {/* Address type */}
          <div className="pb-6 border-b border-b-gray-300">
            <p className="font-semibold text-light-disabled-text mb-2">
              Address Type
            </p>
            {/* Radio */}
            <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4">
              <label className="flex items-center cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="address-type"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  Home Address
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="address-type"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  Office Address
                </span>
              </label>
              <label className="flex items-center cursor-pointer">
                {/* custom radio */}
                <span className="has-[input:checked]:hover:bg-[#00AB55]/8 flex items-center justify-center w-10 h-10 bg-transparent rounded-full hover:bg-[#919EAB]/8 transition-colors duration-300 ease-in-out">
                  <span className="relative inline-flex w-5 h-5 items-center justify-center">
                    <input
                      type="radio"
                      name="address-type"
                      className="peer appearance-none w-full h-full border-2 focus:outline-none checked:border-primary border-gray-300 rounded-full bg-white transition-all"
                    />
                    {/* radio inner dot */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all" />
                  </span>
                </span>
                {/* label text */}
                <span className="text-light-primary-text text-sm leading-[22px] font-normal">
                  Others
                </span>
              </label>
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center md:justify-end gap-x-6">
            <button className="btn btn-default outline btn-large shadow-none md:px-[33px] w-[45%] md:w-auto py-2.5 rounded-[100px]">
              Cancel
            </button>
            <button className="btn btn-primary btn-large md:px-[41px] w-[45%] md:w-auto py-[11px] rounded-[100px]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
