import axios from 'axios';
import React, { useState,useEffect } from 'react';
import '../App.css';

const Logout = () => {

    // console.log(localStorage.loginOk);
    // console.log(localStorage.myId);

    const [id,setId]=useState(localStorage.myId); //zzz
    const [name,setName]=useState('');

    useEffect(()=>{
        const url=process.env.REACT_APP_SPRING_URL+"member/logout?id="+id;
        
        axios.get(url)
        .then(res=>{
            setName(res.data);

        });
    },[]);          // ,[] 처음 랜더링시 한번만 호출하게 하는 거


    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div style={{fontSize:'2em'}}>
            <div style={{display:'flex'}}>
                <div>
                    {name}({id})님
                </div>
                &emsp;
                <div>
                    <button type='button' className='btn btn-danger' 
                        onClick={logout}>로그아웃</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;