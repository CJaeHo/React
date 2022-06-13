import React,{ useState, useRef } from "react";
import '../App.css';

const FiveApp = () => {

    const [result,setResult]=useState('');
    const nameRef=useRef('');
    const korRef=useRef('');
    const engRef=useRef('');
    const matRef=useRef('');

    const buttonResult=()=>{
        // 데이타 읽어오기
        let name=nameRef.current.value;
        let kor=Number(korRef.current.value);
        let eng=Number(engRef.current.value);
        let mat=Number(matRef.current.value);   // Number는 int라고 생각하면 됨
        let tot=kor+eng+mat;
        let avg=(tot/3).toFixed(2);         // toFixed는 소수점 몇번째까지?

        let r=`[결과 확인]
        이름 : ${name}
        국어점수 : ${kor}
        영어점수 : ${eng}
        수학점수 : ${mat}
        총점 : ${tot}
        평균 : ${avg}`;
        
        setResult(r);

        // 포커스
        nameRef.current.value='';
        korRef.current.value='';
        engRef.current.value='';
        matRef.current.value='';
        nameRef.current.focus();
        
    }

    return (
        <div>
            <h3 className = "alert alert-danger">FiveApp 컴포넌트</h3>
            <h4>이름 입력 : <input type='text' ref={nameRef}/></h4>
            <h4>국어 점수 : <input type='text' ref={korRef}/></h4>
            <h4>영어 점수 : <input type='text' ref={engRef}/></h4>
            <h4>수학 점수 : <input type='text' ref={matRef}/></h4>
            <button type="button" className="btn btn-danger" onClick={buttonResult}>결과 확인</button>
            <h2 className="alert alert-info" style={{whiteSpace:'pre-wrap'}}>{result}</h2>
        </div>
    )
}

export default FiveApp;