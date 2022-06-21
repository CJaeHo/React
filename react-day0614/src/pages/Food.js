import React from "react";
import '../App.css';
import {useParams, useNavigate} from 'react-router-dom';


const Food=()=>{

    const {food1,food2}=useParams('');
    console.log(food1,food2);
    const navi=useNavigate();

    return (
        <div>
            <h3>오늘의 {food1==="2"?'점심':'저녁'}  메뉴</h3>
            <button type="button" className="btn btn-primary dirobtn"
                onClick={()=>{
                    navi(-1);       // -1은 이전페이지가는 형식으로 많이 쓰임
                }}>이전페이지</button>
            <img alt="" src={`../../image/${food1}.jpg`} className="food_img"/>
            <img alt="" src={`../../image/${food2}.jpg`} className="food_img"/>
                {/* 여기 src 경로보면 ../../인데 파일위치보면 ../이 맞음
                    근데 이거는 url경로대로 위치 따야해서 ../../이 들어가는 거임 */}
        </div>
    )
}

export default Food;