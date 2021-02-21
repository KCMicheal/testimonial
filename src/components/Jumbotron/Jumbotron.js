import React from 'react';
import blackgirls from '../images/black-beautiful-ladies-smiling 1.png';
import testimonialimage from '../images/Testimonialimage1.png';

const Jumbotron = () => {
    return (
        <>
        <div className="flex flex-nowrap">
            <div className="item pr6 pl6 mt6">
                <h1>Amazing Experiences from Our Wonderful Customers</h1>
                <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className="item ">
                <img src={testimonialimage} className="w-100 h7 mt4"/>
            </div>
           
        </div> 
        <div className="flex bg-black w-100">
                <div className="flex-item">
                    <img src={blackgirls} className="pr5 pl6 mt4"/>
                </div>
                <div className="flex-item white color">
                    <h2 className="mt6">Tolu & Joy’s Experience</h2>
                    <label className="border-box ba pa1">CUSTOMER</label>
                    <p className="mt5 measure max-width">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                </div>
            </div>
       </>
    )
}

export default Jumbotron;
