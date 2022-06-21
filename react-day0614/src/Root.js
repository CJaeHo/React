import React from "react";
import {BrowserRouter} from 'react-router-dom';
import RouterMain from "./RouterMain";
import './App.css';

const Root=()=>{
    return (
        <BrowserRouter>
            <RouterMain/>
        </BrowserRouter>
            // 항상 이렇게 적으면 됨
    )
}

export default Root;