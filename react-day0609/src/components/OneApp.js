import React, { useState } from "react";
import '../App.css';

const OneApp=()=>{

    const [number,setNumber]=useState(0);
    
    const numberIncre=()=>{
        if(number===10){
            alert("10까지만 증가됩니다");
            return;
        }
        setNumber(number+1);
    }
    const numberDecre=()=>{
        if(number===0){
            alert("더이상 감소되지 않습니다");
            return;
        }
        setNumber(number-1);
    }
    return(
        <div>
            <h3 className="alert alert-info">OneApp 컴포넌트인데!!!</h3>
            <div className="number">{number}</div>
            <button type="button" style={{marginLeft:'70px'}}
                onClick={numberIncre}>증가</button>
            <button type="button" style={{marginLeft:'10px'}}
                onClick={numberDecre}>감소</button>
        </div>
    )

}

export default OneApp;