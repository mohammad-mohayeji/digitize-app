import React, { useContext, useEffect } from "react";
import MobileHeader from "../components/MobileHeader";
import MobileBottomNav from "../components/MobileBottomNav";

// import our global context
import { GlobalContext } from "../GlobalContextProvider";
import CartItemCard from "../components/CartItemCard";
import useConvertNumbersToPersian from "../useConvertNumbersToPersian";

export default function Cart() {
  const { cartItems } = useContext(GlobalContext);
  const totalPrice = cartItems
    .reduce((price, item) => price + item.price * item.quantity, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useConvertNumbersToPersian();

  return (
    <>
      <MobileHeader title="سبد خرید" />
      {cartItems.length ? (
        <div className="flex flex-wrap lg:flex-nowrap md:px-4 md:gap-x-4 container xl:max-w-screen-xl mx-auto md:mt-7 mb-10 pb-10">
          {/* cart items */}
          <div className="flex flex-col flex-auto gap-y-2 px-4 md:p-0 w-full mb-7 lg:mb-0">
            {cartItems.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* cart summary */}
          <div className="w-full lg:w-1/3 px-4 md:p-0">
            <div className="bg-white shadow-md rounded-md flex flex-col gap-y-8 p-7 text-slate-800 mb-7">
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">مجموع قیمت:</p>
                  <span className="text-orange-500 font-semibold">
                    {totalPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-light">کد تخفیف:</p>
                  <div className="flex pr-2">
                    <input
                      type="text"
                      className="w-full max-w-[120px] border border-gray-300 border-l-0 text-center rounded-tr rounded-br focus:outline-none"
                      placeholder="123ABC"
                    />
                    <button className="bg-orange-400 rounded-tl rounded-bl text-white py-2 px-3">
                      تایید
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">تخفیف:</p>
                  <span className="text-orange-500 font-semibold">-</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">قیمت نهایی:</p>
                <span className="text-orange-500 font-semibold">
                  {totalPrice}
                </span>
              </div>
            </div>
            <button className="bg-orange-400 rounded-md w-full text-white py-3 mb-3">
              ادامه فرآیند خرید
            </button>
            <button className="bg-transparent border border-orange-400 rounded-md w-full text-orange-400 py-3">
              انصراف از خرید
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-0 my-12 pb-10">
          <div className="mx-auto w-full max-w-screen-lg border border-gray-300 rounded-lg px-4">
            <div className="flex flex-col items-center py-10">
              <img
                src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
                className="mb-5"
                alt=""
              />
              <p className="text-lg font-semibold text-slate-800">
                سبد خرید شما خالی است!
              </p>
            </div>
          </div>
        </div>
      )}
      <MobileBottomNav />
    </>
  );
}
