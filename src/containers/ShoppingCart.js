import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/actions/cartActions";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div className="ui grid container">
      <h2 className="cartHeading">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <div className="totalItems">Total Items: {totalItems}</div>
          <div className="ui relaxed divided list">
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <img
                  className="ui small image"
                  src={item.image}
                  alt={item.title}
                />
                <div className="content">
                  <div className="header">
                    {item.title} (Quantity: {item.quantity})
                  </div>
                  <div className="description">
                    Price:${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="ui red button"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="totalPrice">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null)(ShoppingCart);
