import React from "react";
import '../App.css';
import infoimg from '../image/popup5.jpg';

const Info=()=>{




    return (
        <div>
            <img alt="" src={infoimg} style={{width:'200px'}}/>
            <br/>
            <div>
                <span className="glyphicon glyphicon-home" style={{fontSize:'20px'}}></span>
                &nbsp;비트캠프<br/>
                <span className="glyphicon glyphicon-phone" style={{fontSize:'20px'}}></span>
                &nbsp;070-1234-1234
            </div>
        </div>
    )
}

export default Info;