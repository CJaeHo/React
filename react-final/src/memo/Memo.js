import React,{useState,useEffect, useCallback} from "react";
import '../App.css';
import axios from "axios";
import RowMemoItem from "./RowMemoItem";
import { useNavigate } from "react-router-dom";

const Memo=()=>{

    // URL 전역변수 사용
    const MEMO_URL=process.env.REACT_APP_SPRING_URL;

    // 데이타 값 받기
    const [nickname,setNickname]=useState('');
    const [message,setMessage]=useState('');

    const navi=useNavigate();

    // 백엔드에서 받아올 리스트 데이타 변수 설정
    const [memoList,setMemoList]=useState([]);

    // url 등록
    let memoListUrl=MEMO_URL+"memo/list";
    let insertUrl=MEMO_URL+"memo/insert";

   

    // 데이타를 가져오는 함수 설정
    const getList = useCallback(()=>{
        axios.get(memoListUrl)
        .then(res=>{
            setMemoList(res.data);
        })
    },[memoListUrl])

    useEffect(()=>{
        getList();
        console.log("memoList");
    },[getList, memoList])

    const insertMemo=()=>{
        axios.post(insertUrl,{nickname,message})
        .then(res=>{
        alert("성공");
        window.location.reload();
        })
    }


    return (
        <div style={{fontSize:'20px'}}>
            <h1>메모장</h1>
            <div style={{display:'flex'}}>
                <div className="memo_nickbox">
                    <input type='text' placeholder="닉네임" 
                        onChange={(e)=>{
                            setNickname(e.target.value);
                        }}></input>
                </div>
                <div className="memo_messagebox">
                    <input type='text' placeholder="메세지"
                        onChange={(e)=>{
                            setMessage(e.target.value);
                        }}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-info"
                        onClick={insertMemo}>저장</button>
                </div>
                <br/><br/>
            </div>
            {
                // RowMemoItem으로 리스트 값 보내기
                memoList.map((row,idx)=>(
                <RowMemoItem row={row} key={idx}/>))
            }
            
        </div>
    )
}

export default Memo;