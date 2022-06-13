import React, {useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import AirplanemodeActiveSharpIcon from '@mui/icons-material/AirplanemodeActiveSharp';
import img1 from '../image2/01.png';
import img2 from '../image2/02.png';
import img3 from '../image2/03.png';
import img4 from '../image2/04.png';
import img5 from '../image2/05.png';

const TwoApp=()=>{

    // 이미지를 배열변수에 넣기
    const imgArr=[img1,img2,img3,img4,img5];                    // src폴더
    const imgList=imgArr.map((img)=>(<img alt="" src={img}/>))  // src폴더
    const imgArr2=['01','02','03','04','05'];                    // public폴더

    return(
        
        

        <div>
            <Alert severity="warning" style={{fontSize:'20px'}}>TwoApp 컴포넌트라고여!!&nbsp;<AirplanemodeActiveSharpIcon/></Alert>
        
            <h4>src폴더의 이미지를 배열에 넣어 반복하기</h4>    
            {
                imgArr.map((myimg)=>(<img alt='' src={myimg}/>))
            }
            <br/>
            {
                imgList
            }
            <h4>public의 이미지를 배열에 넣어 반복하기</h4>
            {
                imgArr2.map((photo)=>(<img alt="" src={`../image/image_${photo}.png`}/>))
            }
        </div>        
    )
}

export default TwoApp;