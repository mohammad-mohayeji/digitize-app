import React from "react";
import MobileHeader from "../components/MobileHeader";
import { Link } from "react-router-dom";
import MobileBottomNav from "../components/MobileBottomNav";

export default function Classification() {
  return (
    <div className="md:hidden">
      <MobileHeader title="دسته بندی" />
      <div className="px-3 flex flex-col gap-y-8 mb-10 pb-10">
        <div className="flex overflow-x-auto text-gray-500 pb-2">
          <div className="w-full max-w-[160px] bg-gray-300 rounded-lg flex flex-col items-center overflow-hidden shrink-0 ml-4 justify-around">
            <h4 className="font-semibold">تلفن همراه</h4>
            <div>
              <img src="https://s8.uupload.ir/files/mobile_wt6a.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <Link to='/productslist/mobile' className="mb-6 text-orange-400">مشاهده همه</Link>
            <div className="flex gap-x-2">
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/apple_(1)_0eel.png" alt="" />
                    <span>اپل</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/image_28_15lk.png" alt="" />
                    <span>شیائومی</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/samsung_1_9ttg.png" className="h-[80px] object-contain" alt="" />
                    <span>سامسونگ</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/huawei_g69g.png" alt="" />
                    <span>هوآوی</span>
                </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto text-gray-500 pb-2">
          <div className="w-full max-w-[160px] bg-gray-300 rounded-lg flex flex-col items-center overflow-hidden shrink-0 ml-4 justify-around">
            <h4 className="font-semibold">لپ تاپ</h4>
            <div>
              <img src="https://s8.uupload.ir/files/laptop_npll.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <Link to='/productslist/lapTop' className="mb-6 text-orange-400">مشاهده همه</Link>
            <div className="flex gap-x-2">
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/apple_(1)_0eel.png" alt="" />
                    <span>اپل</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/asus_tkjb.png" alt="" />
                    <span>ایسوس</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/lenovo_0to4.png" alt="" />
                    <span>لنوو</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/acer_w916.png" alt="" />
                    <span>ایسر</span>
                </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto text-gray-500 pb-2">
          <div className="w-full max-w-[160px] bg-gray-300 rounded-lg flex flex-col items-center overflow-hidden shrink-0 ml-4 justify-around">
            <h4 className="font-semibold">ساعت هوشمند</h4>
            <div>
              <img src="https://s8.uupload.ir/files/smartwatch_t7dp.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <Link to='/productslist/smartWatch' className="mb-6 text-orange-400">مشاهده همه</Link>
            <div className="flex gap-x-2">
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/apple_(1)_0eel.png" alt="" />
                    <span>اپل</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/image_28_15lk.png" alt="" />
                    <span>شیائومی</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/samsung_1_9ttg.png" className="h-[80px] object-contain" alt="" />
                    <span>سامسونگ</span>
                </div>
                <div className="bg-white rounded-lg py-6 px-6 flex flex-col items-center gap-y-4 shrink-0 w-full max-w-[130px]">
                    <img src="https://s8.uupload.ir/files/huawei_g69g.png" alt="" />
                    <span>هوآوی</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}