import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import MobileBottomNav from "../components/MobileBottomNav";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SwiperNavBtns from "../components/SwiperNavBtns";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function Home() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const res1 = axios.get("https://digitize-restful-api.vercel.app/mobile/1");
    const res3 = axios.get("https://digitize-restful-api.vercel.app/lapTop/1");
    const res2 = axios.get("https://digitize-restful-api.vercel.app/mobile/2");
    const res4 = axios.get("https://digitize-restful-api.vercel.app/smartWatch/1");
    const res5 = axios.get("https://digitize-restful-api.vercel.app/lapTop/3");
    const res6 = axios.get("https://digitize-restful-api.vercel.app/smartWatch/3");

    Promise.all([res1, res2, res3, res4, res5, res6]).then((values) => {
      setPopularProducts([
        values[0].data,
        values[2].data,
        values[1].data,
        values[3].data,
        values[4].data,
        values[5].data,
      ]);
    });
  }, []);
  return (
    <section>
      <ImageSlider />
      <div className="px-6 md:px-10 pt-10 pb-16">
        <div className="col-span-12 py-5 rounded-xl">
          <div>
            <Swiper
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                padding: "10px 0",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              spaceBetween={20}
              breakpoints={{
                1200: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="mySwiper"
            >
              <div className="swiperTopSection flex items-center justify-between mb-6">
                <h4 className="text-slate-700 text-lg md:text-xl font-semibold">
                  محصولات پرطرفدار
                </h4>
                <SwiperNavBtns />
              </div>
              {popularProducts.map((item) => (
                <SwiperSlide>
                  <ProductCard item={item} key={item.id} />{" "}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 mb-10 pb-10">
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-xl object-cover h-[280px] w-full"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/1849c1452cb5743206529a9377ead659193dee22_1665865997.jpg?x-oss-process=image/quality,q_95"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-xl object-cover h-[280px] w-full"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5a480bc0c5ae8d9f61c173ea95fa69ab9421e343_1690576047.jpg?x-oss-process=image/quality,q_95/format,webp"
            />
          </div>
        </div>
      </div>
      <div className="px-6 md:px-10 mb-10 pb-10">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-slate-800 text-lg md:text-xl font-semibold mb-7">
                گوشی بر اساس قیمت
              </h4>
              <div className="flex flex-wrap justify-between gap-y-4 font-medium text-lg">
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  گوشی ساده و ارزان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۵</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۱۵</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۳۰</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۵۰</b> میلیون تومان
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  تا <b>۷۵</b> میلیون تومان
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-slate-800 text-lg md:text-xl font-semibold mb-7">
                گوشی بر اساس ویژگی
              </h4>
              <div className="flex flex-wrap justify-between gap-y-4 font-medium text-lg">
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-red-100 border border-red-200 rounded-lg text-center py-4 px-2">
                  گوشی گیمینگ
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-violet-100 border border-violet-200 rounded-lg text-center py-4 px-2">
                  دوربین
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-orange-100 border border-orange-200 rounded-lg text-center py-4 px-2">
                  5G
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-blue-100 border border-blue-200 rounded-lg text-center py-4 px-2">
                  باتری
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-sky-100 border border-sky-200 rounded-lg text-center py-4 px-2">
                  ضد آب
                </div>
                <div className="w-[48%] sm:w-[32%] lg:w-[48%] xl:w-[32%] text-sm md:text-base bg-yellow-100 border border-yellow-200 rounded-lg text-center py-4 px-2">
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
