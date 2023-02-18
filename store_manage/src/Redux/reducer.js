import { quantity } from "./action";
import * as types from "./actionTypes";

const initialState = {
  products: [],
  selectedProduct: {},
  cart: [],
  quantity: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case types.GET_ALL_PRODUCT_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case types.GET_PRODUCTBYID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTBYID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedProduct: payload,
      };
    case types.GET_PRODUCTBYID_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case types.GET_ADDTOCART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ADDTOCART_SUCCESS:

      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);

      if (itemIndex >= 0) {
        state.quantity += 1;
      } else {
        return {
          ...state,
          isLoading: false,
          cart: [...state.cart, payload],
        };
      }

    case types.GET_ADDTOCART_FAILURE:
      return {
        ...state,
        isError: true,
      };

    // case types.ADD_ONE:
    //   const selectItem = state.cart.findIndex((item) => item.id === payload.id);
    //   console.log("selectItem", selectItem);

    //   // if (selectItem >= 0) {
    //   //   state.cart[selectItem].quantity =
    //   //     Number(state.cart[selectItem].quantity) + 1;
    //   // } else {
    //   //   return {
    //   //     ...state,
    //   //     isLoading: false,
    //   //     cart: [...state.cart, payload],
    //   //   };
    //   // }

    //   if (selectItem >= 0) {
    //     state.quantity = Number(state.quantity) + 1;
    //     return {
    //       ...state,
    //       isLoading: false,
    //       quantity:
    //     };
    //     console.log("this si the value of quantity", state.quantity);
    //   } else {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       cart: [...state.cart, payload],
    //     };
    //   }

    // case types.REMOVE_ONE:
    //   const itemIndex_dec = state.cart.findIndex(
    //     (item) => item.id === payload.id
    //   );

    //   // if (state.cart[itemIndex_dec].quantity >= 1) {
    //   //   const dltItem = Number(state.cart[itemIndex_dec].quantity) - 1;
    //   //   console.log([...state.cart, dltItem]);
    //   // }

    //   if (state.quantity >= 1) {
    //     const dltItem = Number(state.quantity) - 1;
    //     console.log([...state.cart, dltItem]);
    //   }

    case types.ADD_ONE:
      return {
        ...state,
        quantity: Number(state.quantity) + 1,
      };

    case types.REMOVE_ONE:
      return {
        ...state,
        quantity: Number(state.quantity) - 1,
      };

    case types.QUANTITY:
      return {
        ...state,
        quantity: payload,
      };

    case types.DELETE_PRODUCT:
      let remainData = state.cart.filter((item) => item.id !== payload.id);
      return {
        ...state,
        cart: remainData,
      };

    default:
      return state;
  }
};
