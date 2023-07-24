// src/redux/cartActions.js
import axios from "axios";

export const fetchItemsRequest = () => {
  return {
    type: "FETCH_ITEMS_REQUEST",
  };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: items,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: "FETCH_ITEMS_FAILURE",
    payload: error,
  };
};

export const addItemSuccess = (product) => {
  return {
    type: "ADD_ITEM_SUCCESS",
    payload: product,
  };
};

export const deleteItemSuccess = (itemId) => {
  return {
    type: "DELETE_ITEM_SUCCESS",
    payload: itemId,
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    axios
      .get("your_api_url_here")
      .then((response) => {
        dispatch(fetchItemsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchItemsFailure(error.message));
      });
  };
};

export const addItem = (product) => {
  return (dispatch) => {
    dispatch(addItemSuccess(product));
  };
};

export const deleteItem = (itemId) => {
  return (dispatch) => {
    dispatch(deleteItemSuccess(itemId));
  };
};
