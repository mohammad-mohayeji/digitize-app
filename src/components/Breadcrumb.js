import React from "react";
import { Link } from "react-router-dom";

import ChevronLeftIcon from "../../node_modules/@heroicons/react/20/solid/ChevronLeftIcon";

export default function Breadcrumb({productLabel, productCategory, productTitle}) {
  return (
    <div className="hidden lg:block lg:col-span-12">
      <ol className="flex items-center gap-x-3 bg-white rounded-md py-3 px-4">
        <li>
          <Link className="text-orange-400" to="/">
            خانه
          </Link>
        </li>
        <ChevronLeftIcon width="20px" className="fill-slate-800"/>
        <li>
          <Link className="text-orange-400" to={`/productslist/${productLabel}`}>
            {productCategory}
          </Link>
        </li>
        <ChevronLeftIcon width="20px" className="fill-slate-800"/>
        <li>{productTitle}</li>
      </ol>
    </div>
  );
}
