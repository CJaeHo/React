import React from "react";
import '../App.css';
import titleimg from '../image/K-055.png';
import {NavLink} from 'react-router-dom'

const Title=()=>{




    return (
        <div><NavLink to="/">
            <img alt="" src={titleimg} style={{height:'150px'}}/>
            <b style={{fontSize:'20px', color:'green'}}>React + SpringBoot Project</b>
        </NavLink></div>
    )
}

export default Title;