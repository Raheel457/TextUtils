import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Fab from "@mui/material/Fab";

function Nav(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode ? "dark":"light"} bg-${props.mode ? "dark":"light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TextUtils
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <div style={{ marginLeft: 1600 }}>
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
