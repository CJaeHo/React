import React,{useState} from "react";
import '../App.css';

const SixSubApp2 = ({flower,price,linecolor}) => {          // 부모데이터를 출력만 가능, 변경 불가능
    return (
        <div>
            <div className="line" style={{borderColor:linecolor}}>
                {flower} 1단의 가격은 {price}원 입니다
            </div>
        </div>
    )
}

export default SixSubApp2;