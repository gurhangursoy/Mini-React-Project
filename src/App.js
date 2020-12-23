import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import PRODUCT_LIST from "./data/product_list.js";

export default function App() {
  const cardList = PRODUCT_LIST.map(item => (
    <div className={`col-sm-4 mb-2`}>
      <Card item={item} />
    </div>
  ));
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">{cardList}</div>
      </div>
      <Footer />
    </div>
  );
}
