import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const BoardForm = () => {

    const [photo,setPhoto]=useState('');
    const [subject,setSubject]=useState('');
    const [content,setContent]=useState('');


    // url 선언
    let uploadUrl=process.env.REACT_APP_SPRING_URL+"board/upload";
    let insertUrl=process.env.REACT_APP_SPRING_URL+"board/insert";
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";


    let id=localStorage.myId;             // 브라우저에 저장되는 값을 이용해서 ID 가져오기...db에 있는 id랑 이름이 같으면 {id}만 적어주면 되는데 다르면 ???.id 이렇게 적어줘야해서 id변수로 바꿈
    const naVi=useNavigate();


    // 이미지 업로드 이벤트
    const imageUpload=(e)=>{
        const uploadFile=e.target.files[0];             // sts에서 /board/upload 컨트롤 맵핑에서 uploadFile 변수이름이 같게 해주기
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);
        })
    }

    // submit 이벤트
    const onBoardInsert=(e)=>{
        e.preventDefault();             // 기본값(현재주소:새로고침) 무효화 이벤트

        axios.post(insertUrl,{id,photo,subject,content})
        .then(res=>{
            naVi("/board/list/1");
        })
    }


    const OK=()=>{
    }
    useEffect(()=>{
        OK();
    },[]);              // ,[] 랜더링시 한번만 호출하겠다는 거임

    return (
        <div>
            <img alt='' src={photoUrl+photo} className='imgPhoto'></img>
            <form onSubmit={onBoardInsert}>
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
                                <input type='file' className='form-control' style={{width:'250px'}} 
                                    onChange={imageUpload} required/>
                            </td>           
                        </tr>
                        <tr>
                            <th style={{backgroundColor:'#ddd', width:'100px', textAlign:'center'}}>제목</th>
                            <td>
                                <input type='text' className='form-control' style={{width:'300px'}} 
                                    onChange={(e)=>{
                                        setSubject(e.target.value);
                                    }} required/>
                            </td>           
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea className='form-control' style={{width:'400px', height:'120px'}} 
                                    onChange={(e)=>{
                                        setContent(e.target.value);
                                    }} required></textarea>
                            </td>           
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit" className='btn btn-info'>게시글 저장</button>
                                <button type="button" className='btn btn-success' 
                                    onClick={()=>{
                                        naVi("/board/list/1")
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