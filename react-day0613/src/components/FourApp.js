import React,{useState,useRef} from "react";
import '../App.css';


// useRef란 : 변수를 관리하는 기능임
// state와 차이점은 값이 변경되어도 다시 랜더링하지 않는 점


const FourApp = () => {

    const [count,setCount]=useState(0);
    // ref 선언하는 방법
    const countRef=useRef(0);

    // state 변수 증가하는 함수 설정하기
    const stateIncre=()=>{
        setCount(count+1);
    }

    // ref 변수 증가하는 함수 설정하기
    const refIncre=()=>{
        countRef.current=countRef.current+1;            // .current를 붙이면 countRef의 지금 현재의 값을 의미하게됨
        console.log("countRef="+countRef.current);      // 증가하는지 확인하기
                    // 눌러도 랜더링이 되지않아서 오르지않음.. 값은 증가되는건데 보이는게 오르지않는거임
    }

    return (
        <div>
            <h3 className = "alert alert-info">FourApp 컴포넌트-useRef</h3>
            <button type="button" className="btn btn-danger" 
                onClick={stateIncre}>state 변수 증가</button>
            <div className="number">{count}</div>
            <hr/>
            <button type="button" className="btn btn-success" 
                onClick={refIncre}>ref 변수 증가</button>
            <div className="number">{countRef.current}</div>
        </div>
    )
}

export default FourApp;