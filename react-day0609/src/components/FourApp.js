import React,{useState} from "react";
import '../App.css';

// 이미지 5개
import img1 from '../image/s3.JPG';
import img2 from '../image/s4.JPG';
import img3 from '../image/s5.JPG';
import img4 from '../image/s6.JPG';
import img5 from '../image/s7.JPG';



const FourApp=()=>{

    const [first,setFirst]=useState("010");
    const [second,setSecond]=useState("0000");
    const [third,setThird]=useState("0000");

    const [photo,setPhoto]=useState(1);

    const changePhoto=(e)=>{
        setPhoto(Number(e.targt.value));
    }
    

    // const input1=(e)=>{
    //      setSecond(e.target.value);
    // }        직접주지않을꺼면 이렇게 적어주면 됨!!!!!

    return(

       


        <div>
            <h2 className="alert alert-info">FourApp 컴포넌트인데!!!</h2>
        
            <div style={{fontSize:'30px'}}>
                <select onChange={(e)=>{
                    setFirst(e.target.value);
                }}>
                    <option>010</option>
                    <option>011</option>
                    <option>017</option>
                    <option>070</option>
                </select>
                &ensp;-&ensp;
                <input type='text' className="input1" maxLength='4' style={{width:'100px'}} 
                    onChange={(e)=>{
                    setSecond(e.target.value);
                }}/>
                &ensp;-&ensp;
                <input type='text' maxLength='4' style={{width:'100px'}}
                    onChange={(e)=>{
                    setThird(e.target.value);
                }}/>

                <b style={{marginLeft:'50px'}}>이미지 선택 : </b>
                <select className="form-control" onChange={changePhoto} style={{width:'100px'}}>
                    <option value="1">ㅋㅋ</option>
                    <option value="2">ㅋㅋ</option>
                    <option value="3">ㅋㅋ</option>
                    <option value="4">ㅋㅋ</option>
                    <option value="5">ㅋㅋ</option>
                </select>
                
            </div>

            <div>
                <h1>{first}&ensp;-&ensp;{second}&ensp;-&ensp;{third}</h1>
            </div>
            <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} alt="" className="photo"/>
      

        </div>
    )
}

export default FourApp;