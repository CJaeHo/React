import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const BoardDetail = () => {

    const {num,currentPage}=useParams();
    const [dto,setDto]=useState('');
    const naVi=useNavigate();

    let loginOk=localStorage.loginOk;
    const [id,setId]=useState(localStorage.myId); 

    const OK=()=>{
        if(loginOk==null){
            alert("로그인 후 이용해주세요");
            naVi("/login");
        }

        else{
            naVi("/board/form");
        }
    }



    // url
    let detailUrl=process.env.REACT_APP_SPRING_URL+"board/detail?num="+num;
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    // DATA를 가져올 함수
    const getData=()=>{
        axios.get(detailUrl)
        .then(res=>{
            setDto(res.data);               // sts에서 조회수 증가 후에 반환이라 바로 값만 가져오면 됨
        })
    }

    useEffect(()=>{
        getData();
    },[])               // ,[] 랜더링 시 한번만 호출하겠음



    return (
        <div style={{fontSize:'20px'}}>
            <table className='table' style={{width:'600px'}}>
                <caption><b><h3>{dto.subject}</h3></b></caption>
                <tbody>
                    <tr>
                        <td>
                            <b>작성자:{dto.name}({dto.id})</b>
                            <span style={{float:'right',color:'gray'}}>{dto.day}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt='' src={photoUrl+dto.photo} style={{maxWidth:'400px'}}/>
                            <br/><br/>
                            <pre style={{backgroundColor:'rgba( 255, 255, 255, 0 )', border:'none'}}>
                                <b>{dto.content}</b>
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td><b style={{color:'gray'}}>조회 {dto.readcount}</b></td>
                    </tr>
                    <tr>
                        <td>
                            {
                                dto.id === id ? 
                                <button type='button' className='btn btn-info' style={{width:'100px', marginRight:'10px'}}
                                    onClick={()=>{
                                        naVi("/board/form");
                                    }}>수정</button> : <button type='button' className='btn btn-info' style={{width:'100px', marginRight:'10px'}} onClick={OK}>글쓰기</button>
                            }
                            <button type='button' className='btn btn-success' style={{width:'100px', marginRight:'10px'}}
                                onClick={()=>{
                                    naVi(`/board/list/${currentPage}`);
                                }}>목록</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BoardDetail;