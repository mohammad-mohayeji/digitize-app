import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import icons
import ShoppingCartIcon from "@heroicons/react/20/solid/ShoppingCartIcon";

// import our global context
import { GlobalContext } from "../GlobalContextProvider";

export default function Main() {
  const { cartItems } = useContext(GlobalContext);
  return (
    <nav className="bg-white py-4 px-7 sticky top-0 z-20 shadow-lg border-b">
      <div className="container xl:max-w-screen-xl mx-auto flex justify-between gap-x-8">
        <div className="flex items-center gap-x-6">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="26"
              fill="none"
            >
              <path
                fill="#222F5D"
                d="M8.744 1.41V5.42H4.732V1.41h4.012Zm1.941 11.569c.173 0 .259.086.259.259v4.503c0 .173-.086.259-.259.259H9.65c-.276 0-.475-.009-.595-.026-.087 1.208-.337 2.235-.751 3.08-.414.863-1.078 1.657-1.993 2.381-.897.725-2.157 1.484-3.779 2.278L.746 21.727c1.208-.725 2.054-1.311 2.537-1.76.483-.449.776-.889.88-1.32.12-.431.181-1.13.181-2.096V7.49h4.762v4.918c0 .173.044.311.13.414a.56.56 0 0 0 .414.156h1.035Zm8.672-.233a5.21 5.21 0 0 1-.699 2.64A5.43 5.43 0 0 1 16.77 17.3a5.12 5.12 0 0 1-2.64.699h-3.442c-.173 0-.26-.086-.26-.259v-4.503c0-.173.087-.26.26-.26h3.39a.497.497 0 0 0 .363-.155.527.527 0 0 0 .155-.388V6.767h4.762v5.979Zm.052 7.325v4.011h-8.024v-4.011h8.024ZM26.094 18a5.119 5.119 0 0 1-2.64-.699 5.43 5.43 0 0 1-1.89-1.915 5.21 5.21 0 0 1-.698-2.64V.322h4.762v12.113c0 .173.043.31.13.414.103.087.232.13.388.13h1.578c.173 0 .26.086.26.259v4.503c0 .173-.087.259-.26.259h-1.63ZM35.798.685v4.011h-8.024V.685h8.024Zm-4.763 6.082h4.763v5.979a5.21 5.21 0 0 1-.7 2.64A5.43 5.43 0 0 1 33.21 17.3a5.119 5.119 0 0 1-2.64.699h-2.846c-.173 0-.26-.086-.26-.259v-4.503c0-.173.087-.26.26-.26h2.795a.496.496 0 0 0 .362-.155.527.527 0 0 0 .155-.388V6.767Z"
              />
              <path
                fill="#FF755C"
                d="M56.737 12.979c.173 0 .26.086.26.259v4.503c0 .173-.087.259-.26.259h-.724c.034.31.051.544.051.699a5.567 5.567 0 0 1-.776 2.873 5.615 5.615 0 0 1-2.096 2.07 5.614 5.614 0 0 1-2.9.777h-6.108a6.878 6.878 0 0 1-3.545-.958 7.159 7.159 0 0 1-2.589-2.588 6.878 6.878 0 0 1-.957-3.546v-6.833h4.762v6.574c0 .639.224 1.182.673 1.63.466.467 1.018.7 1.656.7h6.186c.207 0 .38-.07.518-.207a.672.672 0 0 0 .207-.492.672.672 0 0 0-.207-.492.702.702 0 0 0-.518-.207h-5.668v-5.021h12.035ZM56.74 18c-.173 0-.259-.086-.259-.259v-4.503c0-.173.086-.26.259-.26h5.798c1.173 0 2.174-.361 3.002-1.086l2.045-1.812-2.977-1.45c-.241-.103-.431-.155-.57-.155-.31 0-.62.138-.93.414l-2.693 2.977-3.313-2.899 2.718-3.313c.552-.656 1.2-1.13 1.941-1.423a5.725 5.725 0 0 1 2.226-.466c.863 0 1.682.207 2.459.62l5.539 2.59a.597.597 0 0 0 .207.05h3.339v4.66h-3.313v.724c0 .173.043.311.13.414a.56.56 0 0 0 .413.156h3.236c.172 0 .258.086.258.259v4.503c0 .173-.086.259-.258.259H72.76c-1.018 0-1.855-.242-2.51-.725-.639-.5-1.165-1.225-1.58-2.174l-.517.518a9.264 9.264 0 0 1-2.925 1.786A9.664 9.664 0 0 1 61.89 18h-5.151Zm3.21 2.07h4.011v4.012h-4.012v-4.011Zm24.72-7.324a5.21 5.21 0 0 1-.698 2.64 5.43 5.43 0 0 1-1.89 1.915 5.12 5.12 0 0 1-2.64.699H76c-.172 0-.259-.086-.259-.259v-4.503c0-.173.087-.26.26-.26h3.39a.496.496 0 0 0 .362-.155.526.526 0 0 0 .155-.388V6.767h4.763v5.979Zm.053 7.325v4.011h-8.024v-4.011h8.024Zm8.315-7.092c.449 0 .673-.181.673-.544a.418.418 0 0 0-.155-.336c-.104-.104-.346-.285-.725-.544l-5.824-4.011 2.718-3.935 6.6 4.582c.707.552 1.242 1.138 1.605 1.76.362.62.543 1.397.543 2.329 0 1.087-.267 2.07-.802 2.95a5.62 5.62 0 0 1-2.122 2.045 6.073 6.073 0 0 1-2.925.725h-6.445v-5.021h6.859Z"
              />
            </svg>
          </Link>
          <ul className="hidden md:flex items-center gap-x-8 text-slate-800 xl:text-lg">
            <li>
              <Link to="/productslist/mobile" className="py-4 hover:text-orange-500">
                تلفن همراه
              </Link>
            </li>
            <li>
              <Link to="/productslist/lapTop" className="py-4 hover:text-orange-500">
                لپ تاپ
              </Link>
            </li>
            <li>
              <Link to="/productslist/smartWatch" className="py-4 hover:text-orange-500">
                ساعت هوشمند
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="p-3 block bg-orange-400 rounded-full relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cartItems.length ? (
                  <span className="block en-font w-5 h-5 text-center leading-5 rounded-full bg-slate-800 text-white absolute -top-1 -right-1 text-sm">
                    {cartItems.length}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="flex items-center bg-stone-100 rounded-md">
            <div className="py-3 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="search"
              placeholder="جستجوی نام محصول، نام برند، نام مدل و ..."
              className="text-slate-800 w-full bg-transparent border-0 focus:outline-none focus:ring-0 py-3 px-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
