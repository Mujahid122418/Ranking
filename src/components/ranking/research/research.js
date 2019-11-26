import React from 'react';
import "./research.css";
import researchImg from "./logo.png"
function Research() {
    return (
        <div className="research-container">
            <div className="res-p-con">
                {/* <img className="res-img" src={researchImg} alt="" /> */}
                <p className="res-p">We are an independent association that verifies CBD products to determine whether the product is the real deal or just fancy labelling on some baby oil. Once we have researched and analysed them, we rank the products, so consumers can confidently buy legitimate and genuine CBD products.</p>
            </div>
            <div className="res-c">
                <div className="research">
                    <i class="fa fa-star-o res-icon"></i>
                    <p className="research-text">Rankings</p>
                </div>
                <div className="research2">
                    <i class="fa fa-search-plus res-icon2"></i>
                    <p className="research-text2">Research</p>

                </div>
            </div>
        </div>
    );
}

export default Research;
