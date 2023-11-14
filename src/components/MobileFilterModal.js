import React, { useContext, useState } from "react";

// import our global context
import { GlobalContext } from "../GlobalContextProvider";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function MobileFilterModal({searchBoxHandler}) {
  const { priceRange, setPriceRange, sortType, setSortType } = useContext(GlobalContext);
  const [accIsOpen, setAccIsOpen] = useState(true);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);

  const filterModalDisplay = !showFilterModal ? "invisible opacity-0 translate-y-full" : "visible opacity-100 translate-y-0";
  const sortModalStyle = !showSortModal ? "invisible opacity-0 translate-y-full" : "visible opacity-100 translate-y-0";

  const accDisplay = !accIsOpen ? "hidden" : "";
  const rotation = !accIsOpen ? "" : "rotate-180";

  let sortTypeText =
    sortType === "mostPopular"
      ? "محبوب ترین" 
      : sortType === "mostViewed"
      ? "پر بازدید ترین"
      : sortType === "mostExpensive"
      ? "گران ترین"
      : "ارزان ترین";

  return (
    // filter-sort bar (mobile queries)
    <div>
      <div className="flex md:hidden justify-between items-center gap-x-3 mb-5 px-5">
        <button onClick={(e)=> setShowSortModal(true)} className="w-full bg-white rounded-md p-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-orange-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"/>
          </svg>
          <span className="mr-2 text-sm sm:text-base font-semibold text-slate-800">{sortTypeText}</span>
        </button>
        <button onClick={(e)=> setShowFilterModal(true)} className="w-full bg-white rounded-md p-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/>
          </svg>
          <span className="mr-2 text-sm sm:text-base font-semibold text-slate-800">{priceRange === "any" ? "فیلتر" : priceRange }</span>
        </button>
      </div>
      <div className="md:hidden w-full px-5 mb-9">
        <div className="bg-white rounded-md w-full flex items-center px-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input type="text" onChange={searchBoxHandler} className="focus:ring-0 border-none w-full text-sm placeholder:text-sm" placeholder="جستجوی نام محصول، نام برند، نام مدل و ..."/>
        </div>
      </div>

      {/* sort modal */}
      <div>
        <div className={`${!showSortModal ? "invisible opacity-0" : "visible opacity-100"} md:hidden bg-transparent absolute inset-0 backdrop-blur-md z-30 transition-all duration-300`}></div>
        <div className={`${sortModalStyle} md:hidden bg-white w-full min-h-[412px] fixed bottom-0 z-40 rounded-tl-3xl rounded-tr-3xl shadow-lg transition-all duration-500`}>
          <div className="p-5">
            <div className="text-orange-500 text-xl font-bold block mb-4">دسته بندی</div>
            {/* accordion 1 */}
            <div className="text-slate-800 mb-2">
              <button onClick={() => setAccIsOpen(!accIsOpen)} className="flex items-center gap-x-4 hover:bg-gray-50 rounded-md w-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none">
                  <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/>
                  <path fill="#222F5D" d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z"/>
                  <path fill="#222F5D" d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z"/>
                  <path fill="#222F5D" d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z"/>
                  <path fill="#222F5D" d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z"/>
                </svg>
                <span>بر اساس</span>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${rotation} transition-all duration-300`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </button>
              <div className={`${accDisplay} p-4 flex flex-col gap-y-2`}>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setSortType(e.target.value)} checked={sortType.includes("mostPopular")} value="mostPopular" name="sortType" id="sortType1" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="sortType1" className="font-semibold">محبوبترین</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setSortType(e.target.value)} checked={sortType.includes("mostViewed")} value="mostViewed" name="sortType" id="sortType2" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="sortType1" className="font-semibold">پربازدید ترین</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setSortType(e.target.value)} checked={sortType.includes("mostExpensive")} value="mostExpensive" name="sortType" id="sortType3" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="sortType3" className="font-semibold">گران ترین</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setSortType(e.target.value)} checked={sortType.includes("cheapest")} value="cheapest" name="sortType" id="sortType4" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="sortType4" className="font-semibold">ارزان ترین</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex w-full justify-between px-5 gap-x-6 absolute bottom-5">
              <button onClick={(e)=> setShowSortModal(false)} className="w-full bg-orange-400 text-white py-2 rounded-md">تایید</button>
              <button onClick={(e)=> setShowSortModal(false)} className="w-full bg-orange-100 border border-orange-600 text-orange-600 rounded-md">لغو فیلتر</button>
            </div>
          </div>
        </div>
      </div>

      {/* filter modal */}
      <div>
        <div className={`${!showFilterModal ? "invisible opacity-0" : "visible opacity-100"} md:hidden bg-transparent absolute inset-0 backdrop-blur-md z-30 transition-all duration-300`}></div>
        <div className={`${filterModalDisplay} md:hidden bg-white w-full min-h-[412px] fixed bottom-0 z-40 rounded-tl-3xl rounded-tr-3xl shadow-lg transition-all duration-500`}>
          <div className="p-5">
            <div className="text-orange-500 text-xl font-bold block mb-4">فیلتر</div>
            {/* accordion 1 */}
            <div className="text-slate-800 mb-2">
              <button onClick={() => setAccIsOpen(!accIsOpen)} className="flex items-center gap-x-4 hover:bg-gray-50 rounded-md w-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none">
                  <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/>
                  <path fill="#222F5D" d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z"/>
                  <path fill="#222F5D" d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z"/>
                  <path fill="#222F5D" d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z"/>
                  <path fill="#222F5D" d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z"/>
                </svg>
                <span>قیمت محصول</span>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${rotation} transition-all duration-300`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </button>
              <div className={`${accDisplay} p-4 flex flex-col gap-y-2`}>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("any")} value="any" name="mobilePriceRange" id="priceRange1" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange1" className="font-semibold">همه</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("10000000 - 20000000")} value="10000000 - 20000000" name="mobilePriceRange" id="priceRange2" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange2" className="font-semibold">۱۰,۰۰۰,۰۰۰ - ۲۰,۰۰۰,۰۰۰</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("20000000 - 30000000")} value="20000000 - 30000000" name="mobilePriceRange" id="priceRange3" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange3" className="font-semibold">۲۰,۰۰۰,۰۰۰ - ۳۰,۰۰۰,۰۰۰
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("30000000 - 40000000")} value="30000000 - 40000000" name="mobilePriceRange" id="priceRange4" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange4" className="font-semibold">۳۰,۰۰۰,۰۰۰ - ۴۰,۰۰۰,۰۰۰
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("40000000 - 50000000")} value="40000000 - 50000000" name="mobilePriceRange" id="priceRange5" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange5" className="font-semibold">۴۰,۰۰۰,۰۰۰ - ۵۰,۰۰۰,۰۰۰</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("50000000 - 60000000")} value="50000000 - 60000000" name="mobilePriceRange" id="priceRange6" type="radio" className="form-radio checked:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange6" className="font-semibold">۵۰,۰۰۰,۰۰۰ - ۶۰,۰۰۰,۰۰۰</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input onChange={(e) => setPriceRange(e.target.value)} checked={priceRange.includes("60000000 - 70000000")} value="60000000 - 70000000" name="mobilePriceRange" id="priceRange7" type="radio" className="form-radio focus:bg-none rounded text-orange-500 focus:ring-0 focus:ring-offset-0"/>
                  <label htmlFor="priceRange7" className="font-semibold">۶۰,۰۰۰,۰۰۰ - ۷۰,۰۰۰,۰۰۰</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex w-full justify-between px-5 gap-x-6 absolute bottom-5">
              <button onClick={(e)=> setShowFilterModal(false)} className="w-full bg-orange-400 text-white py-2 rounded-md">تایید</button>
              <button onClick={(e)=> setShowFilterModal(false)} className="w-full bg-orange-100 border border-orange-600 text-orange-600 rounded-md">لغو فیلتر</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
