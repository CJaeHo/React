import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const RowMemoItem=({row})=>{

    // URL 전역변수 사용
    const MEMO_URL=process.env.REACT_APP_SPRING_URL;
    const navi=useNavigate();
    let deleteUrl=MEMO_URL+"memo/delete?num="+row.num;

    // 데이타를 가져오는 함수 설정
    const deleteMemo=()=>{
        axios.delete(deleteUrl)
        .then(res=>{
            alert("완료");
            navi("/memo");
        })
    }

    return (

        <div>
            <hr/>
            <div style={{display:'flex', width:'600px', textAlign:'center'}}>
                <div style={{width:'100px'}}>
                    {row.nickname}
                </div>
                <div style={{width:'300px'}}>
                    {row.message}
                </div>
                <div style={{width:'150px'}}>
                    {row.writeday}
                </div>
                <div>
                    <button type="button" className="btn btn-danger" 
                        onClick={deleteMemo}>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default RowMemoItem;