import React, { useContext } from "react";

// import globalContext
import { GlobalContext } from "../GlobalContextProvider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SortBar({searchBoxHandler}) {
  const { sortType, setSortType } = useContext(GlobalContext);
  return (
    <div className="hidden md:block md:col-span-8 lg:col-span-9">
      <div className="flex items-center gap-x-2 lg:gap-x-5 bg-white rounded-md p-2">
        <div className="hidden lg:block bg-orange-100 p-2 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 lg:w-7 lg:h-7 stroke-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between w-full gap-x-4">
          <ul className="flex items-center gap-x-3 text-[13px] lg:text-base">
            <li className="py-2 relative">
              <button
                onClick={(e) => setSortType(e.target.id)}
                id="mostPopular"
                className={`${
                  sortType === "mostPopular" ? "" : "opacity-60"
                } hover:text-orange-500`}
              >
                محبوب ترین
              </button>
              <span
                className={`${
                  sortType === "mostPopular" ? "" : "hidden"
                } w-1 h-1 rounded-full bg-orange-400 absolute -left-1 top-1.5`}
              ></span>
            </li>
            <li className="py-2 relative">
              <button
                onClick={(e) => setSortType(e.target.id)}
                id="mostViewed"
                className={`${
                  sortType === "mostViewed" ? "" : "opacity-60"
                } hover:text-orange-500`}
              >
                پربازدید ترین
              </button>
              <span
                className={`${
                  sortType === "mostViewed" ? "" : "hidden"
                } w-1 h-1 rounded-full bg-orange-400 absolute -left-1 top-1.5`}
              ></span>
            </li>
            <li className="py-2 relative">
              <button
                onClick={(e) => setSortType(e.target.id)}
                id="mostExpensive"
                className={`${
                  sortType === "mostExpensive" ? "" : "opacity-60"
                } hover:text-orange-500`}
              >
                گران ترین
              </button>
              <span
                className={`${
                  sortType === "mostExpensive" ? "" : "hidden"
                } w-1 h-1 rounded-full bg-orange-400 absolute -left-1 top-1.5`}
              ></span>
            </li>
            <li className="py-2 relative">
              <button
                onClick={(e) => setSortType(e.target.id)}
                id="cheapest"
                className={`${
                  sortType === "cheapest" ? "" : "opacity-60"
                } hover:text-orange-500`}
              >
                ارزان ترین
              </button>
              <span
                className={`${
                  sortType === "cheapest" ? "" : "hidden"
                } w-1 h-1 rounded-full bg-orange-400 absolute -left-1 top-1.5`}
              ></span>
            </li>
          </ul>
          <div className="flex-1 max-w-[280px] xl:max-w-md">
            <div className="flex items-center bg-stone-100 rounded-md">
              <div className="py-3 pr-2">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </div>
              <input onChange={searchBoxHandler} type="search" placeholder="جستجوی نام محصول، نام برند، نام مدل و ..." className="form-input text-sm text-slate-800 w-full bg-transparent border-0 focus:outline-none focus:ring-0 py-3 px-3 placeholder:text-xs"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
