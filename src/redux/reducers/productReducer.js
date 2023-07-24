import { ActionTypes } from "../contents/actionTypes";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROD:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selProdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEL_PROD:
      return { ...state, ...payload };
    case ActionTypes.REM_SEL_PROD:
      return {};
    default:
      return state;
  }
};
