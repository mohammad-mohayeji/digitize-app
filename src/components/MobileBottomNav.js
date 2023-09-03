import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import our global context
import { GlobalContext } from "../GlobalContextProvider";

export default function MobileBottomNav() {
    const { cartItems } = useContext(GlobalContext);
  return (
    <nav className="block lg:hidden fixed bottom-0 w-full py-1 bg-white px-5 rounded-tl-lg rounded-tr-lg shadow-lg border-t border-gray-300">
      <ul className="flex items-center justify-around gap-x-3 text-sm text-slate-800">
        <li>
          <Link to="/" className="flex items-center gap-x-2 py-3">
            <span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.72 7.09358L17.04 1.72024C14.9467 0.253576 11.7333 0.333576 9.71999 1.89358L3.03999 7.10691C1.70665 8.14691 0.65332 10.2802 0.65332 11.9602V21.1602C0.65332 24.5602 3.41332 27.3336 6.81332 27.3336H21.1867C24.5867 27.3336 27.3467 24.5736 27.3467 21.1736V12.1336C27.3467 10.3336 26.1867 8.12024 24.72 7.09358ZM15 22.0002C15 22.5469 14.5467 23.0002 14 23.0002C13.4533 23.0002 13 22.5469 13 22.0002V18.0002C13 17.4536 13.4533 17.0002 14 17.0002C14.5467 17.0002 15 17.4536 15 18.0002V22.0002Z" />
              </svg>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/classification" className="flex items-center gap-x-2 py-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
              >
                <g opacity="">
                  <path d="M10.257 2.833H7.565c-3.102 0-4.732 1.63-4.732 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.692c3.088 0 4.717-1.629 4.717-4.717V7.55c.014-3.088-1.615-4.718-4.703-4.718ZM26.45 2.833h-2.692c-3.089 0-4.718 1.63-4.718 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.691c3.088 0 4.718-1.629 4.718-4.717V7.55c0-3.088-1.63-4.718-4.718-4.718ZM26.45 19.026h-2.692c-3.089 0-4.718 1.629-4.718 4.717v2.692c0 3.088 1.63 4.718 4.718 4.718h2.691c3.088 0 4.718-1.63 4.718-4.718v-2.692c0-3.088-1.63-4.717-4.718-4.717ZM10.257 19.026H7.565c-3.102 0-4.732 1.629-4.732 4.717v2.692c0 3.103 1.63 4.732 4.718 4.732h2.692c3.088 0 4.717-1.63 4.717-4.718v-2.692c.014-3.102-1.615-4.731-4.703-4.731Z" />
                </g>
              </svg>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
              >
                <path
                  fillOpacity=""
                  d="M28.277 12.693c-.95-1.048-2.38-1.657-4.364-1.87V9.747a6.9 6.9 0 0 0-2.266-5.114c-1.46-1.332-3.358-1.955-5.327-1.771-3.386.326-6.233 3.598-6.233 7.14v.821c-1.984.213-3.415.822-4.364 1.87-1.374 1.53-1.331 3.57-1.176 4.987l.992 7.89c.298 2.763 1.417 5.597 7.508 5.597h7.905c6.092 0 7.211-2.834 7.509-5.582l.992-7.92c.155-1.402.184-3.442-1.176-4.972ZM16.518 4.831c1.417-.128 2.763.312 3.811 1.26a4.925 4.925 0 0 1 1.615 3.656v.991h-9.888v-.736c0-2.522 2.082-4.944 4.462-5.171Zm-4.59 13.798h-.014a1.42 1.42 0 0 1-1.416-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.418 1.416Zm9.917 0h-.014a1.42 1.42 0 0 1-1.417-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.417 1.416Z"
                />
              </svg>
              {cartItems.length ? (
                <span className="block en-font w-5 h-5 text-center leading-5 rounded-full bg-orange-400 text-white absolute -top-1.5 -right-1.5 text-sm">
                  {cartItems.length}
                </span>
              ) : (
                ""
              )}
            </span>
          </Link>
        </li>
        <li>
          <Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="25"
                fill="currentColor"
              >
                <path
                  opacity=""
                  d="M20.834.333a7.702 7.702 0 0 0-6.156 3.09A7.701 7.701 0 0 0 8.522.332C4.278.333.833 3.8.833 8.067c0 1.644.267 3.178.712 4.578 2.177 6.91 8.933 11.066 12.266 12.2.467.155 1.245.155 1.711 0 3.334-1.134 10.09-5.267 12.267-12.2.467-1.423.711-2.934.711-4.578C28.522 3.8 25.078.333 20.834.333Z"
                />
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
