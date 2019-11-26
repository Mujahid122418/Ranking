import React from 'react';
import Research from './research/research';
import Header from "../about/aboutHeader/header";
import Products from './products/products';
import SeeYourProduct from './seeYourProduct/seeYourProduct';
import Summary from './summary/summary';

function Rankings() {
    return (
        <div>
            <Header />
            <Research />
            <Products />
            <SeeYourProduct />
            <Summary />
        </div>
    );
}

export default Rankings;
