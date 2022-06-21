import React,{ useState } from "react";
import '../App.css';
import EightSubApp from "./EightSubApp";
import EightSubApp2 from "./EightSubApp2";

const EightApp = () => {

    const [color,setColor]=useState('magenta');
    const [message,setMessage]=useState('Have a Nice Day!!!');
    const [photo,setPhoto]=useState('c5');
    const [likeColor,setLikeColor]=useState(['pink','yellow','gray']);

    const chColor=(col)=>{
        setColor(col);
    }
    const chMessage=(msg)=>{
        setMessage(msg);
    }
    const chPhoto=(pho)=>{
        setPhoto(pho);
    }

    const addColor=(co)=>{
        setLikeColor(likeColor.concat(co));
    }

    const deleteData=(index)=>{
        setLikeColor(likeColor.filter((item,i)=>i!==index));        // index번지만 걸러내는거
    }

    return (
        <div>
            <h3 className = "alert alert-danger">EightApp 컴포넌트 - 부모, 자식 통신 문제</h3>
            <br/>
            <h4 style={{color:color}}>{message}</h4>
            <img alt="" src={`../image/${photo}.png`} style={{width:'100px'}}/>
            <br/>
            {
                likeColor.map((co,idx)=>(<div className="circle" key={idx} style={{backgroundColor:(co)}} onDoubleClick={()=>deleteData(idx)}>{idx}</div>)) 
            }
            <br style={{clear:'both'}}></br>            {/* 겹치기않게해주네 */}
            <EightSubApp color={chColor} message={chMessage} photo={chPhoto} />
            <EightSubApp2 addColor={addColor}/>
        </div>
    )
}

export default EightApp;