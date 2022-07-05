import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios"; // Used for integration of APIs
import { Formik } from "formik";

let data = {};

export default function StoreItem(props) {
  const navigate = useNavigate();

  const StoreItem = (formData) => {
    axios({
      method: "post",
      url: "/item/add-item",
      data: {
        itemName: formData.itemName,
        itemPrice: formData.itemPrice,
      },
    })
      .then((res) => {
        // console.log("Response is: ", res);
        console.log("Response is: ", res);
        {
          document.getElementById("passworderrordiv").innerHTML =
            res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("formData", formData);
  };

  return (
    <>
      <div className="signup container form-group signupcontainer">
        <h1>Add Item</h1>
        <Formik
          initialValues={{
            itemName: "",
            itemPrice: "",
          }}
          onSubmit={(formData) => StoreItem(formData)}
        >
          {({
            handleSubmit,
            handleChange,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <input
                type="text"
                className=""
                id="Name"
                placeholder="Enter item Name"
                style={allStyles.input}
                onChange={handleChange("itemName")}
                onBlur={() => setFieldTouched("itemName")}
              />

              <br />
              <input
                required
                type="Number"
                id="price"
                placeholder="Enter item Price"
                style={allStyles.input}
                onChange={handleChange("itemPrice")}
                onBlur={() => setFieldTouched("itemPrice")}
              />

              <br />

              <br />
              <br />

              <Button
                style={{}}
                variant="contained"
                id="submit-form"
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Add
              </Button>
              <br />
              <br />

              <div id="passworderrordiv"></div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}

const allStyles = {
  input: {
    width: "40%",
    height: 40,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 15,
    margin: "5px",
  },
};
