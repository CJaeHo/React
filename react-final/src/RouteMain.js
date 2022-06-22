import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {About,Info,Main,Menu,Title} from './components';
import {Login} from "./login";
import {Board, BoardDetail, BoardForm} from './board';
import {Shop,ShopForm,ShopDetail,ShopUpdateForm} from './shop';
import {Member,MemberList} from './member';
import {Memo} from './memo';
import {Test} from './test';

const RouteMain=()=>{




    return (
        <div className="bg">
            {/* 공통으로 들어가는 js파일들 */}
            <div className="title"><Title/></div>
            <div className="info"><Info/></div>
            <div className="menu"><Menu/></div>

            <div className="main">
                <Routes>
                    
                    {/* Main */}
                    <Route path="/" element={<Main/>}/>

                    {/* Shop */}
                    <Route path="/shop/list" element={<Shop/>}/>
                    <Route path="/shop/form" element={<ShopForm/>}/>
                    <Route path="/shop/detail/:num" element={<ShopDetail/>}/>
                    <Route path="/shop/detail/:num/:idx" element={<ShopDetail/>}/>
                    <Route path="/shop/updateform/:num" element={<ShopUpdateForm/>}/>
                    <Route path="/shop/updateform/:num/:idx" element={<ShopUpdateForm/>}/>

                    {/* Memo */}
                    <Route path="/memo" element={<Memo/>}/>

                    {/* Test */}
                    <Route path="/test" element={<Test/>}/>

                    {/* Board */}
                    <Route path="/board/list/:currentPage" element={<Board/>}/>
                    <Route path="/board/form" element={<BoardForm/>}/>
                    <Route path="/board/detail/:num/:currentPage" element={<BoardDetail/>}/>        {/* currentPage가 들어가는 이유는 보던 페이지로 가게하기위함 */}


                    {/* Member */}
                    <Route path="/member/form" element={<Member/>}/>
                    <Route path="/member/list" element={<MemberList/>}/>

                    {/* Login */}  {/* 로그인에 라우터가 없는 이유는 로그인js에서 각각 파일로 이동되도록 이미 해놔서 없는 거임 */}
                    <Route path="/login" element={<Login/>}/>


                    {/* About */}
                    <Route path="/about" element={<About/>}/>

                    <Route path="*" element={
                        <div>
                            <h1>잘못된 URL 주소인데요</h1>
                        </div>
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default RouteMain;