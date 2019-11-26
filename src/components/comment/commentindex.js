import React from 'react';
import FAQs from './faqs'
import "./faqs.css"

class FAQIndex extends React.Component{

    render(){
        console.log(this.props.comment)
        return(
            <section className="faq-section">
            <div className="faq-heading">
                
                <h2>Comment about Prodect</h2>
            </div>
            <div >
                {this.props.comment && this.props.comment.map((value,index)=>{
            return <FAQs collapseClass={"b"+index} question={value.massage} answer={value.user} />
          })}
            </div>
            </section>
        );
    }
}
export default FAQIndex;