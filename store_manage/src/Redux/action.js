import axios from "axios";
import * as types from "./actionTypes";

export const getAllProduct = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCT_REQUEST });
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch({ type: types.GET_ALL_PRODUCT_SUCCESS, payload: res.data });
      return types.GET_ALL_PRODUCT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_PRODUCT_FAILURE });
      return types.GET_ALL_PRODUCT_FAILURE;
    });
};
