import CheckoutCartSummary1 from "./checkout-cart-summary-1";
import PaymentMethodV1 from "./payment-method-v1";
import ShippingAddressV1 from "./shipping-address-v1";

export default function CheckoutV1Page() {
  return (
    <div className="pb-[70px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {/* Account and payment part */}
          <div className="xl:col-span-8 col-span-12">
            <div className="flex flex-col gap-y-6">
              {/* Account */}
              <div className="border border-gray-300 rounded-2xl">
                <div className="py-4 px-6 bg-gray-200 rounded-t-2xl">
                  <h5>Already have an account ?</h5>
                </div>
                {/* create account-form */}
                <div className="md:px-6 px-3 py-6">
                  <form className="flex items-center md:flex-row flex-col gap-x-4 gap-y-4">
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="user_name"
                        className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                        placeholder="User Name"
                      />
                      <label
                        htmlFor="user_name"
                        className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                      >
                        User Name
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="password"
                        id="password"
                        className="peer form-control input-group medium rounded-[80px] px-3.5 placeholder-transparent focus:placeholder-transparent focus:outline-none"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-[14px] top-1/2 -translate-y-1/2 text-xs leading-[18px] transition-all peer-placeholder-shown:text-light-disabled-text peer-focus:text-light-disabled-text peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-1/2 peer-focus:text-[12px] peer-focus:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:top-0 bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:px-1"
                      >
                        Password
                      </label>
                    </div>
                  </form>
                  <div className="flex items-center md:justify-between justify-start mt-6 flex-col md:flex-row gap-y-4">
                    <p className="inline-flex items-center gap-x-2.5 font-semibold text-base leading-[26px]">
                      Don't have an account?
                      <a href="#" className="text-primary">
                        Create Account
                      </a>
                    </p>
                    <button className="btn btn-primary btn-large md:px-10 w-full md:w-auto py-[11px] rounded-[100px]">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              {/* Shipping Address */}
              <ShippingAddressV1 />
              {/* Payment */}
              <PaymentMethodV1 />
            </div>
          </div>
          {/* Cart items part */}
          <div className="xl:col-span-4 col-span-12">
            <CheckoutCartSummary1 />
          </div>
        </div>
      </div>
    </div>
  );
}
