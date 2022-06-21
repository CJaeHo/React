import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import BoardList1 from './BoardList1';
import BoardList2 from './BoardList2';
import BoardList3 from './BoardList3';


const Board=()=>{

    // 경로 이동
    const naVi=useNavigate();


    const [show,setShow]=useState(1);
    

    const goForm=()=>{
        naVi("/board/form");
    }


    return (
        <div>
            <button type='button' className='btn btn-success writeBtn'
                onClick={goForm}>글쓰기</button>
            <br/><br/>

            <div>
                <span class="material-symbols-outlined spanBtn"  
                    onClick={()=>{
                        setShow(1);
                    }}>format_list_bulleted</span>
                &emsp;
                <span class="material-symbols-outlined spanBtn" 
                    onClick={()=>{
                        setShow(2);
                    }}>grid_view</span>
                &emsp;
                <span class="material-symbols-outlined spanBtn" 
                    onClick={()=>{
                        setShow(3);
                    }}>list_alt</span>
            </div>
            <div>
                {show===1?<BoardList1/>:show===2?<BoardList2/>:<BoardList3/>}
            </div>
        </div>
    )
}

export default Board;