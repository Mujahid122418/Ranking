
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import "./faqs.css"
const FAQs = (props) => {
    const [collapse, setCollapse] = useState(false);

    const toggleClass=()=>{
        var toggleDiv=document.querySelector("."+props.collapseClass);
        var classes=toggleDiv.classList;
        console.log(classes);
        if(classes.contains("collaps")){
            classes.remove("collaps");
        }
        else{
            classes.add("collaps");
        }
       
    }
    const toggle = () =>{ setCollapse(!collapse);
    toggleClass();

}
    return (
        
            <div className="container">
                <div className="faq ">
                    <div className="col-lg-12">
                        <div className="faq-toggle">
                            <div className="toggle-div" onClick={toggle}>
                                <h5 className={"plus-minus-toggle "+props.collapseClass}>{props.question}</h5>
                            </div>
                            <Collapse isOpen={collapse}>
                                <p>User Name : <span style={{color:"green"}}>
                                    {props.answer}
                                    
                                    </span> 
                                    </p>
                            </Collapse>
                        </div>

                    </div>
                </div>
            </div>
            
    );
}

export default FAQs;