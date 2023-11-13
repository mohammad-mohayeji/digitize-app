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
  const [loading, setLoading] = useState(false)
  const [sortType, setSortType] = useState("mostPopular");
  const [priceRange, setPriceRange] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const increaseQuantityHandler = (product) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: product,
    });
  };
  const decreaseQuantityHandler = (product) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };
  const removeFromCartHandler = (product) => {
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
        loading,
        setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
