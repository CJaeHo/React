import React from "react";
import {Route,Routes} from 'react-router-dom';      // Routes 안에 Route가 있음
import {Home,About,Food,Login} from './pages';     // 자동으로 pages의 index.js가 import됨
import Menu from "./components/Menu";
import './App.css';


const RouterMain=()=>{
    return (
        <div>
            {/* 모든 페이지에서 포함되는 컴포넌트나 이미지///  tiles 느낌나네*/}
            <h1 className="alert alert-info title">React Router 공부하기</h1>
            <Menu/>
            <img alt="" src={`${process.env.PUBLIC_URL}/image/5.jpg`} className="main_photo"></img>
            <hr className="line" align="left"/>
            <div className="main_comp">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/about/:name" element={<About/>}/>    
                    {/* path에 /about뒤에 /:name?을 적으면 name자리에 적히는 value값이 name에 들어간대 
                        그리고 뒤에 ?는 있어도 그만 없어도 그만이라는 뜻이래.. ?가 없으면 무조건 있어야된대*/}

                    <Route path="/login/:num" element={<Login/>}/>

                    <Route path="/food/:food1/:food2" element={<Food/>}></Route>

                    {/* 위에있는 path 이외의 매핑주소일 경우에는~ */}
                    <Route path="*" element={
                        <h1>잘못된 주소랑께요~</h1>
                    }/>

                </Routes>
            </div>
        </div>
    )
}

export default RouterMain;