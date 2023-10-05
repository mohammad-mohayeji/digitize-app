import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import convertNumberToPersian from "./useConvertNumbersToPersian";
import useConvertNumbersToPersian from "./useConvertNumbersToPersian";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [products, setProducts] = useState([{ id: 1, category: "" }]);
  const [sortType, setSortType] = useState("mostPopular");
  const [priceRange, setPriceRange] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const increaseQuantityHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        icon: "success",
        title: "محصول به سبد خرید اضافه شد!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };

  const decreaseQuantityHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCartHandler = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id && item.category === product.category
    );
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  useConvertNumbersToPersian();

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        setCartItems,
        increaseQuantityHandler,
        decreaseQuantityHandler,
        removeFromCartHandler,
        priceRange,
        setPriceRange,
        products,
        setProducts,
        sortType,
        setSortType,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
