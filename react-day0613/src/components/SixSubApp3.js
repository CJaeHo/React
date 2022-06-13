import React,{useRef, useState} from "react";

//const SixSubApp3 = (props) => {
const SixSubApp3=({incre,decre})=>{    

    return (
        <div>
            <button type="button" className="btn btn-info" style={{marginLeft:'60px'}}
                onClick={()=>{
                    //props.decre();  // 부모 컴포넌트의 이벤트를 발생시키겠다
                    decre();        // 부모의 데이타를 받을 때 porps로 안받고 각각 받으면 props빼고 적어주기
                }}>
            감소</button>
            <button type="button" className="btn btn-info" style={{marginLeft:'60px'}}
                onClick={()=>{
                    //props.incre();  // 부모 컴포넌트의 이벤트를 발생시키겠다
                    incre();           // 부모의 데이타를 받을 때 porps로 안받고 각각 받으면 props빼고 적어주기
                }}>
            증가</button>            
        </div>
    )
}

export default SixSubApp3;