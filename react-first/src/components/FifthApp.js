import React,{useState} from "react";
import './MyStyle.css';


const FifthApp=()=>{

    const [name,setName]=useState("");
    const [java,setJava]=useState(0);
    const [spring,setSpring]=useState(0);
    const [total,setTotal]=useState(0);
    const [avg,setAvg]=useState(0);



    return(
        <div>
            <h2 className="alert alert-info">Fifth 임니닷</h2>


            <div className="inp">
                <h1> 이 름 :&emsp;<input type="text" style={{width:'150px'}}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>&ensp;{name}</h1>

                <h1> 자 바 :&emsp;<input type="text" style={{width:'150px'}}
                    onChange={(e)=>{
                        setJava(e.target.value);
                    }}/>&ensp;{java}</h1>

                <h1> 스프링 :&emsp;<input type="text" style={{width:'150px'}}
                    onChange={(e)=>{
                        setSpring(e.target.value);
                    }}/>&ensp;{spring}</h1>

                <button type="button" className="btn btn-info rsbtn" style={{marginLeft:'200px', width:'150px'}}
                    onClick={()=>{
                        setTotal(Number(java)+Number(spring));
                        setAvg((Number(java)+Number(spring))/2);

                    }}>결과확인</button>   
            </div>

            

            <div className="result">
                <h1> 이 름 :&emsp;{name}</h1>

                <h1> 자 바 :&emsp;{java}점</h1>

                <h1> 스프링 :&emsp;{spring}점</h1>

                <h1> 총점 :&emsp;{total}점</h1>

                <h1> 평균 :&emsp;{avg}점</h1>


            </div>
        </div>
        



    )

}


export default FifthApp;