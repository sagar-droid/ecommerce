import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>E-commerce</h2>
        <div className="ui secondary menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/cart" className="item">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
