import React from 'react';
import img from "./images/infographic.png";
import img2 from "./images/small.png";

import "./style.css"

function InfoGraphic() {
  return (
    <div className="infographic-container">
      {/* <div className="info-c2">
        <div></div>
        <div></div>
       <span className="info-hr1"></span> */}
      <img className="info-img" src={img} alt=""/>
      <img className="info-img2" src={img2} alt=""/>
      {/* </div> */}
    </div>
  );
}

export default InfoGraphic;
