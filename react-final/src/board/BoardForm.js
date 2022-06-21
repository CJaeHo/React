import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const BoardForm = () => {

    let loginOk=localStorage.loginOk;       // 브라우저에 저장되는 값을 이용해서 로그인되어있는지 확인
    let id=localStorage.myId;             // 브라우저에 저장되는 값을 이용해서 ID 가져오기...db에 있는 id랑 이름이 같으면 {id}만 적어주면 되는데 다르면 ???.id 이렇게 적어줘야해서 id변수로 바꿈
    const naVi=useNavigate();


    const OK=()=>{
        if(loginOk==null){
            alert("로그인 후 글을 작성해주세요");
            naVi("/login");
        }
    }
    useEffect(()=>{
        OK();
    },[]);              // ,[] 랜더링시 한번만 호출하겠다는 거임

    return (
        <div>
            <form>
                <table className='table table-bordered' style={{width:'400px'}}>
                    <caption><h1>게시판 작성</h1></caption>
                    <tbody style={{fontSize:'20px'}}>
                        <tr>
                            <th style={{backgroundColor:'#ddd', width:'100px', textAlign:'center'}}>아이디</th>
                            <td>{id}</td>           
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd', width:'100px', textAlign:'center'}}>대표 이미지</th>
                            <td>
                                <input type='file' className='form-control' style={{witdh:'250px'}} required/>
                            </td>           
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd', width:'100px', textAlign:'center'}}>제목</th>
                            <td>
                                <input type='text' className='form-control' style={{width:'300px'}} required/>
                            </td>           
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea className='form-control' style={{width:'400px', height:'120px'}} required></textarea>
                            </td>           
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit" className='btn btn-info'>게시글 저장</button>
                                <button type="submit" className='btn btn-success' 
                                    onClick={()=>{
                                        naVi("/board/list")
                                    }}>목록</button>
                            </td>           
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default BoardForm;