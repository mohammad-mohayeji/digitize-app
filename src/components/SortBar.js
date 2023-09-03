import React from 'react'

export default function SortBar() {
  return (
    <div className="hidden lg:block lg:col-span-9">
        <div className="flex items-center gap-x-5 bg-white rounded-md p-2">
            <div className="bg-orange-100 p-2 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 stroke-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"/>
                </svg>
            </div>
            <ul className="flex items-center gap-x-5">
                <li className="py-2 relative">
                    <a href="#" className="hover:text-orange-500">محبوب ترین</a>                   
                </li>
                <li className="py-2 relative">
                    <a href="#" className="hover:text-orange-500">پربازدید ترین</a>                   
                </li>
                <li className="py-2 relative">
                    <a href="#" className="hover:text-orange-500">گران ترین</a>                    
                </li>
                <li className="py-2 relative">
                    <a href="#" className="hover:text-orange-500">ارزان ترین</a>                   
                </li>
            </ul>
        </div>
    </div>
  )
}
