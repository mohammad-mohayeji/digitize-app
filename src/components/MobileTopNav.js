import React from "react";
import { useNavigate } from "react-router-dom";

import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function MobileTopNav({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex md:hidden justify-between items-center py-10 mb-6 px-5">
      <button onClick={(e) => navigate(-1)} className="bg-white p-2 rounded-md shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 slate-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="text-2xl font-bold text-slate-800">{title}</div>
      <div className="bg-white p-2 rounded-md shadow-lg">
        <BookmarkIcon className="w-5 h-5 text-slate-800" />
      </div>
    </div>
  );
}
