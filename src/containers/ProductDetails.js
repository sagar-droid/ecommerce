import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { selProd, remSelProd } from "../redux/actions/productActions";
import { addItem } from "../redux/actions/cartActions";
const ProductDetails = ({ addItem }) => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const handleBuyItem = () => {
    addItem(product);
  };

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selProd(response.data));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }

    return () => {
      dispatch(remSelProd());
    };
  }, [productId, dispatch]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="ui vertical divider">AND</div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  onClick={handleBuyItem}
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(ProductDetails);
