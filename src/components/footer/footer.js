import React from 'react';
import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
    return (
        <div className="footer" >
            <div className="footer-container2" >
                <div className="logoes" >
                    {/* <i class="fa fa-facebook f-icon"  aria-hidden="true" > </i>
                    <i class="fa fa-twitter f-icon" aria-hidden="true" > </i> */}
                    <i class="fa fa-instagram f-icon" aria-hidden="true" > </i>
                </div>
                <div className="footer-c3">
                    <div className="left-footer" >
                        <p className="footer-p" > THE PROJECT </p>
                        <Link className="footer-link" to="/" > About us </Link>
                        <Link className="footer-link" to="/" > Certified Products </Link>
                        <Link className="footer-link" to="/" > Contact us </Link>
                        <Link className="footer-link" to="/" > FAQ </Link>
                    </div>
                    <div className="left-footer" >
                        <p className="footer-p" > LEGAL </p>
                        <Link className="footer-link" to="/" > Privacy Policy </Link>
                        <Link className="footer-link" to="/" > Terms </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;