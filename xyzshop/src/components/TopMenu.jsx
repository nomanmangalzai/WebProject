import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const TopMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-2">
        <ul>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/addtocart">Add to Cart</Link>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/adminpanel">Admin Panel</Link>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/not-found">NotFound</Link>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Link to="/login">Login</Link>
          </li>

          <li style={{ display: "inline", padding: "5px" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/sign-up")}
            >
              Signup
            </Button>
          </li>
          <li style={{ display: "inline", padding: "5px" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
