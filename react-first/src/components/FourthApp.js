import React,{useState} from "react";



const FourthApp=()=>{
    
    const [name,setName]=useState(['떡상이']);
    const [age,setAge]=useState(23);    





    return(
        <div>
            <h2 className="alert alert-danger">Fourth 이무니당
                <img src="../s1.JPG" alt="" className="img-circle" style={{width:'40px'}}/>
            </h2>
            <b style={{fontSize:'30px', fontFamily:'Noto Sans KR'}}>
                이 름 : {name}&emsp;나이 : {age}세             {/* &emsp; -> 4칸, &nbsp; -> 1칸, &ensp; -> 2칸*/}
            </b>
            <br/><br/>
            <button type="button" className="btn btn-default" style={{marginLeft:'50px'}}
                onClick={()=>{
                    setName("급등이");
                    setAge(30);
                }}>값 변경</button>
            <button type="button" className="btn btn-default" style={{marginLeft:'20px'}}
                onClick={()=>{
                    setName("폭락이");
                    setAge(0);
                }}>초기화</button>
            <hr/>
        </div>
    )
}

export default FourthApp;



