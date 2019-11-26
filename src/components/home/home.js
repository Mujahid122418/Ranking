import React from 'react';
import Header from './header/Header';
import BeSmart from "./besmart/besmart";
import LabdorWork from "./LabdoorWork/LabdorWork";
import ReadyToShop from './ReadyToShop/ReadyToShop';
// import MessageBox from "./messagebox/messageBox";
import TopBrands from './TopBrands/TopBrands';
import ActuallyInCBD from "./actualllyInCBD/ActuallyInCBD";

import "./style.css"
import InfoGraphic from './infographic/infographic';
function Home() {
  return (
    <div className="home-container">
      <div className="home-c2">
      <Header />
      <ActuallyInCBD />
      <InfoGraphic />
      {/* <MessageBox /> */}
      <BeSmart />
      <LabdorWork />
      <TopBrands />
      <ReadyToShop />
      </div>
    </div>
  );
}

export default Home;
