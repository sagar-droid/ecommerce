import { combineReducers } from "redux";
import { productReducer, selProdReducer } from "./productReducer";
import cartReducer from "../reducers/cartReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selProdReducer,
  cart: cartReducer,
});
export default reducers;
