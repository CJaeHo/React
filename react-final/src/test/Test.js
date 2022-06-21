import React,{useState,useEffect, useCallback} from "react";
import '../App.css';
import axios from "axios";
import RowTestItem from "./RowTestItem";
import { useNavigate } from "react-router-dom";

const Test = () => {

    // 데이타 값 받기
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');


    // 백엔드에서 받아올 리스트 데이타 변수
    const [tlist,setTlist]=useState('');


    // URL 전역변수 사용
    const testurl=process.env.REACT_APP_SPRING_URL;

    // url 등록
    let listurl=testurl+"test/list";
    let inserturl=testurl+"test/insert";

    // 경로 이동
    const navi=useNavigate();



    // 데이타를 가져오는 리스트 함수 useCallback쓰는거
    const addlist = useCallback(()=>{
        axios.get(listurl)
        .then(res=>{
            setTlist(res.data);
        })
    },[listurl])

    // 처음 랜더링 시 리스트 호출
    useEffect(()=>{
        addlist();

    },[addlist, tlist])

    // db에 데이타를 넣어야지 insertTest 함수 사용해서
    const insertTest=()=>{
        axios.post(inserturl,{name,message})
        .then(res=>{
            navi("/memo");
        })
    }

    // 입력 KeyUp 이벤트 설정하기
    const insertEnter=(e)=>{
        if(e.key==='Enter'){
            insertTest();            // 엔터를 치면 btnInsert가 실행되면서 추가되게끔
            e.target.value='';
        }
    }


    return (
        <div>
            <div>
                <div>
                    <input type='text' placeholder="이름"
                        onChange={(e)=>{
                            setName(e.target.value);
                        }} 
                        onKeyUp={insertEnter}></input>
                </div>
                <div>
                    <input type='text' placeholder="내용"
                        onChange={(e)=>{
                            setMessage(e.target.value);
                        }}></input>
                </div>
            </div>
        </div>
    );
};

export default Test;