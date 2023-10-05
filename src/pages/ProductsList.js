import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import SortBar from "../components/SortBar";
import MobileHeader from "../components/MobileHeader";
import MobileBottomNav from "../components/MobileBottomNav";

import { GlobalContext } from "../GlobalContextProvider";
import MobileFilterModal from "../components/MobileFilterModal";

export default function ProductsList() {
  const productType = useParams().productType;
  const { products, setProducts, sortType, priceRange, minPrice,setMinPrice , maxPrice, setMaxPrice } = useContext(GlobalContext);

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
    if (priceRange === "any") {
      axios.get(`http://localhost:5000/${productType}?_sort=${sort}&_order=${order}`)
        .then((res) => {
          setProducts(res.data);
        });
    } else {
      axios.get(`http://localhost:5000/${productType}?_sort=${sort}&_order=${order}&price_gte=${minPrice}&price_lte=${maxPrice}`)
        .then((res) => {
          setProducts(res.data);
        });
    }
  };

  const searchBoxHandler = (e) => {
    axios
      .get(`http://localhost:5000/${productType}?q=${e.target.value}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  const title = 
    productType === 'mobile' 
      ? "تلفن همراه" 
      : productType === "lapTop"
      ? "لپ تاپ" 
      : "ساعت هوشمند";

  return (
    <div>
      <MobileHeader title={title} />
      <MobileFilterModal />
      <div className="container mx-auto xl:max-w-screen-xl grid grid-cols-12 lg:grid-rows-[60px_minmax(500px,_1fr)] lg:gap-8 md:px-4 md:mt-6 mb-10 pb-10">
        <SideBar/>
        <SortBar searchBoxHandler={searchBoxHandler}/>
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
      </div>
      <MobileBottomNav />
    </div>
  );
}
