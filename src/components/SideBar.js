import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContextProvider'
import { Link } from 'react-router-dom'

export default function SideBar() {
    const {priceRange, setPriceRange} = useContext(GlobalContext)

    const[isOpen, setIsOpen] = useState(true)
    const display = !isOpen ? "hidden" : "";
    const rotation = !isOpen ? "" : "rotate-180";

  return (
    <div className="hidden lg:block lg:col-span-3 row-span-2">
        <div className="bg-white rounded-lg flex flex-col p-4 sticky top-[100px] max-h-[calc(100vh_-_140px)] overflow-auto">
            {/* classification */}
            <div className="border-b border-gray-100 pb-3">
                <div className="text-orange-500 text-xl font-bold block mb-4">دسته بندی</div>
                <ul className="flex flex-col gap-y-1">
                    <li>
                        <Link to='/productslist/mobile' className="flex items-center gap-x-2 hover:bg-gray-50 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none">
                                <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M13 12.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 9.75 1.75 9 4.75 9h4.5c3 0 3.75.75 3.75 3.75ZM8.5 11.625h-3"/>
                                <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M7 21.825A1.163 1.163 0 1 0 7 19.5a1.163 1.163 0 0 0 0 2.325Z"/>
                                <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/>
                            </svg>
                            <span className="text-slate-800">تلفن همراه</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/productslist/lapTop'  className="flex items-center gap-x-2 hover:bg-gray-50 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" fill="none">
                                <circle cx="11.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/>
                                <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" d="M4.293 8.333H11.7c2.373 0 2.967.593 2.967 2.96v4.22c0 2.373-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.587-2.96-2.953v-4.227c0-2.367.594-2.96 2.96-2.96ZM8 18.48v3.187M1.333 15.667h13.334M5 21.667h6"/>
                            </svg>
                            <span className="text-slate-800">لپ تاپ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/productslist/smartWatch' className="flex items-center gap-x-2 hover:bg-gray-50 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" fill="none">
                                <circle cx="11.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/><path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M5.666 18.667h4.667c1.553 0 2.333-.78 2.333-2.333v-4.667c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 7.334H5.333M10.666 20.666H5.333"/>
                                <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M7.667 12.334v2h2"/>
                            </svg>
                            <span className="text-slate-800">ساعت هوشمند</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* filter */}
            <div className="py-3">
                <div className="text-orange-500 text-xl font-bold block mb-4">فیلتر</div>
                {/* accordion 1 */}
                <div className="text-slate-800 mb-2">
                    <button onClick={()=> setIsOpen(!isOpen)} className="flex items-center gap-x-4 hover:bg-gray-50 rounded-md w-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none">
                            <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/><path fill="#222F5D" d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z"/>
                            <path fill="#222F5D" d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z"/>
                            <path fill="#222F5D" d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z"/>
                            <path fill="#222F5D" d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z"/>
                        </svg>
                        <span>قیمت محصول</span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${rotation} transition-all duration-300`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>                                       
                    </button>
                    <div className={`${display} p-4 flex flex-col gap-y-2`}>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("any")} value='any' name="desktopPriceRange" id="desktopPriceRange1" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange1"  className='text-sm xl:text-base font-semibold'>همه</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("10000000 - 20000000")} value='10000000 - 20000000' name="desktopPriceRange" id="desktopPriceRange2" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange2"  className='text-sm xl:text-base font-semibold'>۱۰,۰۰۰,۰۰۰ - ۲۰,۰۰۰,۰۰۰</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("20000000 - 30000000")} value='20000000 - 30000000' name="desktopPriceRange" id="desktopPriceRange3" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange3"  className='text-sm xl:text-base font-semibold'>۲۰,۰۰۰,۰۰۰ - ۳۰,۰۰۰,۰۰۰</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("30000000 - 40000000")} value='30000000 - 40000000' name="desktopPriceRange" id="desktopPriceRange4" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange4"  className='text-sm xl:text-base font-semibold'>۳۰,۰۰۰,۰۰۰ - ۴۰,۰۰۰,۰۰۰</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("40000000 - 50000000")} value='40000000 - 50000000' name="desktopPriceRange" id="desktopPriceRange5" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange5"  className='text-sm xl:text-base font-semibold'>۴۰,۰۰۰,۰۰۰ - ۵۰,۰۰۰,۰۰۰</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("50000000 - 60000000")} value='50000000 - 60000000' name="desktopPriceRange" id="desktopPriceRange6" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange6"  className='text-sm xl:text-base font-semibold'>۵۰,۰۰۰,۰۰۰ - ۶۰,۰۰۰,۰۰۰</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input onChange={(e)=> setPriceRange(e.target.value)} checked={priceRange.includes("60000000 - 70000000")} value='60000000 - 70000000' name="desktopPriceRange" id="desktopPriceRange7" type="radio" className="form-radio checked:bg-none focus:ring-0 rounded focus:ring-offset-0 text-orange-500"/>
                            <label htmlFor="desktopPriceRange7"  className='text-sm xl:text-base font-semibold'>۶۰,۰۰۰,۰۰۰ - ۷۰,۰۰۰,۰۰۰</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> 
  );
}
