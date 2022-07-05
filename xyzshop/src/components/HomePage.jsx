import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import sofa from "../images/sofa1.jfif";
import chair from "../images/chair.jfif";
import thorn from "../images/thorn.jfif";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

let data1 = [];
const HomePage = () => {
  const [rec, setRec] = useState();
  const navigate = useNavigate();

  const linkingData = () => {
    navigate("./addtocart", { state: { Price: "100", Name: "Shirt" } });
  };
  //get-items-to-homepage API is called while reloading home page.
  const Getdata = () => {
    axios({
      method: "get",
      url: "/item/get-items-to-homepage",
      data: {},
    }).then((response) => {
      console.log("response is :", response);
      data1 = response.data.storedItems;
      setRec(data1);
    });
  };

  useEffect(() => {
    Getdata();
  }, []);

  // const DeleteData = ()=>{
  //   axios({
  //     method: "delete"
  //     url:"/item/get-items-to-homepage"
  //   })
  // }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {data1.map((item) => {
            return (
              <div className="col-4">
                <img src={sofa} alt="Sofa" />
                <br></br>
                <h1>{item.ItemName}</h1>
                <h2>{item.ItemPrice}$</h2>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    linkingData();
                  }}
                >
                  +Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
