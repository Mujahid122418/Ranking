import React from 'react';
import "./besmart.css"

function BeSmart() {
  return (
    <div className="besmart-container">
      
      <div className="besmart-c">
      <i className="fa fa-search-plus bs-icon"></i>
        <h5 className="besmart-h5">Research before buying</h5>
        <p className="besmart-p">Find quality CBD products with minimal effort. Our experts test products and publish results so you don’t have to</p>
      </div>
      <div className="besmart-c">
      <i className="fa fa-flask bs-icon"></i>
        <h5 className="besmart-h5">Understanding the differences</h5>
        <p className="besmart-p">Which products are effective and right for you? We give you the confidence to spend your money on the right CBD product for you.</p>
      </div>
      <div className="besmart-c">
      <i className="	fa fa-check-square-o bs-icon"></i>
        <h5 className="besmart-h5">Trust</h5>
        <p className="besmart-p">Our testing is conducted independently and not affiliated with any brand.</p>
      </div>

    </div>
  );
}

export default BeSmart;
