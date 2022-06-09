import React,{useState} from "react";




const ThreeApp=()=>{

    const [message,setMessage]=useState('마우스 위치 출력');

    // 이벤트
    const mouseEvent=(e)=>{
        let s=`마우스 위치 X:${e.pageX},Y:${e.pageY} 입니다`;               // 마우스 위치 따는거
        setMessage(s);
    }
    return(
        <div  onMouseOver={mouseEvent}>
            <h2 className="alert alert-danger">ThreeApp 컴포넌트인데!!!</h2>
            <br/><br/>
            <h1 className="alert alert-info">{message}</h1>
        </div>

    )
}

export default ThreeApp;