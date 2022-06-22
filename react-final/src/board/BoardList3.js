import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const BoardList3 = () => {


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
            {
                data.list && data.list.map((item) => (
                    <List sx={{ width: '100%', maxWidth: 400}}>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="" src={photoUrl+item.photo}/>
                        </ListItemAvatar>
                        <ListItemText onClick={()=>{naVi(`/board/detail/${item.num}/${currentPage}`)}} style={{cursor:'pointer'}}
                        primary={item.subject}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline',  }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                {item.content}
                            </Typography>
                                <b style={{position:'absolute', left:'300px', fontSize:'18px'}}>{item.day}</b>
                            </React.Fragment>
                        }
                        />
                        </ListItem>
                    </List>
                 ))
            }
        </div>
    )
};

export default BoardList3;