import React from "react";
import yingyang from "../images/yinyang.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="fluid">
        <div className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={yingyang} alt="Logo" />
          <span>
            Tus
            <strong>Agradecimientos</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
