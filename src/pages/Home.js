import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import MobileBottomNav from "../components/MobileBottomNav";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=> {
   const res1 = axios.get("https://vercel-restful-api.vercel.app/mobile/1")
   const res2 = axios.get("https://vercel-restful-api.vercel.app/mobile/2")
   const res3 = axios.get("https://vercel-restful-api.vercel.app/lapTop/1")
   const res4 = axios.get("https://vercel-restful-api.vercel.app/smartWatch/1")

   Promise.all([res1, res2, res3, res4]).then((values)=> {
    setPopularProducts([values[0].data, values[1].data, values[2].data, values[3].data])
   })
  }, [])
  return (
    <section>
      <ImageSlider />
      <div className="pt-10 pb-16 px-6">
        <div className="col-span-12 border-4 border-white py-5 px-5 rounded-xl">
          <h4 className="text-slate-700 text-xl font-medium mb-6">محصولات پرطرفدار</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 md:gap-x-6 md:gap-y-8 px-4">
            {popularProducts.map((item)=> (
              <ProductCard item={item} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 mb-10 pb-10">
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/2">
            <img className="rounded-xl object-cover h-[280px] w-full" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1849c1452cb5743206529a9377ead659193dee22_1665865997.jpg?x-oss-process=image/quality,q_95"/>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded-xl object-cover h-[280px] w-full" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5a480bc0c5ae8d9f61c173ea95fa69ab9421e343_1690576047.jpg?x-oss-process=image/quality,q_95/format,webp"/>
          </div>
        </div>
      </div>
      <div className="px-6 mb-10 pb-10">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-slate-800 text-xl font-semibold mb-7">گوشی بر اساس قیمت</h4>
              <div className="flex flex-wrap justify-between gap-y-4 font-medium text-lg">
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  گوشی ساده و ارزان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۵</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۱۵</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۳۰</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۵۰</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۷۵</b> میلیون تومان
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-slate-800 text-xl font-semibold mb-7">گوشی بر اساس ویژگی</h4>
              <div className="flex flex-wrap justify-between gap-y-4 font-medium text-lg">
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-red-100 border border-red-200 rounded-lg text-center py-4 px-2">
                   گوشی گیمینگ
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-violet-100 border border-violet-200 rounded-lg text-center py-4 px-2">
                   دوربین
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-orange-100 border border-orange-200 rounded-lg text-center py-4 px-2">
                   5G
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-blue-100 border border-blue-200 rounded-lg text-center py-4 px-2">
                   باتری
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                   ضد آب
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] bg-yellow-100 border border-yellow-200 rounded-lg text-center py-4 px-2">
                   شارژ سریع
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </section>
  );
}
