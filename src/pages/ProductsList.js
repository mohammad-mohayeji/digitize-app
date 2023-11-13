import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../GlobalContextProvider";
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import SortBar from "../components/SortBar";
import MobileHeader from "../components/MobileHeader";
import MobileBottomNav from "../components/MobileBottomNav";
import MobileFilterModal from "../components/MobileFilterModal";

// import icons
import { ImSpinner2 } from "react-icons/im";

export default function ProductsList() {
  const productType = useParams().productType;
  const {
    products,
    setProducts,
    sortType,
    priceRange,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    loading,
    setLoading,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (sortType === "mostPopular") sortTypeHandler("popularity", "desc");
    else if (sortType === "mostViewed") sortTypeHandler("views", "desc");
    else if (sortType === "mostExpensive") sortTypeHandler("price", "desc");
    else if (sortType === "cheapest") sortTypeHandler("price", "asc");
  }, [productType, sortType, priceRange, minPrice, maxPrice]);

  useEffect(() => {
    if (priceRange !== "any") {
      setMinPrice(priceRange.split(" ")[0]);
      setMaxPrice(priceRange.split(" ")[2]);
    }
  }, [priceRange]);

  const sortTypeHandler = (sort, order) => {
    setLoading(true)
    if (priceRange === "any") {
      axios.get(`https://vercel-restful-api.vercel.app/${productType}?_sort=${sort}&_order=${order}`).then((res) => {
          setProducts(res.data);
          setLoading(false)
        });
    } else {
      axios.get(`https://vercel-restful-api.vercel.app/${productType}?_sort=${sort}&_order=${order}&price_gte=${minPrice}&price_lte=${maxPrice}`).then((res) => {
          setProducts(res.data);
          setLoading(false)
        });
    }
  };

  const searchBoxHandler = (e) => {
    axios
      .get(
        `https://vercel-restful-api-mohammad-mohayeji.vercel.app/${productType}?q=${e.target.value}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  const title =
    productType === "mobile"
      ? "تلفن همراه"
      : productType === "lapTop"
      ? "لپ تاپ"
      : "ساعت هوشمند";

  return (
    <div>
      <MobileHeader title={title} />
      <MobileFilterModal searchBoxHandler={searchBoxHandler} />
      <div className="container mx-auto xl:max-w-screen-xl grid grid-cols-12 lg:grid-rows-[60px_minmax(500px,_1fr)] lg:gap-8 md:px-4 md:mt-6 mb-10 pb-10">
        <SideBar />
        <SortBar searchBoxHandler={searchBoxHandler} />
        {loading && (
          <div className="col-span-12 lg:col-span-9">
            <ImSpinner2 size={38} className="text-orange-500 animate-spin mx-auto mt-28" />
          </div>
        )}
        {!loading && (
          <div className="col-span-12 lg:col-span-9">
            {products.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 md:gap-x-6 md:gap-y-8 px-4 md:px-0">
                {products.map((item) => (
                  <ProductCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <div className="text-center text-3xl text-gray-400 mt-16 mb-10 md:mt-48">
                محصولی یافت نشد !
              </div>
            )}
          </div>
        )}
      </div>
      <MobileBottomNav />
    </div>
  );
}
