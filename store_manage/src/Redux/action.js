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

export const getFilterProduct = (params) => (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCT_REQUEST });
  return axios
    .get(`https://fakestoreapi.com/products/category/${params.category}`, {
      params,
    })
    .then((res) => {
      dispatch({ type: types.GET_ALL_PRODUCT_SUCCESS, payload: res.data });
      return types.GET_ALL_PRODUCT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_PRODUCT_FAILURE });
      return types.GET_ALL_PRODUCT_FAILURE;
    });
};

export const getProductById = (id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTBYID_REQUEST });
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTBYID_SUCCESS, payload: res.data });
      return types.GET_PRODUCTBYID_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTBYID_FAILURE });
      return types.GET_PRODUCTBYID_FAILURE;
    });
};

export const addToCart = (id, quantity) => (dispatch) => {
  dispatch({ type: types.GET_ADDTOCART_REQUEST });
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      dispatch({
        type: types.GET_ADDTOCART_SUCCESS,
        payload: { ...res.data, quantity },
      });
      return types.GET_ADDTOCART_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.GET_ADDTOCART_FAILURE });
      return types.GET_ADDTOCART_FAILURE;
    });
};

export const addOne = (ele) => (dispatch) => {
  return dispatch({ type: types.ADD_ONE, payload: ele });
};

export const removeOne = () => (dispatch) => {
  return dispatch({ type: types.REMOVE_ONE });
};

export const quantity = (quantity) => (dispatch) => {
  return dispatch({ type: types.QUANTITY, payload: quantity });
};

export const removeProduct = (id) => (dispatch) => {
  return dispatch({ type: types.DELETE_PRODUCT, payload: id });
};
