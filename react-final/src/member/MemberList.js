import React,{useState,useEffect,useRef} from "react";
import '../App.css';
import axios from "axios";
import { useParams } from "react-router-dom";


const MemberList = () => {

    /////////////////////////// list에 넣기
    const [memberList,setMemberList]=useState([]);

    const list=()=>{
        const listurl=process.env.REACT_APP_SPRING_URL+"member/list";

        axios.get(listurl)      // res에는 getmapping의 list가 들어있음
        .then(res=>{
            // 스프링으로부터 받아온 List를 memberList에 넣기
            setMemberList(res.data);
            console.log("len="+res.data.length);
        })
    }
    // 처음 랜더링시 딱 한번 데이타 가져오기
    useEffect(()=>{
        //console.log("list");        // 그래야 시작하자마자 memberList에 값을 넣음
        // 값이 2번출력되면 src의 index.js에서 </React.StrictMode> 에를 2개다 주석처리해주면 됨
        
        list();
    },[]);
    //////////////////////////////////////////
        
        
    


    /////////////////////////////////////// 삭제 버튼 설정
    const deleteBtn=(num)=>{
        const deleteurl=process.env.REACT_APP_SPRING_URL+"member/delete?num="+num;

        axios.delete(deleteurl)
        .then(res=>{
            alert("삭제 성공!")
            list();
            // window.location.reload();            // 리로드 해도 될거같은데?
        });
    }
    ///////////////////////////////////////


    return (
        <div style={{width:'500px', borderBottom:'1px solid gray', borderTop:'1px solid gray'}}>
            <div style={{display:'flex', fontSize:'30px'}}>
                <div className="a">번호</div>
                <div className="a">회원명</div>
                <div className="a">아이디</div>
                <div className="a">핸드폰</div>
                <div className="a">이메일</div>
            </div>
            {
                memberList.map((row,idx)=>(
                    <div>
                        <div style={{display:'flex'}}>
                            <div className="a">{idx+1}</div>
                            <div className="a">{row.name}</div>
                            <div className="a">{row.id}</div>
                            <div className="a">{row.hp}</div>
                            <div className="a">{row.email}</div>
                        </div>
                        <div style={{fontSize:'20px'}}>주소</div>
                        <div style={{display:'flex'}}>
                            
                            <div>{row.addr}</div>
                            &emsp;&emsp;&emsp;&emsp;&emsp;
                            <button type="button" className="btn btn-warning"
                                onClick={()=>{
                                    deleteBtn(row.num)
                                }}>삭제</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MemberList;