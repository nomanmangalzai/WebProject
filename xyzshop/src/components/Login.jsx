import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as Yup from "yup"; //  Yup libRARY IS used for validation
import axios from "axios"; // Used for integration of APIs
import { Formik } from "formik";
import HomePage from "./HomePage";
import { elementTypeAcceptingRef } from "@mui/utils";

let data = {};

export default function Login(props) {
  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("password"),
    // confirmPassword: Yup.string()
    // //   .required()
    //   .oneOf([Yup.ref("password"), null], "password must match!"),
  });

  const Login = (formData) => {
    axios({
      method: "post",
      url: "/authUser/login",
      data: {
        email: formData.email,
        password: formData.password,
      },
    })
      .then((res) => {
       
        // console.log("Response is: ", res);
        console.log("Response Message: ", res.data.message);

        if (res.data.message === "Congratualtions! You have logged in") {
          const msg = res.data.message;
          document.getElementById("passworderrordiv").innerHTML = msg;

          return navigate("/homepage");
        } else {
          document.getElementById("passworderrordiv").innerHTML =
            res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="signup container form-group signupcontainer">
        <h1>Log in to your account</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(formData) => Login(formData)}
          validationSchema={validateSchema}
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
                required
                type="text"
                className=""
                id="email"
                placeholder="Enter Email"
                style={allStyles.input}
                onChange={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && <p style={styling}>{errors.email}</p>}
              <br />
              <input
                required
                type="password"
                id="password"
                placeholder="Enter Password"
                style={allStyles.input}
                onChange={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && <p style={styling}>{errors.password}</p>}
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
                Login
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

const styling = {
  color: "red",
  marginLeft: 65,
  fontSize: 15,
  fontFamily: "sans-serif",
};
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
// ////////////////////////////////////////////////////////////

//         <label className="badge badge-info" for="email">
//           Email address
//         </label>
//         <br></br>
//         <input
//           type="email"
//           placeholder="@example.com"
//           id="email"
//           size="30"
//         ></input>
//         <br></br>
//         <label className="badge badge-info" for="password">
//           Password
//         </label>
//         <br></br>
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           size="30"
//         ></input>
//         <br></br>
//         <label className="badge badge-info" for="password">
//           Confirm your password
//         </label>
//         <br></br>
//         <input
//           type="password"
//           placeholder="confirm your password"
//           id="confirmyourpassword"
//           size="30"
//         ></input>
//         <br></br>
//         <br></br>
//         <button variant="success" className="btn btn-primary">
//           Sign up
//         </button>
//       </form>
//     </div>
//   )
// }

// function Login() {
//   return (
//     <div className="Login container">
//       <h1>Welcome to Login</h1>
//       <label  className="badge badge-info" for="email">Email address</label><br></br>
//       <input type="email" placeholder="@example.com" id="email" size="30"></input><br></br>
//       <label className="badge badge-info" type="password" for="password" >Password</label><br></br>
//       <input type="password" placeholder="password" id="password" size="30"></input>
//     </div>
//   )
// }

// export {
//   Login
// };
