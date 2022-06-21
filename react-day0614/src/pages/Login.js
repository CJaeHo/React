import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom';

const Login=()=>{

    const {num}=useParams('');


    return (
        <div>
            <h3>{num}번째 로그인입니다</h3>
            <img alt="" src="../image/1.jpg" className="food_img"/>
            <h3>냥</h3>
        </div>
    )
}

export default Login;