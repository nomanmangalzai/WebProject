import React from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup"; //  Yup libRARY IS used for validation
import axios from "axios"; // Used for integration of APIs
import { Formik } from "formik";

let data = {};

export default function SignUp(props) {
  const validateSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "password must match!"),
  });

  const SignUp = (formData) => {
    axios({
      method: "post",
      url: "/authUser/sign-up",
      data: {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      },
    })
    
      .then((res) => {
        // console.log("Response is: ", res);
        console.log("Response Message: ", res.data.message);
        if (res.data.message === "Password and confrim password dont match!") {
          const msg = res.data.message;
          return (document.getElementById("passworderrordiv").innerHTML = msg);
        } else if (res.data.message === "user already exists!") {
          const msg = res.data.message;
          return (document.getElementById("passworderrordiv").innerHTML = msg);
        } else if (res.data.message === "User registered successfully!") {
          const msg = res.data.message;
          return (document.getElementById("passworderrordiv").innerHTML = msg);
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="signup container form-group signupcontainer">
        <h1>Create an account</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(formData) => SignUp(formData)}
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
              <input
                required
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                style={allStyles.input}
                onChange={handleChange("confirmPassword")}
                onBlur={() => setFieldTouched("confirmPassword")}
              />
              {touched.confirmPassword && (
                <p style={styling}>{errors.confirmPassword}</p>
              )}
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
                Sign up
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
