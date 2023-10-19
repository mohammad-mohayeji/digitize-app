import Swal from "sweetalert2";

export default (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY": {
      const existingProduct = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.category === action.payload.category
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === action.payload.id &&
            item.category === action.payload.category
              ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
              : item
          ),
        };
      } else {
        Swal.fire({
          icon: "success",
          title: "محصول به سبد خرید اضافه شد!",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
        return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    }
    case "DECREASE_QUANTITY": {
      const existingProduct = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.category === action.payload.category
      );
      if (existingProduct.quantity === 1) {
        return {
          cart: state.cart.filter(
            (item) =>
              item.id !== action.payload.id ||
              item.category !== action.payload.category
          ),
        };
      } else {
        return {
          cart: state.cart.map((item) =>
            item.id === action.payload.id &&
            item.category === action.payload.category
              ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
              : item
          ),
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const existingProduct = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.category === action.payload.category
      );
      return {
        cart: state.cart.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.category !== action.payload.category
        ),
      };
    }
    default: {
      return state;
    }
  }
};
