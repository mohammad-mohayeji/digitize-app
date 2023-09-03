import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import MobileHeader from "../components/MobileHeader";
import MobileBottomNav from "../components/MobileBottomNav";

// import our global context
import { GlobalContext } from "../GlobalContextProvider";

export default function SingleProduct() {
  const {increaseQuantityHandler} = useContext(GlobalContext)
  const params = useParams();
  const [product, setProduct] = useState("");
  const [color, setColor] = useState('red')

  useEffect(() => {
    axios
      .get(`https://vercel-restful-api.vercel.app/${params.productType}/${params.productID}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);
  return (
    <div>
      <MobileHeader title={product.category} />
      <div className="container mx-auto xl:max-w-screen-xl grid grid-cols-12 lg:grid-rows-[60px_minmax(500px,_1fr)] lg:gap-2 lg:px-4 lg:mt-6 mb-10 pb-10">
        <Breadcrumb productLabel={product.label} productCategory={product.category} productTitle={product.title}/>
        <div className="col-span-12">
          <div className="flex flex-col lg:flex-row lg:gap-y-4 lg:gap-0 px-5 lg:bg-white lg:rounded-md lg:py-7 lg:px-5">
            {/* single product */}
            <div className="flex flex-col lg:flex-row lg:gap-x-6 text-slate-800 flex-auto">
              {/* product img */}
              <div className="mb-10 mx-auto lg:mx-0">
                <img src={product.imgURL} className="lg:block max-w-[180px] lg:w-72" />
              </div>
              <div className="flex-auto lg:pl-8">
                {/* title */}
                <div className="text-center lg:text-right mb-11 lg:mb-5">
                  <h4 className="hidden lg:flex items-center gap-x-2 mb-3">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="none">
                        <path stroke="#FF755C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M13 12.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 9.75 1.75 9 4.75 9h4.5c3 0 3.75.75 3.75 3.75ZM8.5 11.625h-3"/>
                        <path stroke="#FF755C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M7 21.825A1.163 1.163 0 1 0 7 19.5a1.163 1.163 0 0 0 0 2.325Z"/>
                        <circle cx="10.5" cy="9.5" r="9.5" fill="#FFCBCB" fillOpacity=".28"/>
                      </svg>
                    </span>
                    <span className="text-orange-500">تلفن همراه اپل</span>
                  </h4>
                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>
                  {/* <p className="text-lg font-light">Apple Iphone 13 128GB</p> */}
                </div>
                <hr className="hidden lg:block" />
                {/* color-schemes */}
                <div className="flex justify-between lg:justify-start px-8 lg:px-0 mb-7 lg:mt-6 lg:gap-x-8">
                  <span className="font-semibold">انتخاب رنگ:</span>
                  <div className="flex items-center">
                    <div onClick={(e)=> setColor('blue')} className="w-7 h-7 flex justify-center items-center rounded-full cursor-pointer bg-blue-400 border-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${color === "blue" ? 'block' : 'hidden'} w-4 h-4 stroke-white`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                    <div onClick={(e)=> setColor('green')} className="w-7 h-7 flex justify-center items-center rounded-full cursor-pointer bg-green-400 border-2 -mr-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${color === "green" ? 'block' : 'hidden'} w-4 h-4 stroke-white`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                    <div onClick={(e)=> setColor('red')} className="w-7 h-7 flex justify-center items-center rounded-full cursor-pointer bg-red-400 border-2 -mr-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${color === "red" ? 'block' : 'hidden'} w-4 h-4 stroke-white`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* seller details (mobile) */}
                <div className="flex lg:hidden items-center justify-center flex-wrap gap-x-3 gap-y-4 mb-7">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.916v-1.459c0-.974-.484-1.458-1.458-1.458Z"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">فروشنده:</span>
                      <span className="mr-2 text-xs">دیجی تایز</span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.063" d="M6.43 3.58 2.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L8.583 3.58c-.602-.22-1.566-.22-2.153 0Z"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">گارانتی:</span>
                      <span className="mr-2 text-xs">۱۸ ماه زرین خدمت</span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.333V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.734-.707c.206-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.907-1.94H10Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M14.667 14.333v2c0 1.107-.894 2-2 2H12C12 17.6 11.4 17 10.667 17c-.734 0-1.334.6-1.334 1.333H6.667c0-.733-.6-1.333-1.334-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" d="M6 8.333c0 .8-.353 1.513-.907 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" d="M3.5 7.499v1l-.833.5"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">ارسال توسط:</span>
                      <span className="mr-2 text-xs">انبار تهران</span>
                    </p>
                  </div>
                </div>
                {/* product features */}
                <div className="bg-stone-50 lg:bg-transparent rounded-lg px-4 py-5 lg:p-0 mb-5">
                  <h3 className="text-lg mb-5 font-bold">ویژگی های کالا:</h3>
                  <ul className="list-disc list-inside marker:text-orange-500">
                    <li className="mb-1">
                      <span className="mr-2">حافظه داخلی:</span>
                      <p className="mr-7 text-lg font-bold">
                        {product.storage}
                      </p>
                    </li>
                    <li className="mb-1">
                      <span className="mr-2">بازه اندازه صفحه نمایش:</span>
                      <p className="mr-7 text-lg font-bold">
                        {product.screenSize}
                      </p>
                    </li>
                    <li>
                      <span className="mr-2">شبکه های ارتباطی:</span>
                      <p className="mr-7 text-lg font-bold">
                        {product.cellular}
                      </p>
                    </li>
                  </ul>
                </div>
                {/* add to cart button (mobile) */}
                <div className="lg:hidden sm:text-lg bg-stone-50 py-2 px-3 rounded-md shadow-lg flex">
                  <button onClick={(e)=> increaseQuantityHandler(product)} className="w-full sm:w-[85%] bg-orange-500 rounded-md py-2 text-white">اضافه به سبد خرید</button>
                  <p className="mr-4 font-semibold sm:w-[15%]">{product.priceTag} تومان</p>
                </div>
              </div>
            </div>
            {/* seller details (desktop) */}
            <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
              <div className="bg-stone-100 rounded-md p-5 text-slate-800">
                <div className="flex flex-col gap-y-4 mb-12">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.916v-1.459c0-.974-.484-1.458-1.458-1.458Z"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">فروشنده:</span>
                      <span className="mr-2 font-light">دیجی تایز</span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.063" d="M6.43 3.58 2.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L8.583 3.58c-.602-.22-1.566-.22-2.153 0Z"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">گارانتی:</span>
                      <span className="mr-2 font-light">۱۸ ماه زرین خدمت</span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.333V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.734-.707c.206-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.907-1.94H10Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M14.667 14.333v2c0 1.107-.894 2-2 2H12C12 17.6 11.4 17 10.667 17c-.734 0-1.334.6-1.334 1.333H6.667c0-.733-.6-1.333-1.334-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" d="M6 8.333c0 .8-.353 1.513-.907 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z"/>
                      <path stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" d="M3.5 7.499v1l-.833.5"/>
                    </svg>
                    <p className="mr-1">
                      <span className="font-semibold">ارسال توسط:</span>
                      <span className="mr-2 font-light">انبار تهران</span>
                    </p>
                  </div>
                </div>
                <p className="text-left text-orange-600 text-xl mb-2">
                  {product.priceTag} تومان
                </p>
                <button onClick={(e)=> increaseQuantityHandler(product)} className="bg-orange-600 py-2 px-4 rounded-md w-full text-white">
                  اضافه به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
