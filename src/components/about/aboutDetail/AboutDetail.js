import React from 'react';
import "./AboutDetail.css"


function AboutDetail() {
    return (
        <div className="aboutdt-container">
            <div className="abt-c2">

                <div className="about-section">
                    <h2 className="aboutd-heading">About Us</h2>
                    <p>Search for CBD Oil on Amazon and you’ll get hundreds of results. It will take forever to try and find a winner, trust us, we’ve been there. No need to spend your money or time trying to find an approved CBD brand, we’ve done this for you. </p>
                    <p>The CBD Trust was put together for this very purpose.</p>
                    <p>We are an independent association that tests CBD products to determine whether the product is the real deal or just fancy labelling on some baby oil. Once we have tested them, we grade and rank the products, so consumers can confidently buy legitimate and genuine CBD products.</p>
                </div>

                <div className="about-section">
                    <h2 className="aboutd-faq">FAQ:</h2>
                    <h4>How does the CBD Trust test products?</h4>
                    <p>We send a sample of each CBD product to a laboratory for a detailed chemical analysis in addition to acquiring lab results from brands on their products. Once obtained, we publish these results for consumers to see</p>
                    <h4>How does the CBT Trust grade products?</h4>
                    <p>We determine a quality score for each product based on their lab results and consumer reviews. </p>
                    <h4>How does the CBD Trust decide what products to test?</h4>
                    <p>We pick products based on research in the growing market- what products are being discussed currently by consumers.</p>
                    <h4>Still have questions?</h4>
                    <p>Ask us!</p>
                </div>

                <div className="about-section">
                    <h2>HOW WE TEST:</h2>
                    <h4>How we select the products we want to test.</h4>
                    <p>We select CBD products based on current trends within the market and products that are gaining popularity and in discussion</p>
                    <h4>We request samples from the company.</h4>
                    <p>We are given samples through major retail and online stores.</p>
                    <h4>We collect testing data.</h4>
                    <p>Lab based tests are performed on samples of each product. Analyses include measurements of active CBD, THC, Solvents and any Heavy metals</p>
                    <h4>Then we rank</h4>
                    <p>We then give the product a score on Quality vs the product label’s claim, including price range. We provide lab results of all products tested to ensure transparency for consumers when purchasing. Our goal is for consumers to know what they are buying and how genuine the product is- especially in this growing market where many claims are made</p>
                </div>

                <div className="about-section">
                    <h2>OUR GOLDEN RULES:</h2>
                    <ul>

                        <li>We will never sell a product without testing it and providing results.</li>
                        <li>We will never favour specific brands- That’s for the consumer to decide.</li>
                        <li>We aim to empower the consumer in deciding what brand or product to purchase, for their need.</li>
                    </ul>
                </div>


                <div className="about-section">
                    <h2>CERTIFIED PRODUCTS</h2>
                    <p>The CBD Trust’s certified products have undergone rigorous tests and extensive research has been done through customer surveys and manufacturers surveys to ensure they meet the criteria to be an approved and certified brand. Manufacturers can submit products to be certified- they will go through the same vigorous testing process. The results are then shared on our data base-regardless of whether products pass or fail, to ensure transparency throughout</p>

                    <h4>What does it mean to be certified?</h4>
                    <ul>
                        <li>	For a product to be approved it must undergo a laboratory test.</li>
                        <li>	Products must be GMO & Pesticide Free. They should also not contain any trace of heavy metals</li>
                        <li>	The product must also undergo user trials to collate first hand reviews </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutDetail;
