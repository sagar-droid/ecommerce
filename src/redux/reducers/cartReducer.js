// src/redux/cartReducer.js
const initialState = {
  items: [],
  loading: false,
  error: null,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESS":
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity of the existing item
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + newItem.price,
        };
      } else {
        // If the item is new, add it to the cart
        newItem.quantity = 1;
        return {
          ...state,
          items: [...state.items, newItem],
          totalPrice: state.totalPrice + newItem.price,
        };
      }
    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "FETCH_ITEMS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ITEMS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
