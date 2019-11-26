import React from 'react';
import ShopCP from './shopCP/shopCP';
import CertificationMeans from './certificationMeans/certificationMeans';
import Header from "../about/aboutHeader/header"

function CertifiedProducts() {
    return (
        <div >
            <Header />
           <ShopCP />
           <CertificationMeans />
        </div>
    );
}

export default CertifiedProducts;