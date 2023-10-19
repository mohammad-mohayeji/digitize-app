import { createContext, useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import useConvertNumbersToPersian from "./useConvertNumbersToPersian";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();
const initialState = {
  cart: [],
};

export default function GlobalContextProvider({ children }) {
  const [products, setProducts] = useState([{ id: 1, category: "" }]);
  const [sortType, setSortType] = useState("mostPopular");
  const [priceRange, setPriceRange] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const increaseQuantityHandler = (product) => {
    // const existingProduct = cartItems.find(
    //   (item) => item.id === product.id && item.category === product.category
    // );
    // if (existingProduct) {
    //   setCartItems(
    //     cartItems.map((item) =>
    //       item.id === product.id && item.category === product.category
    //         ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
    //         : item
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
    //   Swal.fire({
    //     icon: "success",
    //     title: "محصول به سبد خرید اضافه شد!",
    //     showConfirmButton: false,
    //     timer: 2500,
    //     timerProgressBar: true,
    //   });
    // }
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });
  };
  const decreaseQuantityHandler = (product) => {
    // const existingProduct = cartItems.find(
    //   (item) => item.id === product.id && item.category === product.category
    // );
    // if (existingProduct.quantity === 1) {
    //   setCartItems(cartItems.filter((item) => item.id !== product.id || item.category !== product.category));
    // } else {
    //   setCartItems(
    //     cartItems.map((item) =>
    //       item.id === product.id && item.category === product.category
    //         ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
    //         : item
    //     )
    //   );
    // }
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };
  const removeFromCartHandler = (product) => {
    // const existingProduct = cartItems.find(
    //   (item) => item.id === product.id && item.category === product.category
    // );
    // setCartItems(cartItems.filter((item) => item.id !== product.id));
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  useConvertNumbersToPersian();

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cart,
        // setCartItems,
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
