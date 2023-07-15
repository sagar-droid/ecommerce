import { ActionTypes } from "../contents/actionTypes";

export const setProd = (products) => {
  return {
    type: ActionTypes.SET_PROD,
    payload: products,
  };
};
export const selProd = (product) => {
  return {
    type: ActionTypes.SEL_PROD,
    payload: product,
  };
};
