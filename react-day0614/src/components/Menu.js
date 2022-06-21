import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';
const Menu=()=>{
    return (
        <div>
            <ul className="menu">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                {/* to=''는 링크거는거 <a>태그 생각하면 될 듯 */}
                
                <li><NavLink to='/about/Lee'>About2</NavLink></li>
                        {/* url에 lee가 나옴 */}

                <li><NavLink to='/food/2/3'>점심메뉴</NavLink></li>
                <li><NavLink to='/food/5/6'>저녁메뉴</NavLink></li>

                <li><NavLink to='/login/1'>로그인</NavLink></li>
                
            </ul>
        </div>
    )
}

export default Menu;