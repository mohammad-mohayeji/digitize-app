import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="p-2 bg-white rounded-[10px] shadow-md">
      {/* card header */}
      <div className="bg-gray-200 flex justify-center items-center rounded-[5px] mb-4 py-2 min-h-[180px]">
        <img src={item.imgURL} className="w-32 h-auto" />
      </div>
      {/* product desc */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs sm:text-base text-slate-400">
          {item.category}
        </span>
      </div>
      {/* title - price */}
      <div className="text-base font-bold text-slate-800 mb-2">
        {item.title}
      </div>
      <div className="font-bold text-orange-700 text-left mb-2">
        {item.priceTag} تومان
      </div>
      {/* purchase btn */}
      <Link to={`/singleProduct/${item.label}/${item.id}`} className="w-full block text-sm sm:text-base text-center font-bold border-t border-gray-200 text-orange-400 py-2">
        مشاهده و سفارش
      </Link >
    </div>
  );
}

// ۰۱۲۳۴۵۶۷۸۹