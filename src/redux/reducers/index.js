import { combineReducers } from "redux";
import { productReducer, selProdReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selProdReducer,
});
export default reducers;
