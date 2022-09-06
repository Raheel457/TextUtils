import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode ? "dark" : "light"
      } bg-${props.mode ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <div style={{ marginLeft: 1600 }}> */}
          <div className="my-2 my-lg-0">
            <Fab onClick={() => props.toggleMode()}>
              {props.mode ? <LightModeIcon /> : <DarkModeIcon />}
            </Fab>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
