import React, { Component } from "react";
import { Line } from "rc-progress";
import Circle from "react-circle";
import Comment from "../comments/comment";
import "./viewProduct.css";
import img from "./cbd.png";
import Rating from "./rating";
import Header from "../../about/aboutHeader/header";
import { connect } from "react-redux";
import { Url } from "../../../shared";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {withRouter} from "react-router-dom"
import Question from "../../comment/commentindex";

class ViewProduct extends Component {
  render() {
    
    if(!this.props.rows){
      this.props.history.push("/ranking")
    }
    const id = this.props.match.params.id;
      const products = this.props.rows && this.props.rows.filter(row => row._id === id);
    // console.log('product in row',this.props.rows)
    const product = products && products[0];

    const nmb = 21;
    let clr = "black";
    if (nmb > 20) {
      clr = "green";
    }
    if (nmb > 30) {
      clr = "blue";
    }
    if (id) {
      return (
        <div>
          <Header />
         {product && <div>
          <div className="vp-container">
            <div>
              <p className="vp-heading">{product.name}</p>
            </div>
            <div className="vp-c2">
              <div className="vp-img-area">
                <img
                  className="vp-img"
                  src={Url + "uploads/" + product.image}
                  alt=""
                />
                <button className="vp-but-btn">Buy it Now</button>
              </div>
              <div className="vp-img-area">
                <p className="vp-ranking-p">Ranking</p>
                <Circle
                  className="circle-bar"
                  progress={product.avgRating * 20}
                  size="200"
                />
              </div>
              <div className="vp-rating-area">
                <p className="vp-ranking-p"> Rate this Products</p>

                <Rating pid={product._id} />
              </div>
            </div>

            <div>
              <div className="cbd-prgrs-area">
                <p className="vp-cbd-title">CBD/Bottle</p>
                <span className="vp-bcd-found">Found</span>
                <span className="bar-txt">
                  {" "}
                  <Line
                    className="progress-bar1"
                    percent={`${product.CBD}`}
                    trailColor={clr}
                    strokeWidth="4"
                    strokeColor={clr}
                  />{" "}
                  {product.CBD}
                </span>
                <span className="vp-bcd-found">Claimed</span>
                <span className="bar-txt">
                  {" "}
                  <Line
                    className="progress-bar1"
                    percent={`${product.CBD1}`}
                    strokeWidth="4"
                  />{" "}
                  {product.CBD1}
                </span>
              </div>
              <div className="cbd-prgrs-area">
                <p className="vp-cbd-title">THC</p>
                <span className="vp-bcd-found">Found</span>
                <span className="bar-txt">
                  {" "}
                  <Line
                    className="progress-bar1"
                    percent={`${product.THC}`}
                    trailColor={clr}
                    strokeWidth="4"
                    strokeColor={clr}
                  />{" "}
                  {product.THC}
                </span>
                <span className="vp-bcd-found">FDA Limit</span>
                <span className="bar-txt">
                  {" "}
                  <Line
                    className="progress-bar1"
                    percent={`${product.THC1}`}
                    strokeWidth="4"
                  />{" "}
                  {product.THC1}
                </span>
              </div>
              <div className="cbd-prgrs-area">
                <p className="vp-cbd-title">heavy metals</p>
                <span className="vp-bcd-found">Found</span>
                <span className="bar-txt">
                  {" "}
                  <Line
                    className="progress-bar1"
                    percent={`${product.heavyMetals}`}
                    trailColor={clr}
                    strokeWidth="4"
                    strokeColor={clr}
                  />
                  {product.heavyMetals}
                </span>
                <span className="vp-bcd-found">Claimed</span>
                <span className="bar-txt">
                  <Line
                    className="progress-bar1"
                    percent={`${product.heavyMetals1}`}
                    strokeWidth="4"
                    s
                  />
                  {product.heavyMetals1}
                </span>
              </div>
            </div>
          </div>

          <div className="comment">
            <Comment comment={product.comment} />
          </div>
          </div>}
        </div>
      );
    } else {
      return (
        <div className="loader-my">
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />{" "}
        </div>
      );
    }
  }
}

const mapStateToProps = ({ Foods: { foods } }) => ({
  rows: foods
});

export default connect(mapStateToProps, null)(withRouter(ViewProduct));
