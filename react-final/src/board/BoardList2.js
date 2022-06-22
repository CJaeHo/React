import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const BoardList2 = () => {

    //
    const [data,setData]=useState('');

    // 현재 페이지번호 읽어오기
    const {currentPage}=useParams();

    // 경로 이동
    const naVi=useNavigate();


    // url 선언
    let pagelistUrl=process.env.REACT_APP_SPRING_URL+"board/pagelist?currentPage="+currentPage;
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    // 시작시 호출되는 함수
    const pageList=()=>{
        axios.get(pagelistUrl)
        .then(res=>{                // res == response
            setData(res.data)
        })
    }

    useEffect(()=>{
        pageList();
    },[data])

    return (
        <div>

            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {
                data.list && data.list.map((item) => (
                    <ImageListItem key={item.photo}>
                    <img
                        src={`${photoUrl}${item.photo}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${photoUrl}${item.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.subject}
                        loading="lazy"
                        style={{cursor:'pointer'}}
                            onClick={()=>{
                                naVi(`/board/detail/${item.num}/${currentPage}`)
                            }}
                    />
                    </ImageListItem>
                ))
            }
            </ImageList>



        </div>
    );
};

export default BoardList2;