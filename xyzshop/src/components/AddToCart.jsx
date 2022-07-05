import React, { useEffect, useRef } from "react";
import chair from "../images/chair.jfif";
import { useLocation } from "react-router-dom";

const AddToCart = () => {
  const location = useLocation();

  // console.log("price is :", location.state.Name);

  return (
    <div>
      <div className="container">
        <h1 className="h1">
          You have selected the following products for purchase:
        </h1>
        <div className="row">
          <div className="col-12"></div>
          <div className="col-6">
            <img src={chair} alt="Here goes chair pictures" />
            <h1>Name: Chair</h1>
            <h2>Price: 50$</h2>
            <button className="btn btn-success">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
