import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [products, setProducts] = useState([{ id: 1, category: "" }]);
  const [productsData, setProductsData] = useState([{ id: 1, category: "" }]);
  const [priceRange, setPriceRange] = useState("any");

  const [cartItems, setCartItems] = useState([]);

  const increaseQuantityHandler = (prodcut) => {
    const existingProduct = cartItems.find(
      (item) => item.id === prodcut.id && item.category === prodcut.category
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === prodcut.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...prodcut, quantity: 1 }]);
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
          item.id === product.id
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

  useEffect(() => {
    // create a function that check if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("any");
    };

    // get first value of number and parse it to number
    const minPrice = parseInt(priceRange.split(" ")[0]);

    // get second value of number (which is the maximum) and parse it to number
    const maxPrice = parseInt(priceRange.split(" ")[2]);

    const newProducts = productsData.filter((product) => {
      // if all values are default
      if (isDefault(priceRange)) {
        return product;
      }

      // if price is not default
      if (!isDefault(priceRange)) {
        if (product.price >= minPrice && product.price <= maxPrice) {
          return product;
        }
      }
    });

    setProducts(newProducts);
  }, [priceRange]);

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
        productsData,
        setProductsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
