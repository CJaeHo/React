import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    


    return (
        <div>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/test'>Test</NavLink></li>
            <li><NavLink to='/memo'>Memo</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/member/form'>Member</NavLink></li>
            <li><NavLink to='/shop/list'>Shop</NavLink></li>
            <li><NavLink to='/board/list'>Board</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </div>
    )
}

export default Menu;