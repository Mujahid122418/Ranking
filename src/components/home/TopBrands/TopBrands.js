import React from 'react';
import logo1 from "./images/logo1.jpg";
import logo2 from "./images/logo2.jpg";
import "./style.css"
function TopBrands() {
  return (
    <div className="tb-logo-area">
      <p className="top-brands-title">Listing some of the UK’s Top Brands:</p>
      <div className="tb-logo-area2">
        <img className="logo-logo" src={logo1} alt=""/>
        <img className="logo-logo" src={logo2} alt=""/>
      </div>
    </div>
  );
}

export default TopBrands;
