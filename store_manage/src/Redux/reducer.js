import * as types from "./actionTypes";

const initialState = {
  products: [],
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
        products: payload,
      };
    case types.GET_PRODUCTBYID_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
