import React from 'react';
import "./certificationMeans.css"

function CertificationMeans() {
  return (
    <div className="cm-container">

     <div className="cesmart-h">What does it mean to be certified?</div>
    <div className="cesmart-container">
      <div className="cesmart-c">
      <i class="	fa fa-flask cs-icon"></i>
        {/* <h5 className="cesmart-h5">Research before buying</h5> */}
        <p className="cesmart-p">For a product to be approved it must undergo a laboratory test.</p>
      </div>
      <div className="cesmart-c">
      <i class="fa fa-tint cs-icon"></i>
        {/* <h5 className="cesmart-h5">Understanding the differences</h5> */}
        <p className="cesmart-p">Products must be GMO & Pesticide Free. They should also not contain any trace of heavy metals</p>
      </div>
      <div className="cesmart-c">
      <i class="	fa  fa-comments cs-icon"></i>
        {/* <h5 className="cesmart-h5">Trust</h5> */}
        <p className="cesmart-p">The product must also undergo user trials to collate first hand reviews</p>
      </div>
      </div>

    </div>
  );
}

export default CertificationMeans;