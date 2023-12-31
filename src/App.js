import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import "./App.css";
import ShoppingCart from "./containers/ShoppingCart";
import ReactGA from "react-ga4";

ReactGA.initialize("UA-284842417-1");

ReactGA.send({
  hitType: "pageview",
  page: "https://ecommerce-tawny-seven.vercel.app/",
  title: "Custom Title",
});

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
