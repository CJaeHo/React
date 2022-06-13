import React,{useRef, useState} from "react";

const SixSubApp = (props) => {
    console.dir(props);
    
    return (
        <div>
            <div className="line">{props.name} 님의 나이는 {props.age}세 입니다.</div>
        </div>
    )
}

export default SixSubApp;