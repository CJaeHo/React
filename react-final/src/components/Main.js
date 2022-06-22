import React from "react";
import '../App.css';
import mainimg1 from '../image/1.jpg';
import mainimg2 from '../image/2.jpg';

const Main=()=>{




    return (
        <div>
            <h1>배고프시죠?</h1>
            <img alt="" src={mainimg1} className='mainphoto'/>   
            <img alt="" src={mainimg2} className='mainphoto'/>            
        </div>
    )
}

export default Main;